import styled from "styled-components";
import { IButtonStyledProps } from "./Button.interface";

const ButtonStyled = styled.button<IButtonStyledProps>`
  position: relative;
  display: inline-block;
  color: ${({ color, theme }) => color || theme.mainColor};
  padding: 10px;
  border: 1px solid;
  transition: all 250ms;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ bcolor, theme, disabled }) =>
    bcolor || disabled ? theme.disabledColor : theme.secundaryColor};
  border-color: ${({ color, theme }) => color || theme.mainColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.defaultFontSize};
  a {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
  :not(:disabled):hover {
    background-color: ${({ color, theme }) => color || theme.mainColor};
    color: ${({ bcolor, theme }) => bcolor || theme.secundaryColor};
    border-color: ${({ color, theme }) => color || theme.secundaryColor};
  }
`;

export { ButtonStyled };
