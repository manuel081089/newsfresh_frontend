import React, { Component } from "react";
import * as loginActions from "../../actions/signInAction";
import { connect } from "react-redux";
// @material-ui/core components

import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import Input from "@material-ui/core/Input";
//core components

import Button from "components/CustomButtons/Button";
//core components
import SnackbarContent from "components/Snackbar/SnackbarContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../../assets/img/logo.png";
import { CircularProgress } from "@material-ui/core";

class SignInForm extends Component {
  submit = values => {
    this.props.signInAction(values, this.props.history);
  };

  signIn = () => {
    this.props.signInAction(
      {
        email: this.props.state.authReducer.email,
        password: this.props.state.authReducer.password
      },
      this.props.history
    );
  };

  loginButtonDisabled() {
    return (
      this.props.state.authReducer.loading ||
      this.props.state.authReducer.email === "" ||
      this.props.state.authReducer.password === ""
    );
  }

  handleClickShowPassword = () => {
    this.props.changeShowPassword();
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  loading() {
    if (this.props.state.authReducer.loading) {
      return <CircularProgress className="mx-auto d-block" />;
    }
  }

  errorMessage() {
    if (this.props.state.authReducer.error) {
      return (
        <div className="mt-4">
          <SnackbarContent
            message={this.props.state.authReducer.error}
            color="danger"
          />
        </div>
      );
    }
  }

  changePassword = event => {
    this.props.changePassword(event.target.value);
  };

  changeEmail = event => {
    this.props.changeEmail(event.target.value);
  };

  render() {
    return (
      <div className="form">
        <div className="container">
          <img src={Logo} className="mx-auto d-block img-fluid" alt="logo" />
          <div className="row">
            <div className="col-lg-8 mx-auto d-block col-sm-12 col-ms-12">
              <FormControl fullWidth>
                <InputLabel htmlFor="adornment-email">Correo</InputLabel>
                <Input
                  id="adornment-email"
                  type="email"
                  value={this.props.state.authReducer.email}
                  onChange={this.changeEmail}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility">
                        <Email />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="col-lg-8 mx-auto d-block col-sm-12 col-ms-12 mt-3">
              <FormControl fullWidth>
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                  id="adornment-password"
                  type={
                    this.props.state.authReducer.show_password
                      ? "text"
                      : "password"
                  }
                  value={this.props.state.authReducer.password}
                  onChange={this.changePassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.props.state.authReducer.show_password ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </div>

          <Button
            className="mx-auto d-block mt-3"
            round
            color="primary"
            onClick={this.signIn}
            disabled={this.loginButtonDisabled()}
          >
            Entrar
          </Button>

          {this.loading()}

          {this.errorMessage()}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { state };
}

export default connect(
  mapStateToProps,
  loginActions
)(SignInForm);
