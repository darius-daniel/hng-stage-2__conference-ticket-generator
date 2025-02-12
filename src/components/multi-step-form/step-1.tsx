import StepHeader from "./step-header.tsx";

export default function Step1() {
  return (<section className="step step-1">
    <StepHeader stageTitle="Ticket Selection" stageNumber={1} />

    <div className="step__body">
      <div className="event">
        <h3 className="event__title">Techember Fest &apos;&apos;25</h3>
      </div>
    </div>
  </section>)
}