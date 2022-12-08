import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage';
import './App.css';

function App() {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/groups")
    .then(r => r.json())
    .then(setGroups)
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route exact path = "/"
        element={<Homepage groups={groups} />}/>
      </Routes>
    </div>
  );
}

export default App;
