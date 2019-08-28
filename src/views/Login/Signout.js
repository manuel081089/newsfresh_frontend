import React, { Component } from "react";
import { signOutAction } from "../../actions/signOutAction";
import { connect } from "react-redux";

class Signout extends Component {
  componentDidMount() {
    signOutAction();
  }

  render() {
    return <div></div>;
  }
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Signout);
