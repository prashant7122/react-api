import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import LandingPage from "./screens/landingPage/LandingPage";
import Users from "./screens/userListing/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage {...props}/>} />
          <Route path="/users" render={(props) => <Users {...props}/>} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
