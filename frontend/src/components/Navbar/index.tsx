import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-main">
        <Link to="/" className="nav-logo-text">
          <h1 className="nav-name">Github API</h1>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
