import "../../styles/header.css";
import Logo from "../../logo.svg";
import Links from "./Links";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo-group">
        <img src={Logo} alt="Logo" className="header-logo" />
        <div className="header-labels">
          <p className="header-tour-label">TOUR</p>
          <p className="header-of-label">OF</p>
          <p className="header-hero-label">HEROES</p>
        </div>
      </div>
      <Links />
    </div>
  );
};

export default Header;
