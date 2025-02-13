import StepHeader from "./step-header.tsx";
import { Dispatch, SetStateAction } from "react";

interface Props {
  step: {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
  };
}

export default function Step1({step}: Props) {
  return (<section className="step step-1">
    <StepHeader stepTitle="Ticket Selection" stepNumber={step.value}/>

    <div className="step__body">
      <div className="event">
        <div className="event__header">
          <h3 className="event__title">Techember Fest &apos;&apos;25</h3>
          <p className="event__description">
            Join us for an unforgettable experience at [Event Name]! Secure your spot now.
          </p>
        </div>
        <div className="event__details">
          <p className="event__location">📍[Event Location]</p>
          <p className="event__date">March 15, 2025 | 7:00 PM</p>
        </div>
      </div>

      <hr/>

      <div className="form-inputs">
        <div className="form-inputs__group tickets">
          <h3 className="form-inputs__heading">Select Ticket Type:</h3>
          <div className="ticket__levels">
            <span className="ticket__level ticket__level-1">
              <h4 className="ticket__price">Free</h4>
              <p className="ticket__tag">REGULAR ACCESS</p>
              <p className="ticket__stock">20/52</p>
            </span>

            <span className="ticket__level ticket__level-2">
              <h4 className="ticket__price">$150</h4>
              <p className="ticket__tag">VIP ACCESS</p>
              <p className="ticket__stock">20/52</p>
            </span>

            <span className='ticket__level ticket__level-3'>
              <h4 className="ticket__price">$150</h4>
              <p className="ticket__tag">VVIP ACCESS</p>
              <p className="ticket__stock">20/52</p>
            </span>
          </div>
        </div>

        <div className="form-inputs__group ticket_qty">
          <h3 className="form-inputs__heading">Number of Tickets</h3>
          <div className="custom-select">
            <select name="purchase-qty" id="ticket-purchase-qty" defaultValue={1}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>

        <div className="form-btns">
          <input
            type="button"
            value="Next"
            className="btn btn-primary"
            onClick={() => step.setValue((prev: number) => prev + 1)}
          />
          <input
            type="button"
            value="Cancel"
            className="btn btn-secondary"
            onClick={() => step.setValue((prev: number) => prev - 1)}
          />
        </div>
      </div>
    </div>
  </section>)
}
