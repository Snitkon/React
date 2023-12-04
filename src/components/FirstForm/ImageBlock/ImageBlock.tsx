import type { LegacyRef } from 'react';
import { forwardRef } from 'react';
import { IInput } from '../../../models/interface';

const ImageBlock = (
  { id, name, title, error }: IInput,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <fieldset name="file">
      <legend>{error}</legend>
      <label htmlFor={id}>{title}</label>
      <input id={id} name={name} type="file" ref={ref} />
    </fieldset>
  );
};

const Image = forwardRef(ImageBlock);
export default Image;
