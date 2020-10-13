import React from 'react';
import './App.css';
import Navbar from '../components/navbar/Navbar';
import AlbumListContainer from "../containers/AlbumListContainer";
import MemoryModal from "../components/memory/MemoryModal";
import MemoriesListContainer from "./MemoriesListContainer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={`/:albumId`}>
            <MemoriesListContainer />
          </Route>
          <Route path="/">
            <AlbumListContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
