import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <HashRouter>
        <Switch>
          <App />
        </Switch>
    </HashRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
