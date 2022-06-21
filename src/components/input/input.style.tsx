import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 0 22px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.palette.border};
  box-sizing: border-box;
`;
