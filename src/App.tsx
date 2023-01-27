import HomePage from "./componenets/HomePage";
import FullStackPage from "./componenets/FullStackPage";
import CreativePage from "./componenets/CreativePage";
import {Route, Routes} from "react-router-dom"
import TeachingPage from "./componenets/TeachingPage";
import MediaPage from "./componenets/MediaPage"
import "./App.css"

 


function App(): JSX.Element {


  return (
    <div className= "ctn-app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Projects" element={<FullStackPage/>}/>
        <Route path ="/Creative" element={<CreativePage/>}/>
        <Route path="/Teaching" element={<TeachingPage/>}/>
        <Route path="/Media" element={<MediaPage />}/>
      </Routes>
      
    </div>
    
  )
  
 
}

export default App;
