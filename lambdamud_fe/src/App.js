import React from "react";
import { Route, Switch } from "react-router-dom";

import Game from "./Components/Game";
import Register from "./Components/auth/register";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className='App'>
      <Switch>
       <Route path='/register' component={Register} />
       <Route path='/login' component={Login} />
        <Route exact path='/gameboard' component={Game} />
      </Switch>
    </div>
  );
}

export default App;
