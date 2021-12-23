import "../../styles/heroes.css";
import { useEffect, useState } from "react";
import Hero from "../../models/hero";
import { Link } from "react-router-dom";
import PageTitle from "../common/PageTitle";
import { FaPlus, FaRedo } from "react-icons/fa";
import TitleButton from "../common/TitleButton";
import Card from "../common/Card";

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
    <>
      <div className="heroes-label-group">
        <PageTitle text="HEROES" />
        <Link to="0">
          <TitleButton icon={<FaPlus size="20px" />} />
        </Link>
        <TitleButton icon={<FaRedo size="20px" />} />
      </div>
      <div>
        {heroes?.map((hero) => {
          return (
            <Card
              key={hero.id}
              id={hero.id}
              title={hero.name}
              description={hero.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Heroes;
