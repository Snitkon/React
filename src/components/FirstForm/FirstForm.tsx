import { useRef, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import checkErrors from '../../utility/checkErrors';
import { formSlice } from '../../store/reducers/formSlice';
import getForm from '../../utility/formSlice';
import { IForm } from '../../models/interface';
import formChart, { FormChart } from '../../utility/formChart';
import Text from './TextBlock/TextBlock';
import Number from './NumberBlock/NumberBlock';
import RadioBlock from './RadioBlock/RadioBlock';
import List from './ListBlock/ListBlock';
import Image from './ImageBlock/ImageBlock';
import Email from './EmailBlock/EmailBlock';
import Password from './PasswordBlock/PasswordBlock';
import Checkbox from './CheckboxBlock/checboxBlock';
import { useAppDispatch } from '../../store/redux';

const FirstForm = () => {
  const [errors, setErrors] = useState(checkErrors);
  const navigate = useNavigate();
  const { saveForm } = formSlice.actions;
  const dispatch = useAppDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef('');
  const countryRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const pwdConfirmRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors(checkErrors);

    const form = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      country: countryRef.current?.value,
      email: emailRef.current?.value,
      gender: genderRef.current,
      image: fileRef.current?.files,
      password: pwdRef.current?.value,
      confirmPassword: pwdConfirmRef.current?.value,
      agreement: consentRef.current?.checked,
    } as unknown as FormChart;

    try {
      await formChart.validate(form, { abortEarly: false });
      const sliceForm = await getForm(form);
      dispatch(saveForm(sliceForm));
      navigate('/');
    } catch (err) {
      if (err instanceof ValidationError) {
        err.inner.reverse().forEach((err) => {
          const path = err.path as keyof IForm;
          setErrors((errors) => ({
            ...errors,
            [path]: err.message,
          }));
        });
      }
    }
  };

  return (
    <section>
      <h1>First Form</h1>
      <form id="html-form" noValidate onSubmit={handleSubmit}>
        <Text
          id="name"
          name="name"
          title="Name:"
          error={errors.name}
          ref={nameRef}
        />
        <Number
          id="age"
          name="age"
          title="Age:"
          error={errors.age}
          ref={ageRef}
        />
        <List
          id="country"
          name="country"
          title="Country:"
          error={errors.country}
          ref={countryRef}
        />
        <Email
          id="email"
          name="email"
          title="Email:"
          error={errors.email}
          ref={emailRef}
        />
        <RadioBlock
          input={[
            { id: 'male', title: 'Male', defaultValue: 'Male' },
            { id: 'female', title: 'Female', defaultValue: 'Female' },
          ]}
          name="gender"
          error={errors.gender}
          gender={genderRef}
        />
        <Image
          id="image"
          name="image"
          title="Image:"
          error={errors.image}
          ref={fileRef}
        />
        <Password
          id="password"
          name="password"
          title="Password:"
          error={errors.password}
          ref={pwdRef}
          meter
        />
        <Password
          id="confirmPassword"
          name="confirmPassword"
          title="Confirm Password:"
          error={errors.confirmPassword}
          ref={pwdConfirmRef}
        />
        <Checkbox
          id="agreement"
          name="agreement"
          title="I accept the terms and conditions"
          error={errors.agreement}
          ref={consentRef}
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default FirstForm;
