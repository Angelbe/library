import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ButtonStyled } from "src/components/Button/Button.styles";
import CreateBookForm from "./CreateBookForm";
import { ModalContainer } from "./ModalCreateBook.styles";

interface PopupCreateBookProps {
  reloadList: () => void;
}

const PopupCreateBook: React.FC<PopupCreateBookProps> = ({ reloadList }) => {
  return (
    <Popup
      trigger={<ButtonStyled id="create-book"> Create book </ButtonStyled>}
      modal
      nested
      onClose={reloadList}
    >
      {(close: () => void) => {
        return (
          <ModalContainer className="modal">
            <CreateBookForm closeModal={close} />
          </ModalContainer>
        );
      }}
    </Popup>
  );
};

export default PopupCreateBook;
