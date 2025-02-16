import {openDB} from 'idb';
import {PurchaseFormData} from "./definitions.ts";

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
  } catch (error) {
    console.error("Error uploading the file:", error);
    throw error;
  }
}

const DB_NAME = 'formDB';
const STORE_NAME = 'formData';

// Initialize the database
export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
}

// Save form data
export async function updateFormData(key: string, data: PurchaseFormData) {
  const db = await initDB();
  await db.put(STORE_NAME, data, key);
}

// Retrieve form data
export async function fetchFormData(key: string) {
  const db = await initDB();
  return db.get(STORE_NAME, key);
}

// Clear the form data
export async function clearFormData() {
  const db = await initDB();
  await db.clear(STORE_NAME);
}
