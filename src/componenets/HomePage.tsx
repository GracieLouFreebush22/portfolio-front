import { useEffect, useState } from "react";
import { languagesArr } from "../utils/languages";
import { fullStackDataArr } from "../utils/fullStackData";
import { mediaDataArr } from "../utils/mediaData";
import { MediaPreviewPage } from "./MediaPreviewPage";
import { FullStackPreviewPage } from "./FullStackPreviewPage";
import { IFullStackPrevProps } from "../utils/interfaces";
import { IMediaPreviewProps } from "../utils/interfaces";

function HomePage(): JSX.Element {
const [fullStackPreview, setFullStackPreview]= useState<IFullStackPrevProps[]>([])
const [mediaPreview, setMediaPreview] = useState<IMediaPreviewProps[]>([])

const getFullStackPreview = async () => {
  setFullStackPreview(fullStackDataArr.slice(0,4))
}

const getCreativePagePreview = async () => {
  setMediaPreview(mediaDataArr.slice(0,4))
}

useEffect(()=> {
  getFullStackPreview();
  getCreativePagePreview();
}, [])
  return (
    <>
      <div>
        <h2> Now Working in...</h2>
      </div>
      <div>
       {languagesArr.map((el,i) => {
        return (
        <span key={i}> 🌟 {el} 🌟</span> 
        )
      })}
       
      </div>
      {/* --------------------------------projects sneak peek */}
      < FullStackPreviewPage fullStackPreview ={fullStackPreview}/>
      {/* -------------------------------- creative sneak peek */}
      < MediaPreviewPage mediaPreview = {mediaPreview}/>
    </>
  );
}

export default HomePage;
