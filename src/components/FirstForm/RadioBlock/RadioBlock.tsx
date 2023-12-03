import { Fragment, type ChangeEvent } from 'react';
import { IInputRadioProps } from '../../../models/interface';

const RadioBlock = ({ input, name, error, gender }: IInputRadioProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    gender.current = event.target.value;
  };

  const inputs = input.map((input) => (
    <Fragment key={input.id}>
      <input
        id={input.id}
        name={name}
        type="radio"
        defaultChecked={false}
        defaultValue={input.defaultValue}
        onChange={handleChange}
      />
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

export default RadioBlock;
