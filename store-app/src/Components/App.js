import React, { useState } from "react";
import stores from "../data.json";
import Header from "./Header";
import Stores from "./Stores";
import { Switch, Route } from "react-router-dom";
import IndividualStore from "./IndividualStore";
import IndividualItem from "./IndividualItem";

function App() {
  return (
    <header>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Stores />
        </Route>

        <Route path="/:storeId" exact>
          <IndividualStore stores={stores.stores} />
        </Route>

        <Route path="/:storeId/:itemId">
          <IndividualItem stores={stores.stores} />
        </Route>
      </Switch>
    </header>
  );
}

export default App;
