import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "../models/hero";
import "../styles/hero-card.css";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard = (props: HeroCardProps) => {
  return (
    <div className="hero-card">
      <div className="hero-title-group">
        <div className="hero-title">{props.hero.name}</div>
        <div className="hero-description">{props.hero.description}</div>
      </div>
      <div className="hero-button-group">
        <div className="hero-button">
          <FontAwesomeIcon
            icon={faTrash}
            cursor={"pointer"}
            size={"1x"}
            color={"#9caab5"}
            id="hero-delete-image"
          />
          <div id="hero-delete" className="hero-button-title">
            Delete
          </div>
        </div>
        <div className="hero-button">
          <FontAwesomeIcon
            icon={faEdit}
            cursor={"pointer"}
            size={"1x"}
            color={"#9caab5"}
            id="hero-edit-image"
          />
          <div id="hero-edit" className="hero-button-title">
            Edit
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
