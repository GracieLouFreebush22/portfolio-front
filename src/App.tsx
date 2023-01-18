import HomePage from "./componenets/HomePage";
import FullStack from "./componenets/FullStack";
import CreativePage from "./componenets/CreativePage";
import {Route, Routes} from "react-router-dom"
import TeachingPage from "./componenets/TeachingPage";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Projects" element={<FullStack/>}/>
        <Route path ="/Creative" element={<CreativePage/>}/>
        <Route path="/Teaching" element={<TeachingPage/>}/>
      </Routes>
      
    </div>
    
  )
  
 
}

export default App;
