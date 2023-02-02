import { useState } from "react";
import { languagesArr } from "../utils/languages";
import { fullStackDataArr } from "../utils/fullStackData";
import { mediaDataArr } from "../utils/mediaData";
interface IFullStackPrevProps {
  id: number;
  title: string;
  img: string;
}

interface ICreativePreviewProps {
  id: number;
  title: string;
  img: string;
}
function HomePage(props: IFullStackPrevProps): JSX.Element {
const [fullStackPreview, setFullStackPreview]= useState<IFullStackPrevProps[]>([])
const [mediaPreview, setMediaPreview] = useState<ICreativePreviewProps[]>([])

const getFullStackPreview = async () => {
  setFullStackPreview(fullStackDataArr)
}

const getCreativePagePreview = async () => {
  setMediaPreview(mediaDataArr)
}
  return (
    <>
      <div>
        <h2> Explore Content... </h2>
      </div>
      <div>
       {languagesArr.map((el,i) => {
        return (
        <span key={i}> 🌟 {el} 🌟</span> 
        )
      })}
       
      </div>
      {/* --------------------------------projects sneak peek */}
      < FullStackPreview fullStackPreview ={fullStackPreview}/>
      {/* -------------------------------- creative sneak peek */}
      < MediaPreview mediaPreview = {mediaPreview}/>
    </>
  );
}

export default HomePage;
