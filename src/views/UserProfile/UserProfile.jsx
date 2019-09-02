import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import avatar from "assets/img/faces/user_placeholder.png";
import * as userActions from "../../actions/userAction";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import Chip from '@material-ui/core/Chip';
import Email from '@material-ui/icons/Email';
import DoneIcon from '@material-ui/icons/Done';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const account_types = [
  "Ninguna",
  "Bandec CUC",
  "BPA CUC"
]

class UserProfile extends Component {
  componentDidMount(){
    this.props.loadLoggedUser();
  }

  loadingUser = () =>{
    return this.props.state.userReducer.loading || !this.props.state.userReducer.logged_user 
  }

  handleChange(event) {
    event.preventDefault();
  }

  handleDelete(event){
    event.preventDefault();
  }

  render(){
    const { classes } = this.props;
    if(this.loadingUser())
      return <CircularProgress className="mx-auto d-block" />
      
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Editar Perfil</h4>
                <p className={classes.cardCategoryWhite}>Complete su perfil</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Nombre Completo"
                      id="fullName"
                      
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.props.state.userReducer.logged_user.name
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Correo"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true,
                        value: this.props.state.userReducer.logged_user.email
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="CI o DNI"
                      id="identificator"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: this.props.state.userReducer.logged_user.identidad
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Pais"
                      id="country"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: this.props.state.userReducer.logged_user.pais
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Estado o Provincia"
                      id="state"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: this.props.state.userReducer.logged_user.estado
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Ciudad"
                      id="city"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: this.props.state.userReducer.logged_user.ciudad
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={8}>
                    <CustomInput
                      labelText="Dirección"
                      id="adress"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: this.props.state.userReducer.logged_user.direccion
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
            
                  <GridItem xs={12} sm={12} md={6}>
                    <FormControl fullWidth className="mt-4">
                    <InputLabel htmlFor="age-simple">Tipo de Cuenta</InputLabel>
                    <Select
                      value={this.props.state.userReducer.logged_user.tipo_cuenta}
                      onChange={this.handleChange}
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                    >
                      {account_types.map((account)=>{
                        return <MenuItem value={account}>{account}</MenuItem>
                      })}
                    </Select>
                  </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Número de Cuenta"
                      id="account_number"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: this.props.state.userReducer.logged_user.numero_cuenta
                      }}
                    />
                  </GridItem>
                </GridContainer>

              </CardBody>
              <CardFooter>
                <Button color="primary">Actualizar Perfil</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h4 className={classes.cardTitle}>{this.props.state.userReducer.logged_user.name}</h4>
                <h6 className={classes.cardCategory}>RANKING: <Chip color="primary" label={this.props.state.userReducer.logged_user.ranking} className={classes.chip} /></h6>
                <h6 className={classes.cardCategory}><Chip label={this.props.state.userReducer.logged_user.email} icon={<Email />} /></h6>
                <h6 className={classes.cardCategory}>País: <b>{this.props.state.userReducer.logged_user.pais}</b></h6>
                <h6 className={classes.cardCategory}>Estado: <b>{this.props.state.userReducer.logged_user.estado}</b></h6>
                <h6 className={classes.cardCategory}>Tarjeta: <Chip label={this.props.state.userReducer.logged_user.tipo_cuenta} variant="outlined" color="primary" size="small" deleteIcon={<DoneIcon />} onDelete={this.handleDelete} /></h6>
                <h6 className={classes.cardCategory}>Cuenta: {this.props.state.userReducer.logged_user.numero_cuenta}</h6>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
  }
  

UserProfile.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps =(state) => {
  return  {state};
}



export default withStyles(styles)(connect(mapStateToProps, userActions)(UserProfile));
