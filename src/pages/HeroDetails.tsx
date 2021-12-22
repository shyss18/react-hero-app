import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import Hero from "../models/hero";
import "../styles/hero-details.css";

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
        {id !== "0" ? <div className="hero-details-id">id</div> : null}

        <div className="hero-details-text">name</div>
        <Input type="text" placeholder="e.g. Colleen" text={hero?.name} />
        <div className="hero-details-text">description</div>
        <Input
          type="text"
          placeholder="e.g. dance fight!"
          text={hero?.description}
        />
      </div>
      <div className="hero-details-button-group">
        <div className="hero-details-button" onClick={handleCancelClick}>
          <FontAwesomeIcon
            icon={faTrash}
            cursor={"pointer"}
            size={"1x"}
            color={"#9caab5"}
            id="hero-details-delete-image"
          />
          <div id="hero-details-delete" className="hero-details-button-title">
            Cancel
          </div>
        </div>
        <div className="hero-details-button" onClick={handleSaveClick}>
          <FontAwesomeIcon
            icon={faEdit}
            cursor={"pointer"}
            size={"1x"}
            color={"#9caab5"}
            id="hero-details-edit-image"
          />
          <div id="hero-details-edit" className="hero-details-button-title">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;
