import { Store } from 'store/store/store.type';

export const loadingSelector = (state: Store) => state.shows.settings;

export const listSelector = (state: Store) => state.shows.data;
