import "./FullStack.css";
import { fullStackDataArr } from "../utils/fullStackData";


function FullStackPage(): JSX.Element{ 
    return (
    <div>
            {fullStackDataArr.map((item) => {
                return (
                <div className="proj-ctn" key={item.id}>
                  
                    <h2> {item.title}</h2>
                    <p> {item.repoLink}</p>
                  
                    <div className="proj-img">
                        <img src={item.img} alt="" width='800px' height='450px'/>
                    </div>
                </div>
                )}
                )}
      
    </div>
 
    )
}

export default FullStackPage

