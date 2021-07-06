import styled from "styled-components";
import { theme } from "styles/theme";

export const BookDetailsContainer = styled.div`
  padding: 0 50px;
  display: grid;
  grid-template-columns: [image-start]35% [image-end text-start] 65% [text-end];
  grid-template-rows: [photo-start title-start] 10% [title-end author-start] 10% [photo-end author-end description-start] 80% [description-end];
  width: 100%;
  height: 100%;
  column-gap: 10px;
`;

export const ImageContainer = styled.img`
  grid-column: image-start / image-end;
  grid-row: title-start / title-end;
  width: 100%;
`;

export const TitleContainer = styled.div`
  grid-column: text-start / text-end;
  grid-row: title-start / title-end;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  text-decoration: underline;
`;

export const AuthorContainer = styled.div`
  grid-column: text-start / text-end;
  grid-row: author-start / author-end;
  display: flex;
  justify-content: center;
  font-style: italic;
  font-size: 1.5rem;
`;

export const PriceContainer = styled.div`
  grid-column: text-start / text-end;
  grid-row: description-start / description-end;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
`;
