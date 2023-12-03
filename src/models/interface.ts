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
