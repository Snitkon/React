import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import formChart, { FormChart } from '../../utility/formChart';
import getForm from '../../utility/formSlice';
import InputSecond from './Input/Input';
import RadioSecond from './Input/Radio/Radio';
import InputPasswordSecond from './Password/Password';
import Countries from '../Countries';
import { formSlice } from '../../store/reducers/formSlice';

const SecondFrom = () => {
  const navigate = useNavigate();
  const countries = useAppSelector((state) => state.countiesReducer);
  const { saveForm } = formSlice.actions;
  const dispatch = useAppDispatch();

  const form = useForm<FormChart>({
    mode: 'all',
    resolver: yupResolver(formChart),
  });
  const { control, register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onSubmit = async (data: FormChart) => {
    const sliceForm = await getForm(data);
    dispatch(saveForm(sliceForm));
    navigate('/');
  };

  return (
    <section>
      <h1>Second Form</h1>
      <form id="react-form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <InputSecond
          type="text"
          title="Name:"
          id="n"
          name="name"
          error={errors.name?.message}
          register={register}
        />
        <InputSecond
          type="number"
          title="Age:"
          id="a"
          name="age"
          error={errors.age?.message}
          register={register}
        />
        <InputSecond
          type="text"
          title="Country:"
          id="c"
          list="countries"
          name="country"
          error={errors.country?.message}
          register={register}
        />
        <Countries id="countries" countries={countries} />
        <InputSecond
          type="email"
          id="e"
          name="email"
          title="Email:"
          error={errors.email?.message}
          register={register}
        />
        <RadioSecond
          input={[
            { id: 'male', title: 'Male' },
            { id: 'female', title: 'Female' },
          ]}
          name="gender"
          error={errors.gender?.message}
          register={register}
        />
        <InputSecond
          type="file"
          id="i"
          name="image"
          title="Image:"
          error={errors.image?.message}
          register={register}
        />
        <InputPasswordSecond
          type="password"
          id="p1"
          name="password"
          title="Password:"
          error={errors.password?.message}
          register={register}
          control={control}
        />
        <InputSecond
          type="password"
          id="p2"
          name="confirmPassword"
          title="Confirm Password:"
          error={errors.confirmPassword?.message}
          register={register}
        />
        <InputSecond
          type="checkbox"
          id="cb"
          name="agreement"
          title="I accept the terms and conditions"
          error={errors.agreement?.message}
          register={register}
        />
        <button disabled={!isValid}>Submit</button>
      </form>
    </section>
  );
};

export default SecondFrom;
