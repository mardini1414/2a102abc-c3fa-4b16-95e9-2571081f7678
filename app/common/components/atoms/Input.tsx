import React from 'react';
import { InputProps } from '../../interfaces';

function Input(props: InputProps): React.ReactNode {
  const { placholder, name, type, defaultValue, onchange } = props;
  return (
    <input
      placeholder={placholder}
      name={name}
      type={type}
      defaultValue={defaultValue}
      onChange={onchange}
      className="outline-none w-full p-2 border-2 border-purple-500 rounded-md"
    />
  );
}

export default Input;
