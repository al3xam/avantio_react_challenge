import { FormikErrors } from "formik";

export type FormValues = {
  name: string;
  address: string;
  description: string;
  type: string;
  images: string[];
  owner: string;
  email: string;
  phone: string;
};

export type FormErrors = {
  name?: string;
  address?: string;
  description?: string;
  type?: string;
  images?: string;
  owner?: string;
  email?: string;
  phone?: string;
};

export type StepProps = {
  values: FormValues;
  handleChange: (e: unknown) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: FormikErrors<FormValues>;
  touched: Partial<Record<keyof FormValues, boolean>>;
};

export type GoStep3Props = {
  values: FormValues;
};
