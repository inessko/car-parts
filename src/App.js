import React from 'react';
import './scss/main.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './сomponents/home/Home';
import ServiceCompany from './сomponents/Servis';
import SwitchCatalog from './сomponents/catalog/SwitchCatalog';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={SwitchCatalog} />
          <Route path="/service" component={ServiceCompany} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
