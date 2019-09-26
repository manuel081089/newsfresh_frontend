import React, { Component } from "react";
import { connect } from "react-redux";
import * as urlActions from "../../actions/urlAction";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CustomInput from "components/CustomInput/CustomInput";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress
} from "@material-ui/core";
import Button from "../../components/CustomButtons/Button";
import axios from "axios";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class UrlForm extends Component {
  state = {
    urlOriginal: "",
    titulo: "",
    category: 0,
    categories: []
  };

  signal = axios.CancelToken.source();

  async componentDidMount() {
    await this.loadCategories();
  }

  componentWillUnmount() {
    this.signal.cancel("Api is being canceled ok");
  }

  loadCategories = async () => {
    if (!this.props.state.urlReducer.categories) {
      await this.props.loadCategories(this.signal);
    }
    this.setState({
      ...this.state,
      categories: this.props.state.urlReducer.categories
    });
  };

  isEditing = this.props.state.urlReducer.selectedUrl ? true : false;

  handleOnChange = event => {
    if (event) {
      if (this.isEditing) {
        this.props.handleChange(event.target.id, event.target.value);
      } else {
        this.setState({ ...this.state, [event.target.id]: event.target.value });
      }
    }
  };

  handleSelectOnChange = event => {
    if (event) {
      if (this.isEditing) {
        const category = this.props.state.urlReducer.categories.find(c => {
          return c.id === event.target.value;
        });
        this.props.handleChangeCategory(category);
      } else {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value
        });
      }
    }
  };

  handleAddUrl = async () => {
    if (!this.isEditing) {
      await this.props.addUserUrl(this.state, this.props.history, this.signal);
    } else {
      await this.props.updateUserUrl(
        this.props.state.urlReducer.selectedUrl,
        this.props.history,
        this.signal
      );
    }
  };

  loadingRequest = () => {
    if (this.props.state.urlReducer.loadingAddRequest)
      return <CircularProgress className="mt-4 ml-3" />;
  };

  textTitle = () => {
    if (!this.props.state.urlReducer.selectedUrl) return "Acortar Url";
    else return "Modificar Url";
  };

  valueUrlOriginal = () => {
    return this.props.state.urlReducer.selectedUrl
      ? this.props.state.urlReducer.selectedUrl.urlOriginal
      : this.state.urlOriginal;
  };

  valueCallAtention = () => {
    return this.props.state.urlReducer.selectedUrl
      ? this.props.state.urlReducer.selectedUrl.titulo
      : this.state.titulo;
  };

  valueCategory = () => {
    return this.props.state.urlReducer.selectedUrl
      ? this.props.state.urlReducer.selectedUrl.categoria.id
      : this.state.category;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>{this.textTitle()}</h4>
                <p className={classes.cardCategoryWhite}>
                  Recorte sus URLs para utilzarlas posteriormente en las redes
                  sociales
                </p>
              </CardHeader>
              <CardBody>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="URL Original"
                        id="urlOriginal"
                        name="urlOriginal"
                        formControlProps={{
                          fullWidth: true,
                          onChange: this.handleOnChange
                        }}
                        inputProps={{
                          value: this.valueUrlOriginal()
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="Llamada de atención"
                        id="titulo"
                        formControlProps={{
                          fullWidth: true,
                          onChange: this.handleOnChange
                        }}
                        inputProps={{
                          value: this.valueCallAtention(),
                          multiline: true,
                          rowsMax: 4,
                          placeholder:
                            "Impresionante!!! Lo mejor que he visto hoy."
                        }}
                      />
                    </GridItem>
                    <div className="mt-4 container-fluid">
                      <div className="row">
                        <GridItem xs={12} sm={12} md={12}>
                          <FormControl
                            fullWidth
                            className={classes.formControl}
                          >
                            <InputLabel htmlFor="category">
                              Categoría
                            </InputLabel>
                            <Select
                              value={this.valueCategory()}
                              onChange={this.handleSelectOnChange}
                              inputProps={{
                                name: "category",
                                id: "category"
                              }}
                            >
                              {this.state.categories.map(category => {
                                return (
                                  <MenuItem
                                    key={category.id}
                                    value={category.id}
                                  >
                                    {category.nombre}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </GridItem>
                      </div>
                    </div>
                  </GridContainer>
                  <div className="container-fluid">
                    <div className="row">
                      <Button
                        className="mt-4"
                        type="button"
                        color="primary"
                        onClick={this.handleAddUrl}
                      >
                        {this.isEditing ? "Editar" : "Acortar"}
                      </Button>
                      {this.loadingRequest()}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

UrlForm.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => {
  return { state };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    urlActions
  )(UrlForm)
);
