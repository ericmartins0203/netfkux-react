import React from 'react';
import { ButtonStyled } from './button.style';
import { Props } from './button.type';

export default function Button({ onClick, children }: Props) {
  return (
    <ButtonStyled onChange={onClick}>
      {children}
    </ButtonStyled>
  );
}
