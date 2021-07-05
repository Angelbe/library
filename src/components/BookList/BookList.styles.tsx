import styled from "styled-components";
import {
  blinkBetweenBColors,
  blinkBetweenBColorsSelected,
} from "styles/animationKeyframes";
import { ButtonStyled } from "src/components/Button/Button.styles";
import { theme } from "styles/theme";
import { IBookItemStyled } from "./BookList.interface";

const BookListStyled = styled.ul`
  padding: 0;
  margin: 0;

  list-style-type: none;
`;

const BookItemStyled = styled.li<IBookItemStyled>`
  width: 500px;
  margin: 5px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border: 3px solid;
  transition: all 250ms;
  background-color: ${({ isSelected }) =>
    (isSelected && theme.mainColor) || theme.secundaryColor};
  color: ${({ isSelected }) =>
    (isSelected && theme.secundaryColor) || theme.mainColor};
  border-color: ${theme.secundaryColor};
  border-radius: ${theme.borderRadius};
  :hover {
    animation: ${(props) =>
        props.isSelected ? blinkBetweenBColorsSelected : blinkBetweenBColors}
      1s ease-out infinite alternate;
  }
`;

const BookListContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: center;
`;

const BookListHeader = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 10px;
  min-width: 500px;
`;

const Tooltip = styled.div`
  visibility: hidden;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.secundaryColorLighter};
  color: ${theme.mainColorlighter};
  border: 1px solid;
  border-color: ${theme.secundaryColorLighter};
  text-align: center;
  top: -50px;
  left: 10%;
  padding: 5px 0;
  border-radius: 6px;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;

  ${ButtonStyled}:disabled:hover & {
    visibility: visible;
  }
`;

export {
  BookListStyled,
  BookItemStyled,
  BookListContainer,
  BookListHeader,
  Tooltip,
};
