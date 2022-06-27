import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  min-height: 100vh;
  /* background-color: ${(props) => props.theme.palette.core.secondary}; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.9),                       rgba(0, 0, 0, 0.9)), url('http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg');
`;

export const CreateAccount = styled('p')`
  font-size: 14px;
  color: ${(props) => props.theme.palette.core.primary};
  text-decoration: none
`;
