import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <SideMenu />
      <div className="home-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
