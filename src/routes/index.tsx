import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* Como no nome do repositorio tem "/" para nao quebrar utilizamos
    o "+"  no final para que o React entende que tudo a partir de repositories/ é o parametro */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
