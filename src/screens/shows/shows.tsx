import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import Header from 'components/header/header';
import { useDispatch, useSelector } from 'react-redux';
import { listSelector, myListSelector } from 'store/shows/shows.selector';
import { showsActions } from 'store/shows/shows.slice';
import ShowsList from 'components/shows-list/shows-list';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Shows() {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  const myList = useSelector(myListSelector);
  const movies = list.MOVIE;
  const tvShows = list.TV_SHOWS;

  useEffect(() => {
    dispatch(showsActions.getList());
    dispatch(showsActions.getMyList());
  }, []);

  useEffect(() => {
    console.log('list', list);
    console.log('myList', myList);
    console.log('movies', movies);
    console.log('tvShows', tvShows);
  }, [list]);

  return (
    <>
      <Header />
      <Container>
        <ShowsList
          autoplay
          width="95%"
          height="560px"
          arrows={false}
          shows={myList}
          slidesToShow={1}
          autoplaySpeed={2400}
        />
        { myList && <ShowsList shows={myList} title="Minha Lista" />}
        { movies && <ShowsList shows={movies} title="Filmes" /> }
        { tvShows && <ShowsList shows={tvShows} title="Séries" /> }
      </Container>
    </>
  );
}
