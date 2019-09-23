import React from "react";
import Delete from "@material-ui/icons/Delete";

export default class ModalRemoveConfirmation extends React.Component {
  render() {
    return (
      <div>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div class="mt-4 d-flex justify-content-center">
              <Delete fontSize="large" color="error" />
            </div>

            <div className="mt-4 d-flex justify-content-center">
              <h4>¿Eliminar registro?</h4>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <p className="text-center">
                ¿Está seguro que desea eliminar este registro? Este proceso no
                puede deshacerse
              </p>
            </div>

            <div className="mt-4 mb-5 d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.onAccept}
              >
                Eliminar
              </button>
              <button
                type="button"
                className="btn btn-secondary ml-3"
                data-dismiss="modal"
                onClick={this.props.onCancel}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
