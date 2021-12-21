import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Villain from "../models/villain";
import "../styles/villain-card.css";

interface VillainCardProps {
  villain: Villain;
}

const VillainCard = (props: VillainCardProps) => {
  return (
    <div className="villain-card">
      <div className="villain-title-group">
        <div className="villain-title">{props.villain.name}</div>
        <div className="villain-description">{props.villain.description}</div>
      </div>
      <div className="villain-button-group">
        <div className="villain-button">
          <FontAwesomeIcon
            icon={faTrash}
            cursor={"pointer"}
            size={"1x"}
            color={"#9caab5"}
            id="villain-delete-image"
          />
          <div id="villain-delete" className="villain-button-title">
            Delete
          </div>
        </div>
        <div className="villain-button">
          <FontAwesomeIcon
            icon={faEdit}
            cursor={"pointer"}
            size={"1x"}
            color={"#9caab5"}
            id="villain-edit-image"
          />
          <div id="villain-edit" className="villain-button-title">
            Edit
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillainCard;
