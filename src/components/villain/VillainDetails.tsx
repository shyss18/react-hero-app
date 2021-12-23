import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../common/Input";
import Villain from "../../models/villain";
import "../../styles/villain-details.css";
import Button from "../common/Button";
import { FaSave, FaUndo } from "react-icons/fa";
import Label from "../common/Label";

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
        {id !== "0" ? (
          <>
            <Label text="id" />
            <Input type="text" text={villain?.id} readOnly={true} />
          </>
        ) : null}

        <Label text="name" />
        <Input type="text" placeholder="e.g. Colleen" text={villain?.name} />
        <Label text="description" />
        <Input
          type="text"
          placeholder="e.g. dance fight!"
          text={villain?.description}
        />
      </div>
      <div className="villain-details-button-group">
        <Button title="Cancel" image={<FaUndo />} onClick={handleCancelClick} />
        <Button title="Save" image={<FaSave />} onClick={handleSaveClick} />
      </div>
    </div>
  );
};

export default VillainDetails;
