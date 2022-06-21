import React from 'react';
import { Error } from './form-error.style';
import { Props } from './form-error.type';

export default function FormError({ message }: Props) {
  return (
    <Error>
      {message}
    </Error>
  );
}
