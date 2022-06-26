import { createSlice } from '@reduxjs/toolkit';
import reducers from 'store/shows/shows.reducer';
import { Shows } from './shows.type';

export const initialState: Shows = {
  data: {
    myList: [],
    list: {},
  },
  settings: {
    loading: false,
  },
  error: '',
};

const showsSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

const {
  actions: showsActions,
  reducer: showsReducer,
} = showsSlice;

export {
  showsReducer,
  showsActions,
};

export default showsSlice;
