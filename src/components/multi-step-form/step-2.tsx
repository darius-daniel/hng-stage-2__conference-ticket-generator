import StepHeader from "./step-header.tsx";
import {Dispatch, SetStateAction} from "react";

interface Props {
  step: {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
  }
}

export default function Step2({step}: Props) {
  return (
    <section className="step step-2">
      <StepHeader stepTitle="Attendee Details" stepNumber={step.value}/>
    </section>
  )
}