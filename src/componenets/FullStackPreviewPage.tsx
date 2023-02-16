import { IFullStackPrevProps } from "../utils/interfaces";
import "../css/HomePage.css";

interface IProjPreviewProps {
  fullStackPreview: IFullStackPrevProps[];
}
export function FullStackPreviewPage(props: IProjPreviewProps): JSX.Element {
  const projProps = props.fullStackPreview;
  return (
    <>
      <h1> Full Stack preview</h1>
      <div className="carousel-ctn">
        {projProps.map((proj, id) => {
          return (
            <div className="carousel-item " key={proj.id}>
              <img src={proj.img} alt="slide" width="400px" height="250px" />
            </div>
          );
        })}
      </div>
    </>
  );
}
