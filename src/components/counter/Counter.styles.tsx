import { theme } from "styles/theme";
import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CounterInput = styled.input`
  width: 50px;
  height: 50px;
  border-color: ${theme.secundaryColorLighter};
  border-radius: ${theme.borderRadius};
  text-align: center;
  font-size: 1.1rem;
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

const CaretContainer = styled.div`
  width: 25px;
  height: 50px;
  cursor: pointer;
`;

export { CounterContainer, CounterInput, CaretContainer };
