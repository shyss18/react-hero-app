import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import Villain from "../models/villain";
import "../styles/villain-details.css";

const VillainDetails = () => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();
  const [villain, setVillain] = useState<Villain>();

  useEffect(() => {
    if (id !== "0") {
      // Fetch data
    }

    setVillain({
      id: "someId",
      name: "someName",
      description: "someDescription",
    });
  }, [id]);

  const handleCancelClick = () => {
    navigate(-1);
  };

  const handleSaveClick = () => {
    navigate(-1);
  };

  return (
    <div className="villain-details">
      <div className="villain-details-edit-group">
        {id !== "0" ? <div className="villain-details-id">id</div> : null}

        <div className="villain-details-text">name</div>
        <Input type="text" placeholder="e.g. Colleen" text={villain?.name} />
        <div className="villain-details-text">description</div>
        <Input
          type="text"
          placeholder="e.g. dance fight!"
          text={villain?.description}
        />
      </div>
      <div className="villain-details-button-group">
        <div className="villain-details-button" onClick={handleCancelClick}>
          <FontAwesomeIcon
            icon={faTrash}
            cursor={"pointer"}
            size={"1x"}
            color={"#9caab5"}
            id="villain-details-delete-image"
          />
          <div
            id="villain-details-delete"
            className="villain-details-button-title"
          >
            Cancel
          </div>
        </div>
        <div className="villain-details-button" onClick={handleSaveClick}>
          <FontAwesomeIcon
            icon={faEdit}
            cursor={"pointer"}
            size={"1x"}
            color={"#9caab5"}
            id="villain-details-edit-image"
          />
          <div
            id="villain-details-edit"
            className="villain-details-button-title"
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillainDetails;
