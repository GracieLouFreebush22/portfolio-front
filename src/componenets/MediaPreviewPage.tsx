import { IMediaPreviewProps } from "../utils/interfaces";
import "../css/HomePage.css";
import { pageTitleimgs } from "../utils/pagetitles";

interface IMediaPrevProps {
  mediaPreview: IMediaPreviewProps[];
}

const photographyTitle = pageTitleimgs[0]

export function MediaPreviewPage(props: IMediaPrevProps) {

  
  const mediaProps = props.mediaPreview;
  return (
    <>
      <img src= {photographyTitle.img} alt="" className="photoTitle"></img>
      <div className="media-prev-ctn" >
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
