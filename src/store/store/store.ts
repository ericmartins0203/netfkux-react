import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';

import { userSaga } from 'store/user/user.saga';
import { showsSaga } from 'store/show/shows.saga';
import showsSlice from 'store/show/shows.slice';
import userSlice from '../user/user.slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    show: showsSlice.reducer,
  },
  middleware: [saga],
});

function* storeSaga() {
  yield all([
    ...showsSaga,
    ...userSaga,
  ]);
}

saga.run(storeSaga);

export default store;
