import { createSlice } from '@reduxjs/toolkit';
import reducers from 'store/show/shows.reducer';
import { Shows } from './shows.type';

export const initialState: Shows = {
  data: {},
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

export default showsSlice;
