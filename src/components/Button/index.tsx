import React from "react";
import PropTypes from "prop-types";
import { IButtonProps } from "./Button.interface";
import { ButtonStyled } from "./Button.styles";

const Button: React.FC<IButtonProps> = ({ text, color, bcolor }) => {
  return (
    <ButtonStyled color={color} bcolor={bcolor}>
      {text}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  bcolor: PropTypes.string
};
