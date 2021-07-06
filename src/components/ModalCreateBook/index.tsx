import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ButtonStyled } from "src/components/Button/Button.styles";
import CreateBookForm from "./CreateBookForm";
import { ModalContainer } from "./ModalCreateBook.styles";

const PopupExample = () => {
  return (
    <Popup
      trigger={<ButtonStyled id="create-book"> Create book </ButtonStyled>}
      modal
      nested
    >
      {(close: any) => {
        return (
          <ModalContainer className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <CreateBookForm />
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </ModalContainer>
        );
      }}
    </Popup>
  );
};

export default PopupExample;
