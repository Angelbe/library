import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getItemDetails } from "src/services/bookServices";
import Loader from "src/components/Spinner";
import { IBookDetails } from "src/services/bookServices.interface";
import {
  BookDetailsContainer,
  PriceContainer,
  AuthorContainer,
  TitleContainer,
  ImageContainer,
} from "./BookDetails.styles";

const BookDetails = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<IBookDetails | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    if (!id) {
      return;
    }
    setLoading(true);
    getItemDetails({ itemID: id })
      .then((result) => {
        setBook(result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(book);
  }, [book]);

  if (loading) {
    return <Loader />;
  }

  if (!book) {
    return <div>Sorry, your book is not available, please search again</div>;
  }

  return (
    <BookDetailsContainer>
      <ImageContainer src={book.image} alt="book image" />
      <TitleContainer>{book.title}</TitleContainer>
      <AuthorContainer>{book.author}</AuthorContainer>
      <PriceContainer>
        current price: <b>{book.price}€</b>
      </PriceContainer>
    </BookDetailsContainer>
  );
};

export default BookDetails;
