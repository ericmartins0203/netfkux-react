import axiosInstance from 'modules/axios/axios.module';
import { AuthPayload, SignUpPayload } from './user.type';

export const userService = () => {
  const auth = (payload: AuthPayload) => axiosInstance.post('/auth', payload);

  const signUp = (payload: SignUpPayload) => axiosInstance.post('/user', payload);

  return { auth, signUp };
};

export default userService;
