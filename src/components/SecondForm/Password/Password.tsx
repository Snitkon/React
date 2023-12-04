import { IInputSecond } from '../../../models/interface';
import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { FormChart } from '../../../utility/formChart';
import { StrengthPassword } from '../../../utility/password';

const InputPasswordSecond = ({
  type,
  id,
  name,
  error,
  title,
  register,
  control,
}: IInputSecond) => {
  const password = useWatch<FormChart>({ control, name });
  const [strength, setStrength] = useState(0);
  useEffect(() => {
    setStrength(StrengthPassword((password as string) || ''));
  }, [password]);

  return (
    <fieldset name={type}>
      <legend>{error}</legend>
      <label htmlFor={id}>{title}</label>
      <input id={id} type={type} {...register(name)} />
      <meter
        min={0}
        max={85}
        low={35}
        high={65}
        optimum={85}
        value={strength}
      />
    </fieldset>
  );
};

export default InputPasswordSecond;
