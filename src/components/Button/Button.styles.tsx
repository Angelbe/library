import styled from "styled-components";
import { IButtonStyledProps } from "./Button.interface";

const ButtonStyled = styled.button<IButtonStyledProps>`
  color: ${({ color, theme }) => color || theme.mainColor};
  padding: 5px;
  border: 1px solid;
  transition: all 250ms;
  cursor: pointer;
  background-color: ${({ bcolor, theme }) => bcolor || theme.secundaryColor};
  border-color: ${({ color, theme }) => color || theme.mainColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.defaultFontSize};
  :hover {
    background-color: ${({ color, theme }) => color || theme.mainColor};
    color: ${({ bcolor, theme }) => bcolor || theme.secundaryColor};
    border-color: ${({ color, theme }) => color || theme.secundaryColor};
  }
`;

export { ButtonStyled };
