import { Link } from "react-router-dom";
import "../App.css";

function NavBar(): JSX.Element {
  return (
    <div>
      <nav className="ctn-nav">
        <Link to="/" className= "nav-item"> HOME </Link>
        <Link to="/Projects" className= "nav-item"> PROJECTS  </Link>
        <Link to="/Creative" className= "nav-item"> CREATIVE </Link>
        <Link to="/Media" className= "nav-item"> MEDIA  </Link>
        <Link to="/About" className= "nav-item"> ABOUT </Link>
      </nav>
    </div>
  );
}

export default NavBar;
