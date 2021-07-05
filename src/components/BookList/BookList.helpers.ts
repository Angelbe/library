import { IFilterBookList } from "./BookList.interface";

const filterBookList: (param: IFilterBookList) => boolean = ({
  book,
  filterText,
}) => {
  if (!filterText) {
    return true;
  }
  return book?.title.toLowerCase().includes(filterText.toLowerCase());
};
export { filterBookList };
