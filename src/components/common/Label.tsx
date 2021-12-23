import "../../styles/label.css";

interface LabelProps {
  text: string;
}

const Label = (props: LabelProps) => {
  return <div className="label">{props.text}</div>;
};

export default Label;
