import { IRadioSecond } from '../../../../models/interface';
import { Fragment } from 'react';

const RadioSecond = ({ input, name, error, register }: IRadioSecond) => {
  const inputs = input.map((input) => (
    <Fragment key={input.id}>
      <input id={input.id} type="radio" {...register(name)} />
      <label htmlFor={input.id}>{input.title}</label>
    </Fragment>
  ));

  return (
    <fieldset name="radio">
      <legend>{error}</legend>
      {inputs}
    </fieldset>
  );
};

export default RadioSecond;
