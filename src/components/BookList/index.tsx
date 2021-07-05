import React, { useEffect, useState } from "react";
import { sayHello } from "src/services/bookServices";
import { IBook } from "src/services/bookServices.interface";
import Loader from "src/components/Spinner";
import Input from "src/components/Input";
import { BookItemStyled, BookListStyled } from "./BookList.styles";
import { filterBookList } from "./BookList.helpers";

const BookList: React.FC = () => {
  const [bookList, setBookList] = useState<IBook[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [bookSelected, setBookSelected] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    sayHello()
      .then((result) => {
        setBookList(result)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(bookList);
  }, [bookList]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFilterText(event.target.value);
        }}
        placeholder="Filter here..."
      />
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
    </div>
  );
};

export default BookList;
