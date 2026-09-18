import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';// used so that we can get different component on diff path
import CreatePost from "./pages/createPost.jsx";
import Feed from './pages/Feed.jsx'
 
const App=()=>{
  return(
    <Router>
       <Routes>
          <Route path='/create-post' element={<CreatePost/>}></Route>
          <Route path='/feed' element={<Feed/>}></Route>
       </Routes>
    </Router>
  )
}
 
export default App;