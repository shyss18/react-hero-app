import { Route, Routes } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import "../styles/home.css";
import About from "./About";
import Heroes from "./Heroes";
import Villains from "./Villains";

const Home = () => {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<SideMenu />}>
          <Route path="heroes" element={<Heroes />} />
          <Route path="villains" element={<Villains />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Home;
