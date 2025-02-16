import StepHeader from "./step-header.tsx";
import { PurchaseFormProps, TicketType } from "../../lib/definitions.ts";
import {updateFormData} from "../../lib/actions.ts";

export default function Step1({ formData, stepData }: PurchaseFormProps) {
  const { ticketType } = formData.values;
  const tickets: TicketType[] = [
    {
      id: "free",
      name: "Free",
      price: "Free",
      stock: 20,
      description: "REGULAR ACCESS",
    },
    { id: "vip", name: "VIP", price: 50, stock: 15, description: "VIP ACCESS" },
    {
      id: "vvip",
      name: "VVIP",
      price: 150,
      stock: 10,
      description: "VVIP ACCESS",
    },
  ];

  function handleTicketTypeChange(newTicketType: string) {
    formData.setValues((prev) => ({ ...prev, ticketType: newTicketType }));
  }

  function handleTicketQtyChange(newQty: string) {
    formData.setValues((prev) => ({ ...prev, ticketQty: parseInt(newQty) }));
  }

  return (
    <section className="step step-1">
      <StepHeader stepTitle="Ticket Selection" stepNumber={stepData.value} />

      <div className="step__body">
        <div className="event">
          <div className="event__header">
            <h3 className="event__title">Techember Fest &apos;&apos;25</h3>
            <p className="event__description">
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
          </div>
          <div className="event__details">
            <p className="event__location">📍[Event Location]</p>
            <p className="event__date">March 15, 2025 | 7:00 PM</p>
          </div>
        </div>

        <hr />

        <div className="form-inputs">
          <div className="form-inputs__group tickets">
            <h3 className="form-inputs__heading">Select Ticket Type:</h3>
            <div className="ticket__levels">
              {tickets.map((ticket) => (
                <span
                  key={ticket.id}
                  className={`ticket__level ticket__level-${ticket.id} ${ticketType === ticket.id ? "ticket__level--selected" : ""}`}
                  onClick={() => {
                    handleTicketTypeChange(ticket.id);
                    (async () => await updateFormData("ticketType", ticket.id))()
                  }}
                  role="radio"
                  aria-checked={ticketType === ticket.id}
                >
                  <h4 className="ticket__price">{ticket.price}</h4>
                  <p className="ticket__tag">{ticket.description}</p>
                  <p className="ticket__stock">{ticket.stock}/52</p>
                </span>
              ))}
            </div>
          </div>

          <div className="form-inputs__group ticket_qty">
            <h3 className="form-inputs__heading">Number of Tickets</h3>
            <div className="custom-select">
              <select
                name="purchase-qty"
                id="ticket-purchase-qty"
                defaultValue={1}
                onChange={(event) => {
                  handleTicketQtyChange(event.target.value);
                  (async () => await updateFormData("ticketQty", formData.values.ticketQty))();
                }}
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
              onClick={() => {}}
              disabled={stepData.value === 1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
