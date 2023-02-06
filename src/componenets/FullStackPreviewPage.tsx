import { IFullStackPrevProps } from "../utils/interfaces";
import "../css/HomePage.css"

interface IProjPreviewProps {
  fullStackPreview: IFullStackPrevProps[];
}
export function FullStackPreviewPage(props: IProjPreviewProps): JSX.Element {
  const projProps = props.fullStackPreview;
  return (
    <>
      <h1> Full Stack preview</h1>
      <div className="proj-prev-ctn">
        {projProps.map((proj, id) => {
          return (
            <span className="proj-prev" key={id}>
              <img src={proj.img} alt="" width="400px" height="250px" />
            </span>
          );
        })}
      </div>
    </>
  );
}
