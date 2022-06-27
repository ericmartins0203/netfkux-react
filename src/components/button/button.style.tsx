import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 8px;
  margin: ${(props) => props.theme.layout.margin.groupInnerGap} 0 0;
  border-radius: ${(props) => props.theme.layout.border.xSmall};
  border: none;
  background-color: ${(props) => props.theme.palette.core.primary};
  color: ${(props) => props.theme.palette.typography.primary};
  cursor: pointer;
  height: 38px;
  &:hover {
    filter: brightness(85%);
  }
`;
