import { mediaDataArr } from "./mediaData";
import "./MediaPage.css";


function MediaPage(): JSX.Element{
    return(
        <>
        <div>
            { mediaDataArr.map((pic) => {
                return (
                    <div className="media-ctn" key={pic.id}>
                        <div>
                            <h2> {pic.title}</h2>
                        </div>
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