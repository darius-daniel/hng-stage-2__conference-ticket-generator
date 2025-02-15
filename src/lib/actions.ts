"use server";

import { openDB } from "idb";

const dbPromise = openDB("ticketPurchaseForm", 1, {
  upgrade(db) {
    db.createObjectStore("formData");
    db.createObjectStore("avatar");
  },
});

export async function setPurchaseFormData(key: string, value: string | number) {
  return (await dbPromise).put("formData", value, key);
}

export async function getPurchaseFormData(key: string) {
  return (await dbPromise).get("formData", key);
}

export async function setAvatar(imageFile: File) {
  return (await dbPromise).put("avatar", imageFile, "userAvatar");
}

export async function getAvatar() {
  return (await dbPromise).get("avatar", "userAvatar");
}

export async function uploadImage(
  file: File,
): Promise<{ url: string; thumbnailUrl: string }> {
  const cloudName = "ddohrkoq5";
  const uploadPreset = "ml_default";

  const fd = new FormData();
  fd.append("upload_preset", uploadPreset);
  fd.append("tags", "browser_upload");
  fd.append("file", file);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: fd,
      },
    );

    if (!response.ok) {
      const errorData = await response.text(); //Try fetching the error as text first
      let errorMessage = `Upload failed with status ${response.status}: ${response.statusText}`;
      try {
        const parsedError = JSON.parse(errorData);
        errorMessage = parsedError.error.message || errorMessage; //Attempt to extract a more detailed error message
      } catch (jsonParseError) {
        console.error("Error parsing error JSON:", jsonParseError);
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    const url = data.secure_url;
    const thumbnailUrl = data.eager ? data.eager[0].secure_url : null;

    return { url, thumbnailUrl };
  } catch (error: any) {
    console.error("Error uploading the file:", error);
    throw error; // Re-throw for handling in calling function
  }
}
