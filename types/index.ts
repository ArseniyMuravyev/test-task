import { ReactElement } from "react";

export interface Tab {
  id: number;
  label: string;
  component: ReactElement;
}

export interface InputData {
  input: keyof IFormInput;
  placeholder: string;
  label: string;
  width: "full" | "half";
  type?: string;
}

export interface IFormInput {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  dateOfEmployment: string;
  country: string;
  city: string;
  position: string;
  email: string;
}

export interface TeamData {
  id: number;
  image: string;
  position: string;
  name: string;
}
