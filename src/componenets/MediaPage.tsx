import { mediaDataArr } from "./mediaData";
import ponySmall from "../images/ponySmall.jpg"
import "./MediaPage.css";


function MediaPage(): JSX.Element{
    return(
        <>
        <div>
            <img src="PonySmall" alt=""/>
        </div>
        {/* <div>
            { mediaDataArr.map((pic) => {
                return (
                    <div className="media-ctn" key={props.id}>
                     <h2> {props.title}</h2>
                       <div>
                        <img src={props.img} alt="" className="media-img"/>
                      </div>
                    </div>
                )
            })

            }
        </div>  */}
      
        </>
    )
}




export default MediaPage