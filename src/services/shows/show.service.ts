// import { useSelector } from 'react-redux';
import axiosInstance from 'modules/axios/axios.module';
import { List } from 'store/shows/shows.type';
import { Props } from './show.type';

export const showsService = ({ token }: Props) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getList = () => axiosInstance.get<List>('/shows', config);

  const getMyList = () => axiosInstance.get('/list', config);

  const showDetail = (showId: string) => axiosInstance.get(`/shows/${showId}`, config);

  return { getList, getMyList, showDetail };
};

export default showsService;
