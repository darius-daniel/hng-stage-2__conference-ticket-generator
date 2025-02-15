import {FormProps} from "../../lib/definitions.ts";
import StepHeader from "./step-header.tsx";
import userImg from '../../assets/images/user-img.png';

export default function Step3({stepData, formData}: FormProps) {
  return (<section className="step step-3">
    <StepHeader stepTitle="Ready" stepNumber={stepData.value}/>
    <section className="step__body step-3__body">
      <h1 className="step-3__title">Your Ticket is Booked</h1>
      <p className="step-3__desc">
        You can download or check your email for a copy
      </p>

      <div className="ticket-container">
        <div className="ticket">
          <div>
            <h2 className="ticket__title">Techember Fest &apos;&apos;25</h2>
            <div className="ticket__desc">
              <p className="ticket__location">📍04 Rumens Road, Ikoyi, Lagos</p>
              <p className="ticket__date">📅 March 15, 2025 | 7:00 PM</p>
            </div>
          </div>

          <img src={userImg} alt="" className="ticket__img"/>

          <div className="ticket__details">
            <div className="ticket__detail ticket__name">
              <p className="detail__tag">Enter your name</p>
              {formData.values.name}
            </div>
            <div className="ticket__detail ticket__email">
              <p className="detail__tag">Enter your email</p>
              {formData.values.email}
            </div>
            <div className="ticket__detail ticket__type">
              <p className="detail__tag">Ticket Type:</p>
              {formData.values.ticketType.toUpperCase()}
            </div>
            <div className="ticket__detail ticket__qty">
              <p className="detail__tag">Ticket for:</p>
              {formData.values.ticketQty}
            </div>
            <div className="ticket__detail ticket__special-request">
              <p className="detail__tag">Special Request?</p>
              {formData.values.specialRequest}
            </div>
          </div>
        </div>
      </div>

      <div className="form-btns">
        <input
          type="button"
          value="Download Ticket"
          className="btn btn-primary"
          onClick={() => stepData.setValue((prev: number) => prev + 1)}
        />
        <input
          type="button"
          value="Book Another Ticket"
          className="btn btn-secondary"
          onClick={() => stepData.setValue((prev: number) => prev - 1)}
        />
      </div>
    </section>
  </section>)
}