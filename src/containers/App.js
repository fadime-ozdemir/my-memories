import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AlbumList from "../components/Album/AlbumList";
import Navbar from '../components/navbar/Navbar';
import AlbumListContainer from "../containers/AlbumListContainer";
import MemoryModal from "../components/memory/MemoryModal";
import MemoryListContainer from "../containers/MemoryListContainer"
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <AlbumList />
        <AlbumListContainer />
        <MemoryModal />
     
      </div>
    </Router>
  );
}

export default App;
