import React, { useEffect, useState } from "react";
import { getItemList } from "src/services/bookServices";
import { IBook } from "src/services/bookServices.interface";
import Link from "next/link";
import Loader from "src/components/Spinner";
import { ButtonStyled } from "src/components/Button/Button.styles";
import Input from "src/components/Input";
import Counter from "src/components/Counter";
import {
  BookItemStyled,
  BookListStyled,
  BookListContainer,
  BookListHeader,
  Tooltip,
  SecondRowHeader,
  FirstRowHeader,
  ThirdRowHeader,
  ParametersInput,
} from "./BookList.styles";
import { filterBookList } from "./BookList.helpers";
import PopupCreateBook from "../ModalCreateBook";

const BookList: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [bookList, setBookList] = useState<IBook[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [bookSelected, setBookSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const reloadList: () => void = () => {
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
    reloadList();
  }, []);

  useEffect(() => {
    if (offset >= 0 && count >= 0) {
      reloadList();
    }
  }, [page, offset, count]);

  return (
    <BookListContainer>
      <BookListHeader>
        <FirstRowHeader>
          <b>Count:</b>
          <ParametersInput
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCount(parseInt(event.target.value, 10));
            }}
            value={count}
          />
        </FirstRowHeader>
        <SecondRowHeader>
          <Input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFilterText(event.target.value);
            }}
            placeholder="Filter here..."
          />
          <div>
            <b>Offset:</b>
            <ParametersInput
              type="number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setOffset(parseInt(event.target.value, 10));
              }}
              value={offset}
            />
          </div>
        </SecondRowHeader>
        <ThirdRowHeader>
          <PopupCreateBook reloadList={reloadList} />
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
        </ThirdRowHeader>
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
