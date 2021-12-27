import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../common/Input";
import Hero from "../../models/hero";
import "../../styles/hero-details.css";
import Button from "../common/Button";
import { FaUndo, FaSave } from "react-icons/fa";
import Label from "../common/Label";
import { createHero, fetchHero, updateHero } from "../../server/server-fetcher";

const HeroDetails = () => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();
  const [hero, setHero] = useState<Hero>();

  const [heroName, setHeroName] = useState<string>("");
  const [heroDescription, setHeroDescription] = useState<string>("");

  useEffect(() => {
    if (id !== "0") {
      fetchHero(id!).then((result) => setHero(result));
    }
  }, [id]);

  const handleCancelClick = () => {
    navigate(-1);
  };

  const handleSaveClick = async () => {
    if (id !== "0") {
      await updateHero({
        id: hero?.id,
        name: heroName ? heroName : hero?.name!,
        description: heroDescription ? heroDescription : hero?.description!,
      });
    } else {
      if (heroName && heroDescription) {
        await createHero({
          name: heroName,
          description: heroDescription,
        });
      }
    }

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
        <Input
          type="text"
          placeholder="e.g. Colleen"
          text={hero?.name}
          onChange={(event) => {
            setHeroName(event.currentTarget.value);
          }}
        />
        <Label text="description" />
        <Input
          type="text"
          placeholder="e.g. dance fight!"
          text={hero?.description}
          onChange={(event) => setHeroDescription(event.currentTarget.value)}
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
