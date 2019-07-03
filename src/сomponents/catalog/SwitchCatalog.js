import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalog from './Catalog';
import CardProduct from './CardProduct';

function SwitchCatalog() {
  return (
    <Switch>
      <Route exact path="/catalog" component={Catalog} />
      <Route path="/catalog/:link1" component={CardProduct} />
    </Switch>
  );
}

export default SwitchCatalog;
