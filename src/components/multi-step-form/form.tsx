import Step1 from "./step-1.tsx";
import Step2 from "./step-2.tsx";
import Step3 from "./step-3.tsx";
import {FormEvent, useEffect, useState} from "react";
import { PurchaseFormData } from "../../lib/definitions.ts";
import {fetchFormData} from "../../lib/actions.ts";

export default function MultiStepForm() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<PurchaseFormData>({
    ticketType: "free",
    ticketQty: 1,
    name: "",
    email: "",
    specialRequest: "",
    avatar: null,
  });

  useEffect(() => {
    async function fetchData() {
      const savedData = await fetchFormData('userForm');
      console.log("Saved Data:", savedData)
      if (savedData) {
        setFormData(savedData);
      }
    }
    fetchData();
  }, []);

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
    } else {
      setFormStep(
        <Step3
          stepData={{value: step, setValue: setStep}}
          formData={{values: formData, setValues: setFormData}}
        />
      )
    }
  }, [step, formData]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep((prev) => prev + 1)
  }

  return <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
    {formStep}
  </form>
}