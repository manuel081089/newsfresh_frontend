import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      console.log("5", localStorage);
      if (!this.props.authenticated) {
        this.props.history.push("/signin");
      }
    }
    componentWillUpdate(nextProps) {
      console.log("6", localStorage);
      if (!nextProps.authenticated) {
        this.props.history.push("/signin");
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
  return connect(mapStateToProps)(Authentication);
}
