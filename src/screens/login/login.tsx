import React, {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import * as yup from 'yup';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { authenticated } from 'store/user/user.selector';
import userSlice from 'store/user/user.slice';
import Input from 'components/input/input';
import Button from 'components/button/button';
import { Error } from 'types/yup';
import FormError from 'components/form-error/form-error';
import { Wrapper } from './login.styled';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const userAuthenticated = useSelector(authenticated);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const handleSend = useCallback(
    async () => {
      try {
        const schema = yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().required(),
        });

        await schema.validate(data);

        setError('');

        dispatch(userSlice.actions.setData({
        }));
      } catch (YupError: unknown) {
        setError((YupError as Error).errors[0]);
      }
    },
    [data],
  );

  useEffect(() => {
    console.log(userAuthenticated);
  }, [userAuthenticated]);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item xs={2}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        {error ? <FormError message={error} /> : null}
        <Button onClick={handleSend}>Entrar</Button>
      </Grid>
    </Wrapper>
  );
}
