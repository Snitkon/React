import { forwardRef } from 'react';
import { IInput } from '../../../models/interface';
import Countries from '../../Countries';
import type { LegacyRef } from 'react';
import { useAppSelector } from '../../../store/redux';

const ListBlock = (
  { error, id, title, name }: IInput,
  ref: LegacyRef<HTMLInputElement>
) => {
  const countries = useAppSelector((state) => state.countiesReducer);

  return (
    <>
      <fieldset>
        <legend>{error}</legend>
        <label htmlFor={id}>{title}</label>
        <input
          id={id}
          name={name}
          type="text"
          list={`${id}${name}`}
          ref={ref}
          defaultValue=""
          autoComplete="off"
        />
      </fieldset>
      <Countries id={`${id}${name}`} countries={countries} />
    </>
  );
};

const List = forwardRef(ListBlock);
export default List;
