import React from 'react';
import { InputStyled } from './input.style';
import { Props } from './input.types';

export default function Input({
  type, name, placeholder, onChange,
}:Props) {
  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
