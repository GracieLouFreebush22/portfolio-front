import { mediaDataArr } from "./mediaData";
import ponySmall from "../images/ponySmall.jpg"
import krakowSmal from "../images/krakowSmall.jpg"
import "./MediaPage.css";


function MediaPage(): JSX.Element{
    return(
        <>
        <div>
            { mediaDataArr.map((pic) => {
                return (
                    <div className="media-ctn" key={pic.id}>
                     <h2> {pic.title}</h2>
                       <div>
                        <img src={pic.img} alt="" className="media-img"/>
                      </div>
                    </div>
                )
            })

            }
        </div> 
      
        </>
    )
}




export default MediaPage