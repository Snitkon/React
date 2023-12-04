import { IInputSecond } from '../../../models/interface';

const InputSecond = ({
  type,
  id,
  list,
  name,
  error,
  title,
  register,
}: IInputSecond) => {
  const isCheck = type === 'checkbox';

  return (
    <fieldset name={type}>
      <legend>{error}</legend>
      {!isCheck && <label htmlFor={id}>{title}</label>}
      <input id={id} type={type} list={list} {...register(name)} />
      {isCheck && <label htmlFor={id}>{title}</label>}
    </fieldset>
  );
};

export default InputSecond;
