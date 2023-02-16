import "../css/FullStack.css";
import { fullStackDataArr } from "../utils/fullStackData";

function FullStackPage(): JSX.Element {
  return (
    <div>
      {fullStackDataArr.map((item) => {
        return (
          <div className="proj-ctn" key={item.id}>
            <h2> {item.title}</h2>
            <p> {item.repoLink}</p>

            <div className="proj-img">
              <a href={item.repoLink}>
                <img src={item.img} alt="" width="800px" height="450px" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FullStackPage;
