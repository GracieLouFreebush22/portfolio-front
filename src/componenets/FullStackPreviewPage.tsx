import { IFullStackPrevProps } from "../utils/interfaces";
import "../css/HomePage.css";
import { pageTitleimgs } from "../utils/pagetitles";

interface IProjPreviewProps {
  fullStackPreview: IFullStackPrevProps[];
}
const projTitleImg= pageTitleimgs[1]

export function FullStackPreviewPage(props: IProjPreviewProps): JSX.Element {
  const projProps = props.fullStackPreview;
  return (
    <>
      <img src= {projTitleImg.img} alt="" className="projTitle"></img>
      <div className="carousel-ctn">
        {projProps.map((proj, id) => {
          return (
            <div className="carousel-item " key={id}>
              <img src={proj.img} alt="slide" width="400px" height="250px" />
            </div>
          );
        })}
      </div>
    </>
  );
}
