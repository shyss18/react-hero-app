import "../../styles/heroes.css";
import { useEffect, useState } from "react";
import Hero from "../../models/hero";
import { Link } from "react-router-dom";
import PageTitle from "../common/PageTitle";
import { FaPlus, FaRedo } from "react-icons/fa";
import TitleButton from "../common/TitleButton";
import Card from "../common/Card";
import * as fetchers from "../../server/server-fetcher";
import { Type } from "../../models/type";

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>();

  useEffect(() => {
    fetchers.fetchHeroes().then((result) => setHeroes(result));
  }, []);

  const handleDelete = (id: string) => {
    setHeroes(heroes?.filter((item) => item.id !== id));
  };

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
              id={hero.id!}
              title={hero.name}
              description={hero.description}
              type={Type.HERO}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Heroes;
