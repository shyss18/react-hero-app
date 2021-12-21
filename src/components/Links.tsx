import "../styles/links.css";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Links = () => {
  return (
    <div className="links">
      <a
        href="https://github.com/shyss18?tab=repositories"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <FontAwesomeIcon
          icon={faCodeBranch}
          cursor={"pointer"}
          size={"2x"}
          color="white"
          className="links-git"
        />
      </a>
    </div>
  );
};

export default Links;
