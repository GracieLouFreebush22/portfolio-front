import { IMediaData } from "../utils/interfaces"


interface MediaPageProps {
    picsForMediaPage: IMediaData[];
}
function MediaPage({picsForMediaPage}: MediaPageProps): JSX.Element{
    return(
        <>
        <div>
            { picsForMediaPage.map((pic) => {
                return (
                    <ul key={pic.id}>
                        <ul>
                            <h2> {pic.title}</h2>
                            <img src={pic.src} alt="" width="600px" height="500px"/>
                        </ul> 
                    </ul>
                )
            })

            }
        </div> 
      
        </>
    )
}




export default MediaPage