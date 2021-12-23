import "../../styles/header.css";
import { FaGithub } from "react-icons/fa";

const Links = () => {
  return (
    <div className="header-links">
      <a
        href="https://github.com/shyss18?tab=repositories"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <FaGithub className="header-links-git" />
      </a>
    </div>
  );
};

export default Links;
