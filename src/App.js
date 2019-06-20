import React from 'react';
import './scss/main.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './сomponents/home/home';
import Catalog from './сomponents/catalog/catalog';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/catalog/" component={Catalog} />
      </div>
    </BrowserRouter>
  );
};

export default App;
