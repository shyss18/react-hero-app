import "../../styles/modal.css";
import { IoMdClose } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Button from "./Button";

interface ModalProps {
  text: string;
  onClose: React.MouseEventHandler;
  onAgreed: React.MouseEventHandler;
}

const Modal = (props: ModalProps) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <IoMdClose onClick={props.onClose} className="modal-close" />
        <div className="modal-content">{props.text}</div>
        <div className="modal-buttons">
          <Button title="No" onClick={props.onClose} image={<MdCancel />} />
          <Button title="Yes" onClick={props.onAgreed} image={<FaCheck />} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
