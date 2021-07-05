import { IBook } from "../../services/userServices.interfaces";

export interface IFilterBookList {
  book: IBook;
  filterText: string;
}

export interface IBookItemStyled {
  isSelected: boolean;
}
