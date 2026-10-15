import React, { Component } from "react";
import DetallesDoctorComponent from "./DetallesDoctorComponent";
import ServiceHospitales from "../services/ServiceHospitales";

export default class DoctoresComponent extends Component {
  service = new ServiceHospitales();

  state = {
    doctores: [],
    idDoctorSeleccionado: null,
  };

  getDoctoresByHospital = () => {
    this.service
      .getDoctoresByHospitalId(this.props.idhospital)
      .then((result) => {
        this.setState({
          doctores: result,
          idDoctorSeleccionado: null,
        });
      });
  };

  componentDidMount = () => {
    this.getDoctoresByHospital();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.idhospital !== prevProps.idhospital) {
      this.getDoctoresByHospital();
      this.setState({
        idDoctorSeleccionado: null,
      });
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
