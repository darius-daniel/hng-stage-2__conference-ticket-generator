import Step1 from "./step-1.tsx";
import Step2 from "./step-2.tsx";
import {useEffect, useState} from "react";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);

    const [formStep, setFormStep] = useState(<Step1 step={{value: step, setValue: setStep}}/>);

    useEffect(() => {
        if (step === 1) {
            setFormStep(<Step1 step={{value: step, setValue: setStep}}/>);
        } else if (step === 2) {
            setFormStep(<Step2 step={{value: step, setValue: setStep}} />)
        }
    }, [step]);

    return <form action="">
        {formStep}
    </form>
}