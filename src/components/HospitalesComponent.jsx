import React, { Component } from "react";
import ServiceHospitales from "../services/ServiceHospitales";

export default class HospitalesComponent extends Component {
  service = new ServiceHospitales();

  state = {
    hospitales: [],
  };

  getHospitales = () => {
    this.service.getHospitales().then((result) => {
      this.setState({
        hospitales: result,
      });
    });
  };

  componentDidMount = () => {
    this.getHospitales();
  };

  render() {
    return (
      <div>
        <h1>Hospitales</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Camas</th>
            </tr>
          </thead>
          <tbody>
            {this.state.hospitales.map((hospital) => {
              return (
                <tr key={hospital.idHospital}>
                  <td>{hospital.idHospital}</td>
                  <td>{hospital.nombre}</td>
                  <td>{hospital.direccion}</td>
                  <td>{hospital.telefono}</td>
                  <td>{hospital.camas}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
