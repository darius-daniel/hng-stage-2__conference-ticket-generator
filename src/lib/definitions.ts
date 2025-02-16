import { Dispatch, SetStateAction } from "react";

export interface PurchaseFormProps {
  formData: {
    values: PurchaseFormData;
    setValues: Dispatch<SetStateAction<PurchaseFormData>>;
  };
  stepData: {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
  };
}

export type PurchaseFormData = {
  ticketType: string;
  ticketQty: number;
  name: string;
  email: string;
  specialRequest?: string;
  avatar: string | null;
};

export interface TicketType {
  id: string;
  name: string;
  price: number | string;
  stock: number;
  description: string;
}
