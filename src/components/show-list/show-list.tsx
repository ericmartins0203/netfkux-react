import React from 'react';
import { useSelector } from 'react-redux';
import { dataSelector } from 'store/show/shows.selector';
import Slider from 'react-slick';

export default function ShowList() {
  const data = useSelector(dataSelector);
  const movies = data.MOVIES;

  return (
    <Slider slidesToShow={5}>
        {movies.map(movie => (
            
        ))}
    </Slider>
  );
}
