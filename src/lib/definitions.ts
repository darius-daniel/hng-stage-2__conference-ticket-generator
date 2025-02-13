import {Dispatch, SetStateAction} from "react";

export interface FormProps {
  formData: {
    values: FormData;
    setValues: Dispatch<SetStateAction<FormData>>;
  }
  stepData: {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
  };
}

export type FormData = {
  ticketType: "free" | "vip" | "vvip";
  ticketQty: number;
  name: string;
  email: string;
  specialRequest: string;
}
