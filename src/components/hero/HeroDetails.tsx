import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../common/Input";
import Hero from "../../models/hero";
import "../../styles/hero-details.css";
import Button from "../common/Button";
import { FaUndo, FaSave } from "react-icons/fa";
import Label from "../common/Label";

const HeroDetails = () => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();
  const [hero, setHero] = useState<Hero>();

  useEffect(() => {
    if (id !== "0") {
      // Fetch data
    }

    setHero({
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
    <div className="hero-details">
      <div className="hero-details-edit-group">
        {id !== "0" ? (
          <>
            <Label text="id" />
            <Input type="text" text={hero?.id} readOnly={true} />
          </>
        ) : null}

        <Label text="name" />
        <Input type="text" placeholder="e.g. Colleen" text={hero?.name} />
        <Label text="description" />
        <Input
          type="text"
          placeholder="e.g. dance fight!"
          text={hero?.description}
        />
      </div>
      <div className="hero-details-button-group">
        <Button title="Cancel" image={<FaUndo />} onClick={handleCancelClick} />
        <Button title="Save" image={<FaSave />} onClick={handleSaveClick} />
      </div>
    </div>
  );
};

export default HeroDetails;
