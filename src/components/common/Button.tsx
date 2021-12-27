import { ReactElement } from "react";
import "../../styles/button.css";

interface ButtonProps {
  title?: string;
  image?: ReactElement;
  onClick?: React.MouseEventHandler;
  type?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="button" onClick={props.onClick}>
      <div id="button-image" className="button-image">
        {props.image}
      </div>
      <div id="button-text" className="button-title">
        {props.title}
      </div>
    </div>
  );
};

export default Button;
