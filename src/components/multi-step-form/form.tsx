import Step1 from "./step-1.tsx";
import Step2 from "./step-2.tsx";
import {useEffect, useState} from "react";
import {FormData} from "../../lib/definitions.ts";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] =
    useState<FormData>({
      ticketType: "free",
      ticketQty: 1,
      name: "",
      email: "",
      specialRequest: "",
    });

  const [formStep, setFormStep] = useState(
    <Step1
      formData={{values: formData, setValues: setFormData}}
      stepData={{value: step, setValue: setStep}}
    />
  );

  useEffect(() => {
    if (step === 1) {
      setFormStep(<Step1
        formData={{values: formData, setValues: setFormData}}
        stepData={{value: step, setValue: setStep}}
      />);
    } else if (step === 2) {
      setFormStep(
        <Step2
          stepData={{value: step, setValue: setStep}}
          formData={{values: formData, setValues: setFormData}}
        />)
    }
  }, [step, formData]);

  return <form action="" encType="multipart/form-data">
    {formStep}
  </form>
}