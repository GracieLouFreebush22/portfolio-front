import { IMediaPreviewProps } from "../utils/interfaces";
import "../css/HomePage.css";

interface IMediaPrevProps {
  mediaPreview: IMediaPreviewProps[];
}

export function MediaPreviewPage(props: IMediaPrevProps) {
  const mediaProps = props.mediaPreview;
  return (
    <>
      <h1> Media Preview</h1>
      <div className="media-prev-ctn">
        {mediaProps.map((mediaProp, id) => {
          return (
            <span className="media-prev" key={id}>
              <img src={mediaProp.img} alt="" width="400px" height="250px" />
            </span>
          );
        })}
      </div>
    </>
  );
}
