import "../../styles/villains.css";
import Villain from "../../models/villain";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaRedo } from "react-icons/fa";
import PageTitle from "../common/PageTitle";
import TitleButton from "../common/TitleButton";
import Card from "../common/Card";
import * as fetchers from "../../server/server-fetcher";
import { Type } from "../../models/type";

const Villains = () => {
  const [villains, setVillains] = useState<Villain[]>();

  useEffect(() => {
    fetchers.fetchVillains().then((result) => {
      setVillains(result);
    });
  }, []);

  const handleDelete = (id: string) => {
    setVillains(villains?.filter((item) => item.id !== id));
  };

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
              id={villain.id!}
              title={villain.name}
              description={villain.description}
              type={Type.VILLAIN}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Villains;
