import {
  GetList, SetList, SetError, SetMyList, SetSettings, SetShowDetail, GetShowDetail,
} from 'store/shows/shows.type';

const getList: GetList = (_state, _action) => {};

const setList: SetList = (state, action) => {
  state.data.list = action.payload;
};

const getShowDetail: GetShowDetail = (_state, _action) => {};

const setShowDetail: SetShowDetail = (_state, _action) => {};

const getMyList: GetList = (_state, _action) => {};

const setMyList: SetMyList = (state, action) => {
  state.data.myList = action.payload;
};

const setSettings: SetSettings = (state, action) => {
  state.settings = action.payload;
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const reducers = {
  getList,
  setList,
  setSettings,
  setError,
  getMyList,
  setMyList,
  getShowDetail,
  setShowDetail,
};

export default reducers;
