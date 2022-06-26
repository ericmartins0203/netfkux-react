import {
  GetList, SetList, SetError, SetMyList, SetSettings,
} from 'store/shows/shows.type';

const getList: GetList = (_state, _action) => {};

const setList: SetList = (state, action) => {
  state.data.list = action.payload;
};

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
};

export default reducers;
