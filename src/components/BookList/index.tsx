import React, { useEffect, useState } from "react";
import { getItemList, getBody } from "src/services/bookServices";
import { IBook } from "src/services/bookServices.interface";
import Link from "next/link";
import Loader from "src/components/Spinner";
import { ButtonStyled } from "src/components/Button/Button.styles";
import Input from "src/components/Input";
import Counter from "src/components/counter";
import {
  BookItemStyled,
  BookListStyled,
  BookListContainer,
  BookListHeader,
  Tooltip,
} from "./BookList.styles";
import { filterBookList } from "./BookList.helpers";

const BookList: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [bookList, setBookList] = useState<IBook[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [bookSelected, setBookSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const reloadList = () => {
    setLoading(true);
    getItemList({ offset, count, page })
      .then((result) => {
        setBookList(result);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getBody();
    reloadList();
  }, []);

  useEffect(() => {
    console.log(page);
    reloadList();
  }, [page]);

  return (
    <BookListContainer>
      <BookListHeader>
        <Input
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilterText(event.target.value);
          }}
          placeholder="Filter here..."
        />
        <Counter setNumber={setPage} />
        <Link
          href={{
            pathname: "/ItemsList/[id]",
            query: { id: bookSelected },
          }}
          passHref
        >
          <ButtonStyled disabled={!bookSelected}>
            <Tooltip>Select a book</Tooltip>
            See details
          </ButtonStyled>
        </Link>
      </BookListHeader>

      {loading ? (
        <Loader />
      ) : (
        <BookListStyled>
          {bookList
            .filter((book) => filterBookList({ book, filterText }))
            .map((book) => {
              return (
                <BookItemStyled
                  key={book.id}
                  isSelected={bookSelected === book.id}
                  onClick={() => {
                    setBookSelected(book.id);
                  }}
                >
                  {book.title}
                </BookItemStyled>
              );
            })}
        </BookListStyled>
      )}
    </BookListContainer>
  );
};

export default BookList;
