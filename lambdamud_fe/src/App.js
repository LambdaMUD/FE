import React from "react";
import { Route, Switch } from "react-router-dom";

import Game from "./Components/Game";
import Register from "./Components/auth/register";
import Login from "./Components/auth/Login";
import Landing from "./Components/Landing"

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route exact path='/game' component={Game} />
      </Switch>
    </div>
  );
}

export default App;
