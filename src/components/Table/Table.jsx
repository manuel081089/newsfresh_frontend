
import React, { Component } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from "@material-ui/core/Tooltip";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

class CustomTable extends Component {

  actionButtons(){
    const {removable, editable, classes } = this.props
    var removableTableCell = null;
    var editableTableCell =null;

    if(removable){
      removableTableCell = (<Tooltip
        id="tooltip-top-start"
        title="Eliminar"
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
        <IconButton
          aria-label="Close"
          size="small"
          className={classes.tableActionButton}
        >
          <Close
            fontSize="inherit"
            className="text-danger"
          />
        </IconButton>
      </Tooltip>);
    }
      if(editable){
        editableTableCell = (<Tooltip
            id="tooltip-top-start"
            title="Editar"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton
              aria-label="Close"
              size="small"
              className={classes.tableActionButton}
            >
              <Edit
                fontSize="inherit"
                className="text-primary"
              />
            </IconButton>
          </Tooltip>
        );
      }
      return (
        <TableCell className={classes.tableActions}>
          {editableTableCell}
          {removableTableCell}
        </TableCell>
        );
    
  }

  render(){
    const { classes, tableHead, tableData, tableHeaderColor, showFields } = this.props;
    return (
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow className={classes.tableHeadRow}>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={classes.tableCell + " " + classes.tableHeadCell}
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData.map((prop, key) => {
              var objetModel = prop;
              var objetModelShow = [];
              if(showFields){
                showFields.map((prop) =>{
                  return objetModelShow.push(objetModel[prop])
                })
              } else
              {
                objetModelShow = prop;
              }
              return (
                <TableRow key={key} className={classes.tableBodyRow}>
                  {objetModelShow.map((prop, key) => {
                    if(typeof prop !== 'object'){
                      return (
                        <TableCell className={classes.tableCell} key={key}>
                          {prop}
                        </TableCell>
                      );
                    }
                    return null;
                  })}

                  {this.actionButtons()}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }

}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string)
};

export default withStyles(tableStyle)(CustomTable);
