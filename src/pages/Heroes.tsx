import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";
import "../styles/heroes.css";
import { useEffect, useState } from "react";
import Hero from "../models/hero";
import HeroCard from "../components/HeroCard";
import { Link } from "react-router-dom";

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>();

  useEffect(() => {
    //TODO: Load from a server

    const mockHeroes: Hero[] = [
      {
        id: "HeroAslaug",
        name: "Aslaug",
        description: "warrior queen",
      },
      {
        id: "HeroBjorn",
        name: "Bjorn Ironside",
        description: "king of 9th century Sweden",
      },
      {
        id: "HeroIvar",
        name: "Ivar the Boneless",
        description: "commander of the Great Heathen Army",
      },
      {
        id: "HeroLagertha",
        name: "Lagertha the Shieldmaiden",
        description: "aka Hlaðgerðr",
      },
      {
        id: "HeroRagnar",
        name: "Ragnar Lothbrok",
        description: "aka Ragnar Sigurdsson",
      },
      {
        id: "HeroThora",
        name: "Thora Town-hart",
        description: "daughter of Earl Herrauðr of Götaland",
      },
    ];

    setHeroes(mockHeroes);
  }, []);

  return (
    <div className="heroes">
      <div className="heroes-label-group">
        <div className="heroes-lable">HEROES</div>
        <Link to="/heroes/0">
          <FontAwesomeIcon
            icon={faPlus}
            className="heroes-button"
            cursor={"pointer"}
            size={"1x"}
            color={"#9caab5"}
          />
        </Link>

        <FontAwesomeIcon
          icon={faRedo}
          className="heroes-button"
          cursor={"pointer"}
          size={"1x"}
          color={"#9caab5"}
        />
      </div>
      <div>
        {heroes?.map((hero) => {
          return <HeroCard key={hero.id.toString()} hero={hero} />;
        })}
      </div>
    </div>
  );
};

export default Heroes;
