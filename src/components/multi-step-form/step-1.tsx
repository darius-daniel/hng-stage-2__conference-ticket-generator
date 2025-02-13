import StepHeader from "./step-header.tsx";
import { FormProps } from "../../lib/definitions.ts";

export default function Step1({formData, stepData}: FormProps) {
  const {ticketType } = formData.values;

  function handleTicketTypeChange (newTicketType: "free" | "vip" | "vvip") {
    formData.setValues((prev) => ({...prev, ticketType: newTicketType}))
  }

  function handleTicketQtyChange (newQty: string) {
    formData.setValues((prev) => ({...prev, ticketQty: parseInt(newQty)}))
  }

  return (<section className="step step-1">
    <StepHeader stepTitle="Ticket Selection" stepNumber={stepData.value}/>

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
            <span
              className={ticketType === "free"
                ? "ticket__level ticket__level-1 selected-ticket-level"
                : "ticket__level ticket__level-1"
              }
              onClick={() => handleTicketTypeChange("free")}
            >
              <h4 className="ticket__price">Free</h4>
              <p className="ticket__tag">REGULAR ACCESS</p>
              <p className="ticket__stock">20/52</p>
            </span>

            <span
              className={ticketType === "vip"
                ? "ticket__level ticket__level-1 selected-ticket-level"
                : "ticket__level ticket__level-1"
              }
              onClick={() => handleTicketTypeChange("vip")}
            >
              <h4 className="ticket__price">$50</h4>
              <p className="ticket__tag">VIP ACCESS</p>
              <p className="ticket__stock">20/52</p>
            </span>

            <span
              className={ticketType === "vvip"
                ? "ticket__level ticket__level-1 selected-ticket-level"
                : "ticket__level ticket__level-1"
              }
              onClick={() => handleTicketTypeChange("vvip")}
            >
              <h4 className="ticket__price">$150</h4>
              <p className="ticket__tag">VVIP ACCESS</p>
              <p className="ticket__stock">20/52</p>
            </span>
          </div>
        </div>

        <div className="form-inputs__group ticket_qty">
          <h3 className="form-inputs__heading">Number of Tickets</h3>
          <div className="custom-select">
            <select
              name="purchase-qty"
              id="ticket-purchase-qty"
              defaultValue={1}
              onChange={(event) => handleTicketQtyChange(event.target.value)}
              required
            >
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
            onClick={() => stepData.setValue((prev: number) => prev + 1)}
            disabled={!ticketType}
          />
          <input
            type="button"
            value="Cancel"
            className="btn btn-secondary"
            onClick={() => stepData.setValue((prev: number) => prev - 1)}
            disabled={stepData.value === 1}
          />
        </div>
      </div>
    </div>
  </section>)
}
