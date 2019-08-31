import React, { Component } from "react";
import { signOutAction } from "../../actions/signOutAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Signout extends Component {
  componentDidMount() {
    signOutAction();
  }

  render() {
    return <Redirect to="/login" />;
  }
}
function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Signout);
