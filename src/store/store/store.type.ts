import { Episodes } from 'store/episodes/episodes.type';
import { Shows } from 'store/show/shows.type';
import { User } from 'store/user/user.type';

export type Store = {
  user: User,
  shows: Shows
  episodes: Episodes
};

export type Action<Payload> = {
  type: string
  payload: Payload
};
