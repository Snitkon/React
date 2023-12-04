import { InputHTMLAttributes, MutableRefObject } from 'react';
import { FormChart } from '../utility/formChart';
import { Control, UseFormRegister } from 'react-hook-form';

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

export interface IInputSecond
  extends Omit<InputHTMLAttributes<HTMLInputElement>, ''> {
  id: string;
  name: keyof FormChart;
  title: string;
  error: string | undefined;
  register: UseFormRegister<FormChart>;
  control?: Control<FormChart>;
}

export interface IRadioSecond
  extends Omit<InputHTMLAttributes<HTMLInputElement>, ''> {
  input: Array<{
    id: string;
    title: string;
  }>;
  error: string | undefined;
  name: keyof FormChart;
  register: UseFormRegister<FormChart>;
}
