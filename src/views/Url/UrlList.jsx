
import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { connect } from "react-redux";
import * as urlActions from '../../actions/urlAction'
import { CircularProgress } from "@material-ui/core";
import * as urlService from '../../Services/urlService'
import {Link} from 'react-router-dom'

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

class UrlList extends Component {


  async componentDidMount(){
    if(!this.props.state.urlReducer.urls)
      await this.props.loadUserUrl();
  }

  loadingUrls = () => {
    if(this.props.state.urlReducer.loading)
      return <CircularProgress  className="mx-auto d-block"/>
    else{
      const values = urlService.transformValuesToTableData(this.props.state.urlReducer.urls)
      console.log('values::', values)
      return (
        <Table
          tableHeaderColor="primary"
          tableHead={["URL Acortada", "Original", "Visitas"]}
          tableData={values}
        />
      )
    }
  }
  
  render(){
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Mis URL</h4>
              <p className={classes.cardCategoryWhite}>
                Cree URLs para publicar en las diferentes redes sociales
              </p>
            </CardHeader>
            <CardBody>
              <Link to="/admin/addUrl" className="btn btn-primary">Acortar URL</Link>
              {this.loadingUrls()}
            </CardBody>
          </Card>
        </GridItem>
        
      </GridContainer>
    );
  }
}

UrlList.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps =(state) => {
  return  {state};
}

export default withStyles(styles)(connect(mapStateToProps, urlActions)(UrlList));
