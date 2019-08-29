import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";
import Signin from "views/Login/Signin";
import Signout from "views/Login/Signout";

import requireAuth from "./views/Login/Require_auth";
import noRequireAuth from "./views/Login/Not_authentication";
import SecretPage from "views/Login/SecretPage";

const hist = createBrowserHistory();
const App = () => (
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={requireAuth(Admin)} />
      <Route path="/signin" component={noRequireAuth(Signin)} />
      {/* <Route path="/signup" component={noRequireAuth(Signup)} /> */}
      <Route path="/signout" component={requireAuth(Signout)} />
      <Route path="/secret" component={requireAuth(SecretPage)} />
      <Route path="/admin" component={requireAuth(Admin)} />
      <Route path="/rtl" component={RTL} />
    </Switch>
  </Router>
);

export default App;
