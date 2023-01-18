import { Link } from "react-router-dom";

function NavBar():JSX.Element{
    return(
        <div>
            <div>
                <h1> Grace Kuperman </h1>
            </div>
        <nav>
            <Link to="/"> HOME </Link>
            <Link to="/Projects"> PROJECTS </Link>
            <Link to="/Creative"> CREATIVE </Link>
            <Link to="/Teaching"> TEACHING </Link>
        </nav>
        </div>
        
    )
}

export default NavBar