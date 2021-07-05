import styled from "styled-components";
import { blinkBetweenBColors } from "src/styles/animationKeyframes";
import { IBookItemStyled } from "./BookList.interface";

const BookListStyled = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

const BookItemStyled = styled.li<IBookItemStyled>`
  width: 100%;
  margin: 5px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  border: 3px solid;
  transition: all 250ms;
  background-color: ${({ isSelected, theme }) =>
    (isSelected && theme.mainColor) || theme.secundaryColor};
  color: ${({ isSelected, theme }) =>
    (isSelected && theme.secundaryColor) || theme.mainColor};
  border-color: ${({ theme }) => theme.mainColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  :hover {
    animation: ${blinkBetweenBColors} 1s ease-out infinite alternate;
  }
`;

export { BookListStyled, BookItemStyled };
