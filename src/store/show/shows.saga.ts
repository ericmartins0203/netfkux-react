import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import showsService from 'services/shows/show.service';
import showSlice from './shows.slice';
import { List, Show } from './shows.type';

const {
  setSettings,
  setData,
  setError,
} = showSlice.actions;

function* getList() {
  try {
    yield put(setSettings({ loading: true }));
    const response: AxiosResponse<List> = yield call(showsService().getShowList);

    const showList = response.data.reduce((accumulator:{}, show:Show) => {
      // @ts-ignore
      const categoryKey = accumulator[show.category] || [];

      return {
        ...accumulator,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(setData({ ...showList }));
    yield put(setError(''));
  } catch (exception) {
    yield put(setError('exception'));
  } finally {
    yield put(setSettings({ loading: false }));
  }
}

export const showsSaga = [
  takeLatest('shows/getList', getList),
];
