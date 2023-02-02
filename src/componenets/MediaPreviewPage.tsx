import { IMediaPreviewProps } from "../utils/interfaces";

interface IMediaPrevProps {
    mediaPreview: IMediaPreviewProps[];
}

export function MediaPreviewPage(props: IMediaPrevProps) {
const mediaProps = props.mediaPreview
    return(
        <>
        <h1> Media Preview</h1>
        <div >
            {mediaProps.map((mediaProp, id) => {
                return(
                    <span key={id}>
                        <img src={mediaProp.img} alt=""/>
                    </span>
                )
            })}
        </div>
        </>
    )

}