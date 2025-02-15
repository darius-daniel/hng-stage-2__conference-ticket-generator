import { Dispatch, SetStateAction } from "react";

export interface FormProps {
  formData: {
    values: FormData;
    setValues: Dispatch<SetStateAction<FormData>>;
  };
  stepData: {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
  };
}

export type FormData = {
  ticketType: string;
  ticketQty: number;
  name: string;
  email: string;
  specialRequest?: string;
  avatar: File | null;
};

export interface TicketType {
  id: string;
  name: string;
  price: number | string;
  stock: number;
  description: string;
}
