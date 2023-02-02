import "./FullStack.css";
import { fullStackDataArr } from "../utils/fullStackData";
import breedbattle from "../images/breedbattle.png"
import tvShows from "../images/tvShows.png"
import favPlaces from "../images/favPlaces.png"

function FullStackPage(): JSX.Element{
   
    return (
    <div>
            {fullStackDataArr.map((item) => {
                return (
                <div key={item.id}>
                  
                    <h2> {item.title}</h2>
                    <p> {item.repoLink}</p>
                  
                    <div className="proj-img">
                        <img src={item.img} alt="" />
                    </div>
                </div>
                )}
                )}
      
    </div>
 
    )
}

export default FullStackPage

