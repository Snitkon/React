import type { ChangeEvent, LegacyRef } from 'react';
import { forwardRef, useState } from 'react';
import { IInput } from '../../../models/interface';
import { StrengthPassword } from '../../../utility/password';

const PasswordBlock = (
  { error, id, title, name, meter }: IInput,
  ref: LegacyRef<HTMLInputElement>
) => {
  const [strength, setStrength] = useState(0);
  const handleMeter = (event: ChangeEvent<HTMLInputElement>) => {
    const strength = StrengthPassword(event.target.value);
    setStrength(strength);
  };

  return (
    <fieldset name="password">
      <legend>{error}</legend>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        name={name}
        type="password"
        ref={ref}
        defaultValue=""
        onChange={handleMeter}
      />
      {meter && (
        <meter
          min={0}
          max={85}
          low={35}
          high={65}
          optimum={85}
          value={strength}
        />
      )}
    </fieldset>
  );
};

const Password = forwardRef(PasswordBlock);
export default Password;
