import Step1 from "./step-1.tsx";
import Step2 from "./step-2.tsx";
import {useEffect, useState} from "react";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [ticketType, setTicketType] = useState("free");

    const [formStep, setFormStep] = useState(
      <Step1
        step={{value: step, setValue: setStep}}
        ticketType={{value: ticketType, setValue: setTicketType}}
      />
    );

    useEffect(() => {
        if (step === 1) {
            setFormStep(<Step1
              step={{value: step, setValue: setStep}}
              ticketType={{value: ticketType, setValue: setTicketType}}
            />);
        } else if (step === 2) {
            setFormStep(<Step2 step={{value: step, setValue: setStep}} />)
        }
    }, [step, ticketType]);

    return <form action="">
        {formStep}
    </form>
}