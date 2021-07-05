import React from "react";

interface IButtonProps {
  children?: React.ReactNode;
  color?: string;
  bcolor?: string;
}

interface IButtonStyledProps {
  color?: string;
  bcolor?: string;
}

export type { IButtonStyledProps, IButtonProps };
