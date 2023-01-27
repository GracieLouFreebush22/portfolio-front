import HomePage from "./componenets/HomePage";
import FullStackPage from "./componenets/FullStackPage";
import CreativePage from "./componenets/CreativePage";
import {Route, Routes} from "react-router-dom"
import TeachingPage from "./componenets/TeachingPage";
import MediaPage from "./componenets/MediaPage"
import { mediaDataArr } from "./utils/mediaData";
import { IMediaData } from "./utils/interfaces";
import "./App.css"
import { useEffect, useState } from "react";
 


function App(): JSX.Element {
  const [mediaData, setMediaData]=useState<IMediaData[]>([])
  useEffect(() => {
    setMediaData(mediaDataArr)
  })


  return (
    <div className= "ctn-app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Projects" element={<FullStackPage/>}/>
        <Route path ="/Creative" element={<CreativePage/>}/>
        <Route path="/Teaching" element={<TeachingPage/>}/>
        <Route path="/Media" element={<MediaPage picsForMediaPage={mediaData}/>}/>
      </Routes>
      
    </div>
    
  )
  
 
}

export default App;
