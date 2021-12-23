import "../../styles/villains.css";
import Villain from "../../models/villain";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaRedo } from "react-icons/fa";
import PageTitle from "../common/PageTitle";
import TitleButton from "../common/TitleButton";
import Card from "../common/Card";

const Villains = () => {
  const [villains, setVillains] = useState<Villain[]>();

  useEffect(() => {
    //TODO: Load from a server

    const mockVillains: Villain[] = [
      {
        id: "VillainMadelyn",
        name: "Madelyn",
        description: "the cat whisperer",
      },
      {
        id: "VillainHaley",
        name: "Haley",
        description: "pen wielder",
      },
      {
        id: "VillainElla",
        name: "Ella",
        description: "fashionista",
      },
      {
        id: "VillainLandon",
        name: "Landon",
        description: "Mandalorian mauler",
      },
    ];

    setVillains(mockVillains);
  }, []);

  return (
    <>
      <div className="villains-label-group">
        <PageTitle text="VILLAINS" />
        <Link to="0">
          <TitleButton icon={<FaPlus size="20px" />} />
        </Link>
        <TitleButton icon={<FaRedo size="20px" />} />
      </div>
      <div>
        {villains?.map((villain) => {
          return (
            <Card
              key={villain.id}
              id={villain.id}
              title={villain.name}
              description={villain.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Villains;
