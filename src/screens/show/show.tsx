import { Container } from '@mui/material';
import ShowsList from 'components/shows-list/shows-list';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showDetailsSelector } from 'store/shows/shows.selector';
// import showsSlice from 'store/shows/shows.slice';

export default function Show() {
  const { id } = useParams();

  // const dispatch = useDispatch();
  const show = useSelector(showDetailsSelector);

  useEffect(() => {
    if (id) {
      // dispatch(showsSlice.actions.getShowDetail({ id: +id }));
    }
  }, []);

  return (
    <Container>
      { show && <img src={show.cover} alt={show.title} />}
      <h1>{show && show.title}</h1>
      <p>{show && show.description}</p>
      { show && <ShowsList shows={show.episodes} title="Episodes" />}
    </Container>
  );
}
