import { theme } from "styles/theme";
import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CounterView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  width: 50px;
  height: 50px;
  color: ${theme.secundaryColor};
  border-color: ${theme.secundaryColorLighter};
  border-radius: 25px;
  margin: 0 10px;
  text-align: center;
  font-size: 1.1rem;
  ::-webkit-inner-spin-button {
    display: none;
  }
  outline: none;
`;

const CaretContainer = styled.div`
  width: 25px;
  height: 50px;
  cursor: pointer;
`;

export { CounterContainer, CounterView, CaretContainer };
