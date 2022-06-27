import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Props } from 'components/shows-list/shows-list.type';
import { Box } from '@mui/material';
import { Title } from './components/title/title.styled';
import Arrow from './components/arrow/arrow';
import Item from './components/item/item';

export default function ShowsList({
  title,
  shows,
  autoplay,
  autoplaySpeed,
  arrows = true,
  width = '200px',
  height = '260px',
  slidesToShow = 5,
}: Props) {
  return (
    <Box margin="82px 0">
      {title && <Title>{title}</Title>}
      <Slider
        centerMode
        arrows={arrows}
        autoplay={autoplay}
        nextArrow={<Arrow />}
        prevArrow={<Arrow />}
        slidesToShow={slidesToShow}
        autoplaySpeed={autoplaySpeed}
      >
        {shows.map(({ cover, id }) => (
          <Item
            id={id}
            key={id}
            cover={cover}
            width={width}
            height={height}
          />
        ))}
      </Slider>
    </Box>
  );
}
