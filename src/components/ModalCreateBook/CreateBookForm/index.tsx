import React, { useState } from "react";
import { ButtonStyled } from "src/components/Button/Button.styles";
import Input from "src/components/Input";
import { putNewBook } from "src/services/bookServices";
import { FormContainer } from "./CreateBookForm.styles";

const CreateBookForm = () => {
  const [formTitle, setFormTitle] = useState<string>("");
  const [formAuthor, setFormAuthor] = useState<string>("");
  const [formPrice, setFormPrice] = useState<string>("");
  const [formImage, setFormImage] = useState<string>("");

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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    putNewBook({
      title: formTitle,
      author: formAuthor,
      price: formPrice,
      image: formImage,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Submit your book</h1>
      <div>
        <div>Title</div>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          onChange={handleTitleChange}
        />
      </div>

      <div>
        <div>Author</div>
        <Input
          type="text"
          name="author"
          id="author"
          placeholder="author"
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        <div>Image</div>
        <Input
          type="text"
          name="image"
          id="image"
          placeholder="image"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <div>Price</div>
        <Input
          type="text"
          name="price"
          id="price"
          placeholder="price"
          onChange={handlePriceChange}
        />
      </div>
      <ButtonStyled type="submit" >create</ButtonStyled>
      <ButtonStyled type="button">close</ButtonStyled>
    </FormContainer>
  );
};

export default CreateBookForm;
