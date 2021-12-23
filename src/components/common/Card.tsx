import { Link } from "react-router-dom";
import "../../styles/card.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";

interface CardProps {
  id: string;
  title: string;
  description: string;
}

const Card = (props: CardProps) => {
  const [modalOpen, setModalState] = useState<boolean>(false);

  const handleDeleteClick = () => {
    setModalState(true);
  };

  const handleAgreedClick = () => {
    setModalState(false);
  };

  const handleCloseClick = () => {
    setModalState(false);
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="card-text-content">
          <div className="card-title">{props.title}</div>
          <div className="card-description">{props.description}</div>
        </div>
        <div className="card-button-content">
          <Button
            title="Delete"
            image={<FaTrash />}
            onClick={handleDeleteClick}
          />

          <Link className="card-edit-link" to={`${props.id}`}>
            <Button title="Edit" image={<FaEdit />} />
          </Link>
        </div>
      </div>

      {modalOpen ? (
        <Modal
          text={`Do you really want to delete item ${props.title}?`}
          onAgreed={handleAgreedClick}
          onClose={handleCloseClick}
        />
      ) : null}
    </>
  );
};

export default Card;
