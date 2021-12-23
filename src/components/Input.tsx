import "../styles/input.css";

interface InputProps {
  placeholder?: string;
  type?: string;
  text?: string;
  readOnly?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <input
      className={props.readOnly ? "readonly-input" : "input"}
      placeholder={props.placeholder}
      type={props.type}
      defaultValue={props.text}
      readOnly={props.readOnly}
    />
  );
};

export default Input;
