import { theme } from "styles/theme";
import styled from "styled-components";

const InputStyled = styled.input`
  padding: 10px 5px;
  border-radius: ${theme.borderRadius};
  border-width: 2px;
  border-color: ${theme.secundaryColor};
  color: ${theme.secundaryColor};
  background-color: ${theme.mainColor};
  outline: none;
  ::placeholder {
    color: ${theme.secundaryColorLighter};
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

export { InputStyled };
