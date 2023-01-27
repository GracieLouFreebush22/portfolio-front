import { mediaDataArr } from "../utils/mediaData"
import { IMediaData } from "../utils/interfaces"
import { useState } from "react"

interface MediaPageProps {
    picsForMediaPage: IMediaData[];
}
function MediaPage({picsForMediaPage}: MediaPageProps): JSX.Element{
    return(
        <>
        <div>
            <h2> Media </h2>
            { picsForMediaPage.map((pic) => {
                return (
                    <ul key={pic.id}>
                        <li>
                            <h2> {pic.title}</h2>
                            <img src={pic.src} alt="" width="400px" height="500px"/>
                        </li> 
                    </ul>
                )
            })

            }
        </div> 
      
        </>
    )
}




export default MediaPage