import Header from "./common/Header";
import Home from "./common/Home";
import "../styles/global.css";
import { Route, Routes } from "react-router-dom";
import Heroes from "./hero/Heroes";
import Villains from "./villain/Villains";
import About from "./about/About";
import HeroDetails from "./hero/HeroDetails";
import VillainDetails from "./villain/VillainDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="heroes" element={<Heroes />} />
          <Route path="villains" element={<Villains />} />
          <Route path="about" element={<About />} />
          <Route path="heroes/:id" element={<HeroDetails />} />
          <Route path="villains/:id" element={<VillainDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
