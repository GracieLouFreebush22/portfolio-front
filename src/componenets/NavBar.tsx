import { Link } from "react-router-dom";
import "../App.css";

function NavBar(): JSX.Element {
  return (
    <div>
      <nav className="ctn-nav">
        <Link to="/"> HOME | </Link>
        <Link to="/Projects"> PROJECTS | </Link>
        <Link to="/Creative"> CREATIVE |</Link>
        <Link to="/Teaching"> TEACHING | </Link>
        <Link to="/Media"> MEDIA | </Link>
        <Link to="/About"> ABOUT </Link>
      </nav>
    </div>
  );
}

export default NavBar;
