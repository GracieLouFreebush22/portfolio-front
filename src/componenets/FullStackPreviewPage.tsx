import { IFullStackPrevProps } from "../utils/interfaces"

interface IProjPreviewProps{
    fullStackPreview: IFullStackPrevProps[]
}
export function FullStackPreviewPage(props: IProjPreviewProps): JSX.Element{
const projProps = props.fullStackPreview
    return(
        <>
        <h1> Full Stack preview</h1>
        <div>
            {projProps.map((proj, id) => {
                return(
                    <span key={id}>
                        <img src={proj.img} alt="" width= '400px' height='250px'/>
                    </span>
                )
            })}
        </div>
        </>
    )
}