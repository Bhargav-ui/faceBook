import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faHome, faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const [navDataClass, setNavDataClass] = useState("collapse navbar-collapse");
  const [toggleNavStatus, setToggleNavStatus] = useState(false);

  const toggleMenu = () => {
    if (toggleNavStatus == false) {
      setNavDataClass("collapse navbar-collapse show");
      setToggleNavStatus(true);
    } else {
      setNavDataClass("collapse navbar-collapse");
      setToggleNavStatus(false);
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      {/* Logo */}
      <Link to="/home" className="navbar-brand">
        Facebook
      </Link>
      {/* Navbar toggle icon */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* Menu links */}
      <div className={navDataClass} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/home">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/friends">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/groups">
              Groups
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addresses">
              Addresses
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/files">
              Files
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
