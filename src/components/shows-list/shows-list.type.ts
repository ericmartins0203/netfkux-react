import { Show } from 'store/shows/shows.type';

export type Props = {
  title?: string
  width?: string
  height?: string
  shows: Omit< Show, 'actors' | 'director' | 'category' | 'episodes'>[]
  autoplay?: boolean
  slidesToShow?: number
  autoplaySpeed?: number
  arrows?: boolean
};
