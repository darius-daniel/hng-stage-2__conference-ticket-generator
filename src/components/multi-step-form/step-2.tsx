import StepHeader from "./step-header.tsx";
import cloudDownloads from "../../assets/images/cloud-download.svg";
import envelope from "../../assets/images/envelope.svg";
import { FormProps } from "../../lib/definitions.ts";
import { ChangeEvent, useState } from "react";
import { uploadImage } from "../../lib/actions.ts";

export default function Step2({ stepData, formData }: FormProps) {
  const [avatar, setAvatar] = useState<string | undefined>();
  const [avatarError, setAvatarError] = useState<string | null>(null);

  const handleAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setAvatarError(null); // Clear previous errors
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const uploadedFile = await uploadImage(file);
        setAvatar(uploadedFile.url); // Update state with the URL
      } catch (error: any) {
        setAvatarError(
          error.message || "Error uploading image. Please try again.",
        );
      }
    }
  };

  return (
    <section className="step step-2">
      <StepHeader stepTitle="Attendee Details" stepNumber={stepData.value} />

      <div className="step__body">
        <div className="form-inputs__group avatar-upload">
          <h3 className="form-inputs__heading">Upload Profile Photo</h3>

          <div className="transparent-backdrop"></div>

          <div className="uploader-container">
            <div className="uploader-overlay">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Uploaded Avatar"
                  className="uploaded-avatar"
                />
              ) : (
                <div className="overlay__message">
                  <img src={cloudDownloads} alt="" className="overlay__image" />
                  <p>Drag & drop or click to upload image</p>
                </div>
              )}
            </div>

            <input
              type="file"
              accept="image/"
              id="uploader"
              required
              onChange={handleAvatarChange}
            />
          </div>
          {avatarError && <div className="error-message">{avatarError}</div>}
        </div>

        <hr />

        <div className="text-inputs">
          <label htmlFor="user-name" className="text-input__label">
            Enter your name
            <input
              type="text"
              name="name"
              id="username"
              className="text-input"
              required
              onChange={(event) => {
                formData.setValues((prev) => ({
                  ...prev,
                  name: event.target.value,
                }));
              }}
            />
          </label>

          <label htmlFor="user-email" className="text-input__label">
            Enter your email *
            <img
              src={envelope}
              alt="Envelope icon"
              className="text-input__image"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="text-input"
              required
              onChange={(event) => {
                formData.setValues((prev) => ({
                  ...prev,
                  email: event.target.value,
                }));
              }}
            />
          </label>

          <label htmlFor="special-request" className="text-input__label">
            Special request?
            <textarea
              name="special-request"
              id="special-request"
              className="text-input"
              onChange={(event) => {
                formData.setValues((prev) => ({
                  ...prev,
                  specialRequest: event.target.value,
                }));
              }}
            />
          </label>
        </div>

        <div className="form-btns">
          <input
            type="submit"
            value={`Get My ${formData.values.ticketType.toUpperCase()} Ticket`}
            className="btn btn-primary"
            onClick={() => stepData.setValue((prev: number) => prev + 1)}
          />
          <input
            type="button"
            value="Back"
            className="btn btn-secondary"
            onClick={() => stepData.setValue((prev: number) => prev - 1)}
          />
        </div>
      </div>
    </section>
  );
}
