import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import VendingMachine from './VendingMachine';
import Pop from './Pop';
import Cheetos from './Cheetos';
import Candy from './Candy';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/pop" exact>
          <Pop />
        </Route>
        <Route path="/cheetos" exact>
          <Cheetos />
        </Route>
        <Route path="/candy" exact>
          <Candy />
        </Route>

      </Switch>


    </BrowserRouter>
  );
}

export default App;
