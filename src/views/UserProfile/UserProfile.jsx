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
import Phone from '@material-ui/icons/Phone';

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
  "Paypal",
  "BPA (CUC) - Solo disponible para Cuba",
  "BPA (CUP) - Solo disponible para Cuba",
  "BANDEC (CUC) - Solo disponible para Cuba",
  "BANDEC (CUP) - Solo disponible para Cuba",
]

class UserProfile extends Component {
  state= {
    id: '',
    name: '',
    email: '',
    password: '',
    identidad: '',
    direccion: '',
    telefono: '',
    pais: '',
    estado: '',
    ciudad: '',
    tipo_cuenta: '',
    numero_cuenta: '',
    ranking: '',
  }

    async componentDidMount(){
      if(!this.props.state.userReducer.logged_user)
        await this.props.loadLoggedUser();

      this.setState({
        id:this.props.state.userReducer.logged_user.id,
        name: this.props.state.userReducer.logged_user.name,
        email: this.props.state.userReducer.logged_user.email,
        password: this.props.state.userReducer.logged_user.password,
        identidad: this.props.state.userReducer.logged_user.identidad,
        direccion: this.props.state.userReducer.logged_user.direccion,
        telefono: this.props.state.userReducer.logged_user.telefono,
        pais: this.props.state.userReducer.logged_user.pais,
        estado: this.props.state.userReducer.logged_user.estado,
        ciudad: this.props.state.userReducer.logged_user.ciudad,
        tipo_cuenta: this.props.state.userReducer.logged_user.tipo_cuenta,
        numero_cuenta: this.props.state.userReducer.logged_user.numero_cuenta,
        ranking: this.props.state.userReducer.logged_user.ranking,
      })
      console.log('Mi estado::', this.state)
  }
    

  loadingUser = () =>{
    return this.props.state.userReducer.loading || !this.props.state.userReducer.logged_user 
  }

  handleChange = (event) => {
    this.setState({...this.state, [event.target.id]: event.target.value})
    event.preventDefault();
  }

  handleChangeNameProps = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
    event.preventDefault();
  }

  handleDelete = (event) =>{
    event.preventDefault();
  }

  handleUpdateUserProfile = async() => {
    await this.props.updateUserProfile(this.state)
  } 

  loadingUpdateUser = () => {
    if(this.props.state.userReducer.loading_update_user)
      return <CircularProgress className="ml-2"/>
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
                      id="name"
                      
                      formControlProps={{
                        fullWidth: true,
                        onChange: this.handleChange
                      }}
                      inputProps={{
                        value: this.state.name
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
                        value: this.state.email
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="CI o DNI"
                      id="identidad"
                      formControlProps={{
                        fullWidth: true,
                        onChange: this.handleChange
                      }}
                      inputProps={{
                        value: this.state.identidad
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Pais"
                      id="pais"
                      formControlProps={{
                        fullWidth: true,
                        onChange: this.handleChange
                      }}
                      inputProps={{
                        value: this.state.pais
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Estado o Provincia"
                      id="estado"
                      formControlProps={{
                        fullWidth: true,
                        onChange: this.handleChange
                      }}
                      inputProps={{
                        value: this.state.estado
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Ciudad"
                      id="ciudad"
                      formControlProps={{
                        fullWidth: true,
                        onChange: this.handleChange
                      }}
                      inputProps={{
                        value: this.state.ciudad
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={8}>
                    <CustomInput
                      labelText="Dirección"
                      id="direccion"
                      formControlProps={{
                        fullWidth: true,
                        onChange: this.handleChange
                      }}
                      inputProps={{
                        value: this.state.direccion
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
            
                  <GridItem xs={12} sm={12} md={4}>
                    <FormControl id="tipo_cuenta" fullWidth className="mt-4">
                    <InputLabel id="tipo_cuenta" htmlFor="tipo_cuenta">Tipo de Cuenta</InputLabel>
                    <Select
                      value={this.state.tipo_cuenta}
                      onChange={this.handleChangeNameProps}
                      inputProps={{
                        name: 'tipo_cuenta',
                      }}
                    >
                      {account_types.map((account)=>{
                        return <MenuItem key={account} id="tipo_cuenta" value={account}>{account}</MenuItem>
                      })}
                    </Select>
                  </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Número de Cuenta"
                      id="numero_cuenta"
                      formControlProps={{
                        fullWidth: true,
                        onChange: this.handleChange
                      }}
                      inputProps={{
                        value: this.state.numero_cuenta
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Tétefono"
                      id="telefono"
                      formControlProps={{
                        fullWidth: true,
                        onChange: this.handleChange
                      }}
                      inputProps={{
                        value: this.state.telefono
                      }}
                    />
                  </GridItem>
                </GridContainer>

              </CardBody>
              <CardFooter>
                <div className="row">

                <Button color="primary" disabled={this.props.state.userReducer.loading_update_user} onClick={this.handleUpdateUserProfile}>Actualizar Perfil</Button>
                {this.loadingUpdateUser()}
                </div>
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
                <h4 className={classes.cardTitle}>{this.state.name}</h4>
                <h6 className={classes.cardCategory}>RANKING: <Chip color="primary" label={this.state.ranking} className={classes.chip} /></h6>
                <h6 className={classes.cardCategory}><Chip label={this.state.email} icon={<Email />} /></h6>
                <h6 className={classes.cardCategory}>País: <b>{this.state.pais}</b></h6>
                <h6 className={classes.cardCategory}>Estado: <b>{this.state.estado}</b></h6>
                <h6 className={classes.cardCategory}>Tarjeta: <Chip label={this.state.tipo_cuenta} variant="outlined" color="primary" size="small" deleteIcon={<DoneIcon />} onDelete={this.handleDelete} /></h6>
                <h6 className={classes.cardCategory}>Cuenta: {this.state.numero_cuenta}</h6>
                <h6 className={classes.cardCategory}><Chip label={this.state.telefono} icon={<Phone />} /></h6>
                
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
