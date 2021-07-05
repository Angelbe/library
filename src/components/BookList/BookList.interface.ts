import { IBook } from "src/services/bookServices.interface";

export interface IFilterBookList {
  book: IBook;
  filterText: string;
}

export interface IBookItemStyled {
  isSelected: boolean;
}
