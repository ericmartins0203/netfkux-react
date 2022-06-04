import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 8px;
  margin: 0 0 22px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.palette.core.primary};
  color: ${(props) => props.theme.palette.typography.primary};
  height: 38px;
`;
