import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import ServiceHospitales from "../services/ServiceHospitales";

export default class CreateHospital extends Component {
  inputId = React.createRef();
  inputNombre = React.createRef();
  inputDireccion = React.createRef();
  inputTelefono = React.createRef();
  inputCamas = React.createRef();

  service = new ServiceHospitales();

  state = {
    mensaje: "",
    status: false,
  };

  insertHospital = (event) => {
    event.preventDefault();
    let hospital = {
      idHospital: parseInt(this.inputId.current.value),
      nombre: this.inputNombre.current.value,
      direccion: this.inputDireccion.current.value,
      telefono: this.inputTelefono.current.value,
      camas: parseInt(this.inputCamas.current.value),
    };

    this.service.postHospital(hospital).then((result) => {
      this.setState({
        mensaje: "Hospital insertado: " + hospital.nombre,
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.status === true && <Navigate to="/hospitales" />}
        <h1>Create Hospital</h1>
        <form>
          <label>ID: </label>
          <input
            type="number"
            ref={this.inputId}
            className="form-control"
          ></input>
          <label>Nombre: </label>
          <input
            type="text"
            ref={this.inputNombre}
            className="form-control"
          ></input>
          <label>Direccion: </label>
          <input
            type="text"
            ref={this.inputDireccion}
            className="form-control"
          ></input>
          <label>Telefono: </label>
          <input
            type="text"
            ref={this.inputTelefono}
            className="form-control"
          ></input>
          <label>Camas: </label>
          <input
            type="number"
            ref={this.inputCamas}
            className="form-control"
          ></input>
          <button onClick={this.insertHospital} className="btn btn-success">
            Insertar Hospital
          </button>
        </form>

        {this.state.mensaje && (
          <p className="alert alert-success">{this.state.mensaje}</p>
        )}
      </div>
    );
  }
}
