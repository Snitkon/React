import type { LegacyRef } from 'react';
import { forwardRef } from 'react';
import { IInput } from '../../../models/interface';

const TextBlock = (
  { error, id, title, name }: IInput,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <fieldset>
      <legend>{error}</legend>
      <label htmlFor={id}>{title}</label>
      <input id={id} name={name} type="text" ref={ref} defaultValue="" />
    </fieldset>
  );
};

const Text = forwardRef(TextBlock);
export default Text;
