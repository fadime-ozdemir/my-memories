import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AlbumModal from "../components/Album/AlbumModal";
import MemoryModal from "../components/memory/MemoryModal";
import Navbar from '../components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <AlbumModal />
        <MemoryModal />
        
      </div>
    </Router>
  );
}

export default App;
