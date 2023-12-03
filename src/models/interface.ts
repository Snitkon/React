import { InputHTMLAttributes, MutableRefObject } from 'react';

export interface IForm {
  name: string;
  age: number;
  country: string;
  email: string;
  gender: string;
  image: FileList;
  password: string;
  confirmPassword: string;
  agreement: boolean;
}

export interface ICountry {
  name: string;
}

export interface IFormSlice extends Omit<IForm, 'image'> {
  image: {
    size: number;
    type: string;
    base64: string;
  };
}

export interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, ''> {
  title: string;
  error: string;
  meter?: boolean;
}

type Props = {
  error: string;
  input: Array<{
    id: string;
    title: string;
    defaultValue: string;
  }>;
  gender: MutableRefObject<string>;
};
export type IInputRadioProps = Props & InputHTMLAttributes<HTMLInputElement>;
