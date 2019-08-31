import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
export default function(ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      console.log("3", this.props);
      if (this.props.authenticated) {
        this.props.history.push("/admin/dashboard");
      }
    }
    componentWillUpdate(nextProps) {
      console.log("4", nextProps);
      if (nextProps.authenticated) {
        this.props.history.push("/admin/dashboard");
      }
    }
    PropTypes = {
      router: PropTypes.object
    };
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { authenticated: state.authReducer.authenticated };
  }
  return connect(mapStateToProps)(NotAuthentication);
}
