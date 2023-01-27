import { mediaDataArr } from "../utils/mediaData";

function MediaPage(): JSX.Element{
    return(
        <>
        <div>
            { mediaDataArr.map((pic) => {
                return (
                    <div key={pic.id}>
                     <h2> {pic.title}</h2>
                       <div>
                        <img src={pic.img} alt="" width="800px" height="500px"/>
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