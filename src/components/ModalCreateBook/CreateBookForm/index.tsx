import React, { useEffect, useState } from "react";
import { ButtonStyled } from "src/components/Button/Button.styles";
import Input from "src/components/Input";
import { putNewBook } from "src/services/bookServices";
import Loader from "src/components/Spinner";
import {
  FormContainer,
  CongratulationsContainer,
  TitleContainer,
  TitleInputContainer,
  PriceInputContainer,
  ImageInputContainer,
  AuthorInputContainer,
  ButtonsContainer,
  FormTooltip,
} from "./CreateBookForm.styles";

interface CreateBookFormProps {
  closeModal: () => void;
}

const CreateBookForm: React.FC<CreateBookFormProps> = ({ closeModal }) => {
  const [formTitle, setFormTitle] = useState<string>("");
  const [formAuthor, setFormAuthor] = useState<string>("");
  const [formPrice, setFormPrice] = useState<string>("");
  const [formImage, setFormImage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);
  const [bookCreated, setBookCreated] = useState(false);

  useEffect(() => {
    if (
      formTitle.length > 0 &&
      formAuthor.length > 0 &&
      formPrice.length > 0 &&
      formImage.length > 0
    ) {
      setIsFormReady(true);
    } else {
      setIsFormReady(false);
    }
  }, [formTitle, formAuthor, formPrice, formImage]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormTitle(event.target.value);
  };
  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormAuthor(event.target.value);
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormPrice(event.target.value);
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormImage(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    setLoading(true);
    event.preventDefault();

    putNewBook({
      title: formTitle,
      author: formAuthor,
      price: formPrice,
      image: formImage,
    })
      .then((response) => {
        switch (response) {
          case "OK":
            setBookCreated(true);
            break;
          default:
            break;
        }
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <Loader />;
  }

  if (bookCreated) {
    return (
      <CongratulationsContainer>
        <h1>
          <b>Congratulations!</b>
        </h1>
        <p> your book has been submited</p>
        <ButtonStyled onClick={closeModal}>close</ButtonStyled>
      </CongratulationsContainer>
    );
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TitleContainer>Submit your book</TitleContainer>
      <TitleInputContainer>
        <p>Title:</p>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          onChange={handleTitleChange}
        />
      </TitleInputContainer>

      <AuthorInputContainer>
        <p>Author:</p>
        <Input
          type="text"
          name="author"
          id="author"
          placeholder="author"
          onChange={handleAuthorChange}
        />
      </AuthorInputContainer>
      <ImageInputContainer>
        <p>Image url:</p>
        <Input
          type="text"
          name="image"
          id="image"
          placeholder="image url"
          onChange={handleImageChange}
        />
      </ImageInputContainer>
      <PriceInputContainer>
        <p>Price:</p>
        <Input
          type="number"
          name="price"
          id="price"
          placeholder="price"
          onChange={handlePriceChange}
        />
      </PriceInputContainer>
      <ButtonsContainer>
        <ButtonStyled type="submit" disabled={!isFormReady}>
          <FormTooltip>Fill all the fields</FormTooltip>
          Create
        </ButtonStyled>
        <ButtonStyled type="button" onClick={closeModal}>
          Close
        </ButtonStyled>
      </ButtonsContainer>
    </FormContainer>
  );
};

export default CreateBookForm;
