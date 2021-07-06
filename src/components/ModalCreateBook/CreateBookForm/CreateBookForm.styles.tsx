import { Tooltip } from "src/components/BookList/BookList.styles";
import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: [page-start] 50% [page-middle] 50% [page-end];
  grid-template-rows: [header-start] 25% [header-end main-start] 25% [main-middle] 25% [main-end footer-start] 25% [footer-end];
  flex-flow: column;
  justify-items: center;
  height: 500px;
  width: 100%;
  p {
    font-weight: 600;
  }
`;

const CongratulationsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const GridItem = styled.div`
  align-self: center;
  justify-self: center;
`;

const TitleContainer = styled.h1`
  grid-row: header-start / header-end;
  grid-column: page-start / page-end;
`;

const TitleInputContainer = styled(GridItem)`
  grid-row: main-start / main-middle;
  grid-column: page-start / page-middle;
`;

const AuthorInputContainer = styled(GridItem)`
  grid-row: main-start / main-middle;
  grid-column: page-middle / page-end;
`;
const ImageInputContainer = styled(GridItem)`
  grid-row: main-middle / main-end;
  grid-column: page-start / page-middle;
`;
const PriceInputContainer = styled(GridItem)`
  grid-row: main-middle/ main-end;
  grid-column: page-middle / page-end;
`;

const ButtonsContainer = styled(GridItem)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  grid-row: footer-start/ footer-end;
  grid-column: page-middle / page-end;
  button {
    font-size: 20px;
  }
`;

const FormTooltip = styled(Tooltip)`
  font-size: 10px;
  top: -40px;
  left: 3%;
  font-size: 17px;
  width: 130px;
`;

export {
  FormContainer,
  CongratulationsContainer,
  TitleContainer,
  TitleInputContainer,
  PriceInputContainer,
  ImageInputContainer,
  AuthorInputContainer,
  ButtonsContainer,
  FormTooltip,
};
