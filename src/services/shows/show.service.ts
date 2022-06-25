import { useSelector } from 'react-redux';
import axiosInstance from 'modules/axios/axios.module';
import { List } from 'store/show/shows.type';
import { tokenSelector } from 'store/user/user.selector';

export const showsService = () => {
  const token = useSelector(tokenSelector);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getShowList = () => axiosInstance.get<List>('/shows', { headers });

  const showDetail = (showId: string) => axiosInstance.get(`/shows/${showId}`, { headers });

  return { getShowList, showDetail };
};

export default showsService;
