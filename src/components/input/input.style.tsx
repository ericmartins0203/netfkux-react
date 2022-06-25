import styled from 'styled-components';

export const InputStyled = styled.input`
  width: 100%;
  padding: 8px;
  margin: 0 0 22px;
  border-radius: ${(props) => props.theme.layout.border.xSmall}
  border: 1px solid ${(props) => props.theme.palette.border};
  box-sizing: border-box;

  &:hover {
        filter: brightness(85%);
      }
      &:focus {
        background-color: ${(props) => props.theme.palette.core.lightGray};
        border: 0;
        outline: none;
        padding: 10px;
      }
      + input {
        margin-top: 22px;
      }
`;
