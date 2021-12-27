import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../common/Input";
import Villain from "../../models/villain";
import "../../styles/villain-details.css";
import Button from "../common/Button";
import { FaSave, FaUndo } from "react-icons/fa";
import Label from "../common/Label";
import {
  createVillain,
  fetchVillain,
  updateVillain,
} from "../../server/server-fetcher";

const VillainDetails = () => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();
  const [villain, setVillain] = useState<Villain>();

  const [villainName, setVillainName] = useState<string>("");
  const [villainDescription, setVillainDescription] = useState<string>("");

  useEffect(() => {
    if (id !== "0") {
      fetchVillain(id!).then((result) => setVillain(result));
    }
  }, [id]);

  const handleCancelClick = () => {
    navigate(-1);
  };

  const handleSaveClick = async () => {
    if (id !== "0") {
      await updateVillain({
        id: villain?.id,
        name: villainName ? villainName : villain?.name!,
        description: villainDescription
          ? villainDescription
          : villain?.description!,
      });
    } else {
      if (villainName && villainDescription) {
        await createVillain({
          name: villainName,
          description: villainDescription,
        });
      }
    }

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
        <Input
          type="text"
          placeholder="e.g. Colleen"
          text={villain?.name}
          onChange={(event) => {
            setVillainName(event.currentTarget.value);
          }}
        />
        <Label text="description" />
        <Input
          type="text"
          placeholder="e.g. dance fight!"
          text={villain?.description}
          onChange={(event) => {
            setVillainDescription(event.currentTarget.value);
          }}
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
