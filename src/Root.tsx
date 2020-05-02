import React from "react";
import { Route, Switch } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { ResetStyle } from "./style";

const routes = require("./routing/index").default;

interface IRootState {}

class Root extends React.Component<any, IRootState> {
  render() {
    return (
      <>
        <ResetStyle />
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.directive}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </>
    );
  }
}

export default Root;
