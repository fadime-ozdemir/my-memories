import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AlbumModal from "../components/Album/AlbumModal";
import MemoryModal from "../components/MemoryModal";

function App() {
  return (
    <Router>
      <div className="App">
      <AlbumModal />
      <MemoryModal />
      </div>
    </Router>
  );
}

export default App;
