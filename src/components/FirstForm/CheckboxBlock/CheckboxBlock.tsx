import type { LegacyRef } from 'react';
import { forwardRef } from 'react';
import { IInput } from '../../../models/interface';

const CheckboxBlock = (
  { id, name, title, error }: IInput,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <fieldset name="checkbox">
      <legend>{error}</legend>
      <input
        id={id}
        name={name}
        type="checkbox"
        ref={ref}
        defaultChecked={false}
      />
      <label htmlFor={id}>{title}</label>
    </fieldset>
  );
};

const Checkbox = forwardRef(CheckboxBlock);
export default Checkbox;
