import React from "react";
import PropTypes from "prop-types";
import { IButtonProps } from "./Button.interface";
import { ButtonStyled } from "./Button.styles";

const Button: React.FC<IButtonProps> = ({ color, bcolor, children }) => {
  return (
    <ButtonStyled color={color} bcolor={bcolor}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  bcolor: PropTypes.string
};
