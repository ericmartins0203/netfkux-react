import { PayloadAction } from '@reduxjs/toolkit';
import { AuthPayload, SignUpPayload } from 'src/services/user/user.type';
import { Data, User } from 'store/user/user.type';

const authentication = (_state: User, _action: PayloadAction<AuthPayload>) => {};

const setData = (state: User, action: PayloadAction<Data>) => {
  state.data = action.payload;
};

const setError = (state: User, action: PayloadAction<User['error']>) => {
  state.error = action.payload;
};

const creationUser = (_state: User, _action: PayloadAction<SignUpPayload>) => {};

const reducers = {
  authentication,
  setData,
  setError,
  creationUser,
};

export default reducers;
