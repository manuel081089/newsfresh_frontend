/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

//Redux dependences
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "assets/css/material-dashboard-react.css?v=1.7.0";
import { AUTHENTICATED } from "./constants/loginConstants";

const store = createStore(
  reducers, //todos los reducers
  {}, //estado inicial
  applyMiddleware(reduxThunk)
);

const user = localStorage.getItem("user");
if (user) {
  store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
