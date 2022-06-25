import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import userService from 'services/user/user.service';
import {
  AuthErrorMessage, AuthPayload, AuthResponse, SignUpPayload,
} from 'services/user/user.type';

import userSlice, { initialState } from 'store/user/user.slice';

function* authentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(initialState.error));
    localStorage.setItem('USER_TOKEN', response.data.token);
  } catch (e) {
    yield put(userSlice.actions.setError(AuthErrorMessage.UNREACHABLE_AUTHENTICATION));
  }
}

function* createUser(action: PayloadAction<SignUpPayload>) {
  try {
    yield call(userService().signUp, action.payload);

    yield put(userSlice.actions.setError(initialState.error));
  } catch (e) {
    // @ts-ignore
    const { response: { data } } = e as AxiosError;
    // @ts-ignore
    yield put(userSlice.actions.setError(ErrorMessageEnum[data.message]));
  }
}

export const userSaga = [
  takeLatest('user/authentication', authentication),
  takeLatest('user/creationUser', createUser),
];
