import "../styles/input.css";

interface InputProps {
  placeholder?: string;
  type?: string;
  text?: string;
}

const Input = (props: InputProps) => {
  return (
    <input
      className="input"
      placeholder={props.placeholder}
      type={props.type}
      defaultValue={props.text}
    />
  );
};

export default Input;
