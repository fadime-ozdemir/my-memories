import React from 'react';
import './App.css';
import Navbar from '../components/navbar/Navbar';
import AlbumListContainer from "../containers/AlbumListContainer";
import LogIn from "../components/LogIn/LogIn"
import MemoriesListContainer from "./MemoriesListContainer"
import Profile from "../components/profile/Profile"
import Setting from "../components/setting/Setting"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

function App() {
  const [globalState, setGlobalState]= 
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <Switch>
        
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/setting">
            <Setting />
          </Route>
          <Route exact path={`/:albumId`}>
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
