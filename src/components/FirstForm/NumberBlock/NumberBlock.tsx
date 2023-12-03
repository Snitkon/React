import type { LegacyRef } from 'react';
import { forwardRef } from 'react';
import { IInput } from '../../../models/interface';

const NumberBlock = (
  { error, id, title, name }: IInput,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <fieldset>
      <legend>{error}</legend>
      <label htmlFor={id}>{title}</label>
      <input id={id} name={name} type="number" ref={ref} defaultValue="" />
    </fieldset>
  );
};

const Number = forwardRef(NumberBlock);
export default Number;
