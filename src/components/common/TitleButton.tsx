import { ReactElement } from "react";
import "../../styles/title-button.css";

interface TitleButtonProps {
  icon?: ReactElement;
}

const TitleButton = (props: TitleButtonProps) => {
  return <div className="title-button">{props.icon}</div>;
};

export default TitleButton;
