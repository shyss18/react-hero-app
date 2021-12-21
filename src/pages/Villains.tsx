import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";
import "../styles/villains.css";
import Villain from "../models/villain";
import { useEffect, useState } from "react";
import VillainCard from "../components/VillainCard";

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
    <div className="villains">
      <div className="villains-label-group">
        <div className="villains-lable">VILLAINS</div>
        <FontAwesomeIcon
          icon={faPlus}
          className="villains-button"
          cursor={"pointer"}
          size={"1x"}
          color={"#9caab5"}
        />
        <FontAwesomeIcon
          icon={faRedo}
          className="villains-button"
          cursor={"pointer"}
          size={"1x"}
          color={"#9caab5"}
        />
      </div>
      <div>
        {villains?.map((villain) => {
          return <VillainCard key={villain.id.toString()} villain={villain} />;
        })}
      </div>
    </div>
  );
};

export default Villains;
