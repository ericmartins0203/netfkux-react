import React, {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import { tokenSelector } from 'store/user/user.selector';
import userSlice from 'store/user/user.slice';
import Input from 'components/input/input';
import Button from 'components/button/button';
import { Error } from 'types/yup.type';
import FormError from 'components/form-error/form-error';
import { USER_TOKEN_COOKIE } from 'store/user/user.type';
import { SHOWS_URL } from 'screens/shows/shows.type';
import { CreateAccount, Wrapper } from './login.styled';
import { loginSchema } from './login.schema';

export default function Form() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const from = useLocation();
  const token = useSelector(tokenSelector);
  // const userError = useSelector

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setError('');
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
        await loginSchema.validate(data);

        dispatch(userSlice.actions.authentication(data));
      } catch (YupError: unknown) {
        setError((YupError as Error).errors[0]);
      }
    },
    [data],
  );

  useEffect(() => {
    if (token) {
      navigate(SHOWS_URL, {
        state: { from },
      });
    }
  }, [token]);

  useEffect(() => {
    const localToken = localStorage.getItem(USER_TOKEN_COOKIE);

    if (localToken) {
      dispatch(userSlice.actions.setData({ token: localToken }));
    }
  }, []);

  return (
    <Wrapper container justifyContent="center" alignContent="center">
      <Grid item xs={2}>
        <h1 style={{ color: 'red', textAlign: 'center' }}>NETFLIX</h1>
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
        <Button onClick={handleSend}>Entrar</Button>
        {error ? <FormError message={error} /> : null}
        <Link to="/signup">
          <CreateAccount>Criar uma conta</CreateAccount>
        </Link>
      </Grid>
    </Wrapper>
  );
}
