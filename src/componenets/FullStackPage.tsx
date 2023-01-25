import "./FullStack.css";
import breedbattle from "../images/breedbattle.png"
import tvShows from "../images/tvShows.png"

function FullStackPage(): JSX.Element{
   
    return (
    <div>
        <div className= "ctn-proj">
            <h3> Breed Battle</h3>
            <img src={breedbattle} alt="" width="600px" height="400px"/>
            <h3> TV Shows</h3>
            <img src={tvShows} alt="" width="600px" height="400px" />
        </div>
    </div>
        
    )
}

export default FullStackPage

//------------------------UNUSED CODE
{/* {projectObj.map((item, i) => { 
                return (
                    <div key={i}>
                    <p> {item.title} </p>
                    <img  alt =""src={breedBattle} className="proj-Img" />
                </div>
                )
             })} */}
/*

interface projectProps {
    link: string,
    title: string
}
*/