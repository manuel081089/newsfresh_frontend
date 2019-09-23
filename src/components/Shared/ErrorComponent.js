import React from "react";
import Close from "@material-ui/icons/Close";

function ErrorComponent(props) {
  return (
    <div className="d-flex justify-content-center">
      <Close fontSize="large" color="error" />
      <h5 className="text-danger">{props.message}</h5>
    </div>
  );
}

export default ErrorComponent;
