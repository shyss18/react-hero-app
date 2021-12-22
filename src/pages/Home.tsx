import { Route, Routes } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import "../styles/home.css";
import About from "./About";
import HeroDetails from "./HeroDetails";
import Heroes from "./Heroes";
import VillainDetails from "./VillainDetails";
import Villains from "./Villains";

const Home = () => {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<SideMenu />}>
          <Route path="heroes" element={<Heroes />} />
          <Route path="villains" element={<Villains />} />
          <Route path="about" element={<About />} />
          <Route path="heroes/:id" element={<HeroDetails />} />
          <Route path="villains/:id" element={<VillainDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Home;
