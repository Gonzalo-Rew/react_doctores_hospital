import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class DetallesDoctorComponent extends Component {
  state = {
    doctor: null,
  };

  obtenerDetallesDoctor = () => {
    const { idDoctor } = this.props;
    const url = Global.urlApiDoctores + "api/Doctores/" + idDoctor;
    axios.get(url).then((res) => {
      this.setState({
        doctor: res.data,
      });
    });
  };

  componentDidMount = () => {
    this.obtenerDetallesDoctor();
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.idDoctor !== prevProps.idDoctor) {
      this.obtenerDetallesDoctor();
    }
  };

  render() {
    return (
      <div>
        {this.state.doctor !== null && (
          <div>
            <h3>Detalles del doctor</h3>
            <p>Apellido: {this.state.doctor.apellido ?? "No disponible"}</p>
            <p>
              Especialidad: {this.state.doctor.especialidad ?? "No disponible"}
            </p>
            <p>Salario: {this.state.doctor.salario ?? "No disponible"}</p>
            <p>Hospital: {this.state.doctor.idHospital ?? "No disponible"}</p>
          </div>
        )}
      </div>
    );
  }
}
