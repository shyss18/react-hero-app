import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/side-menu.css";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu-group">
        <div className="side-menu-title">MENU</div>
        <ul>
          <Link to="/heroes">Heroes</Link>
          <Link to="/villains">Villains</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default SideMenu;
