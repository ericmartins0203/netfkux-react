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

  const getShowDetail = (id: string) => axiosInstance.get(`/shows/${id}`, config);

  return { getList, getMyList, getShowDetail };
};

export default showsService;
