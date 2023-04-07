import { BaseBtn, GoogleSignBtn, InvertedBtn } from "./button.styled.js";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (btnType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseBtn,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignBtn,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedBtn,
  }[btnType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomBtn = getButton(buttonType);
  return <CustomBtn {...otherProps}>{children}</CustomBtn>;
};

export default Button;
