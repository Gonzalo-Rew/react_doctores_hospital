import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import DetallesDoctorComponent from "./DetallesDoctorComponent";

export default class DoctoresComponent extends Component {
  url = Global.urlApiDoctores;

  state = {
    doctores: [],
    idDoctorSeleccionado: null,
  };

  loadDoctoresByHospital = () => {
    axios
      .get(this.url + "api/Doctores/DoctoresHospital/" + this.props.idhospital)
      .then((res) => {
        this.setState({
          doctores: res.data,
          idDoctorSeleccionado: null,
        });
      });
  };

  componentDidMount = () => {
    this.loadDoctoresByHospital();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.idhospital !== prevProps.idhospital) {
      this.loadDoctoresByHospital();
    }
  };

  mostrarDetalles = (idDoctor) => {
    this.setState({
      idDoctorSeleccionado: idDoctor,
    });
  };

  render() {
    return (
      <div>
        <h1>Doctores del hospital {this.props.idhospital}</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>Hospital</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctores.map((doctor) => {
              return (
                <tr key={doctor.idDoctor}>
                  <td>{doctor.apellido}</td>
                  <td>{doctor.especialidad}</td>
                  <td>{doctor.salario}</td>
                  <td>{doctor.idHospital}</td>
                  <td>
                    <button
                      onClick={() => this.mostrarDetalles(doctor.idDoctor)}
                      className="btn btn-primary"
                    >
                      Mostrar Detalles
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {this.state.idDoctorSeleccionado && (
          <DetallesDoctorComponent idDoctor={this.state.idDoctorSeleccionado} />
        )}
      </div>
    );
  }
}
