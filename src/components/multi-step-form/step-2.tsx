import StepHeader from "./step-header.tsx";
import cloudDownloads from "../../assets/images/cloud-download.svg";
import envelope from "../../assets/images/envelope.svg";
import { FormProps } from "../../lib/definitions.ts";

export default function Step2({stepData, formData}: FormProps) {
  return (
    <section className="step step-2">
      <StepHeader stepTitle="Attendee Details" stepNumber={stepData.value}/>

      <div className="step__body">
        <div className="form-inputs__group avatar-upload">
          <h3 className="form-inputs__heading">Upload Profile Photo</h3>


          <div className="transparent-backdrop"></div>

          <div className="uploader-container">
            <div className="uploader-overlay">
              <img src={cloudDownloads} alt="" className="overlay__image"/>
              Drag & drop or click to upload image
            </div>
            <input type="file" name="upload" id="uploader"/>
          </div>
        </div>

        <hr/>

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
                formData.setValues((prev) => ({...prev, name: event.target.value}))
              }}
            />
          </label>

          <label htmlFor="user-email" className="text-input__label">
            Enter your email *
            <img src={envelope} alt="Envelope icon" className="text-input__image"/>
            <input
              type="email"
              name="email"
              id="email"
              className="text-input"
              required
              onChange={(event) => {
                formData.setValues((prev) => ({...prev, email: event.target.value}))
              }}
            />
          </label>

          <label htmlFor="special-request" className="text-input__label">
            Special request?
            <textarea
              name="special-request"
              id="special-request"
              className="text-input"
              required
              onChange={(event) => {
                formData.setValues((prev) => ({...prev, specialRequest: event.target.value}))
              }}
            />
          </label>
        </div>

        <div className="form-btns">
          <input
            type="button"
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
  )
}