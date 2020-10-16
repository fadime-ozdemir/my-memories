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
  const [user, setUser] = React.useState("");
  return (
    <Router>
      <div className="App">
        <Navbar user={user}/>
        <Switch>
          <Route path={`/:albumId`}>
            <MemoriesListContainer />
          </Route>
          <Route exact path="/login">
            <LogIn user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/profile">
            <Profile user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/setting">
            <Setting user={user} setUser={setUser}/>
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
