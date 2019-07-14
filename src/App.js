import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import NavbarProfile from './components/NavbarProfile';
import Register from './components/Register';
import ShowOrders from './components/ShowOrders';
import MakeOrders from './components/MakeOrders';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavbarProfile />
        <Route exact path="/" component={Register} />
        <Route path="/ShowOrders" component={ShowOrders} />
        <Route path="/MakeOrders" component={MakeOrders} />
      </div>
    </HashRouter>
  );
}

export default App;