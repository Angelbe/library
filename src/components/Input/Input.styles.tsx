import { theme } from "src/styles/theme";
import styled from "styled-components";

const InputStyled = styled.input`
  padding: 10px 5px;
  border-radius: ${theme.borderRadius};
  border-width: 2px;
  border-color: ${theme.mainColor};
  color: ${theme.mainColor};
  background-color: ${theme.secundaryColor};
  outline: none;
  ::placeholder {
    color: ${theme.mainColorlighter};
  }
`;

export { InputStyled };
