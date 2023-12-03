import type { LegacyRef } from 'react';
import { forwardRef } from 'react';
import { IInput } from '../../../models/interface';

const EmailBlock = (
  { id, name, title, error }: IInput,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <fieldset>
      <legend>{error}</legend>
      <label htmlFor={id}>{title}</label>
      <input id={id} name={name} type="email" ref={ref} defaultValue="" />
    </fieldset>
  );
};

const Email = forwardRef(EmailBlock);
export default Email;
