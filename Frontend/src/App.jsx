import React from "react"
import {BrowserRouter as Router, Routes, Route} 
from 'react-router-dom'


const App=()=>{
  return(
    <Router>
       <Routes>
          <Route> path='/' element={<h1>Hellow World</h1>}</Route>
       </Routes>
    </Router>
  )
}

export default App;