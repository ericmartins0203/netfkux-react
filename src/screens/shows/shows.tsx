import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSelector } from 'store/show/shows.selector';
import showsSlice from 'store/show/shows.slice';

export default function Shows() {
  const list = useSelector(listSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showsSlice.actions.getList);
  }, []);

  return (
    <p>Hello word!!</p>
  );
}
