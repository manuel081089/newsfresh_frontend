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
    originalUrl: "",
    callAttention: "",
    category: "",
    categories: []
  };

  async componentDidMount() {
    await this.props.loadCategories();
    this.setState({
      ...this.state,
      categories: this.props.state.urlReducer.categories
    });
  }

  handleOnChange = event => {
    if (event)
      this.setState({ ...this.state, [event.target.id]: event.target.value });
  };

  handleSelectOnChange = event => {
    if (event)
      this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleAddUrl = async () => {
    await this.props.addUserUrl(this.state, this.props.history);
  };

  loadingRequest = () => {
    if (this.props.state.urlReducer.loadingAddRequest)
      return <CircularProgress className="mt-4 ml-3" />;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Acortar URL</h4>
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
                        id="originalUrl"
                        name="originalUrl"
                        formControlProps={{
                          fullWidth: true,
                          onChange: this.handleOnChange
                        }}
                        inputProps={{
                          value: this.state.originalUrl
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="Llamada de atención"
                        id="callAttention"
                        formControlProps={{
                          fullWidth: true,
                          onChange: this.handleOnChange
                        }}
                        inputProps={{
                          value: this.state.callAttention,
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
                              value={this.state.category}
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
                                    value={category.nombre}
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
                        Acortar
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
