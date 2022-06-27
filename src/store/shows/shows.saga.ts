import { AxiosResponse } from 'axios';
import {
  call, cancel, put, select, takeLatest,
} from 'redux-saga/effects';
import showsService from 'services/shows/show.service';
import { tokenSelector } from 'store/user/user.selector';
import { Data } from 'store/user/user.type';
import showSlice, { showsActions } from './shows.slice';
import { Show } from './shows.type';

function* getList() {
  yield put(showsActions.setSettings({ loading: true }));

  const token: Data['token'] = yield select(tokenSelector);

  if (token) {
    yield put(showsActions.setError('User token was not found'));
    cancel();
  }

  try {
    const response: AxiosResponse<Show[]> = yield call(
      showsService({ token: token as string }).getList,
    );

    const showsList = response.data.reduce((accumulator, show) => {
      // @ts-ignore
      const categoryKey = accumulator[show.category] || [];

      return {
        ...accumulator,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(showsActions.setList(showsList));
  } catch (exception) {
    yield put(showsActions.setError('Error'));
  } finally {
    yield put(showsActions.setSettings({ loading: false }));
  }
}

function* getMyList() {
  yield put(showSlice.actions.setSettings({ loading: true }));

  const token: Data['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(showSlice.actions.setError('User token was not found'));
    return;
  }

  try {
    // @ts-ignore
    const response: AxiosResponse<Show[]> = yield call(
      showsService({ token }).getMyList,
    );

    yield put(showSlice.actions.setMyList(response.data));
    yield put(showSlice.actions.setError(''));
  } catch (exception) {
    yield put(showSlice.actions.setError('Error'));
  } finally {
    yield put(showSlice.actions.setSettings({ loading: false }));
  }
}

// function* getShowDetail(id: number) {
//   yield put(showSlice.actions.setSettings({ loading: true }));

//   const token: Data['token'] = yield select(tokenSelector);

//   if (!token) {
//     yield put(showSlice.actions.setError('User token was not found'));
//     return;
//   }

//   try {
//     const response: AxiosResponse<Show> = yield call(
//       showsService({ token }).getShowDetail,
//       id.toString(),
//     );

//     yield put(showSlice.actions.setShowDetail(response.data));
//     yield put(showSlice.actions.setError(''));
//   } catch (exception) {
//     yield put(showSlice.actions.setError('Error'));
//   } finally {
//     yield put(showSlice.actions.setSettings({ loading: false }));
//   }
// }

export const showsSaga = [
  takeLatest('shows/getList', getList),
  takeLatest('shows/getMyList', getMyList),
  // takeLatest('shows/getShowDetail', getShowDetail),
];
