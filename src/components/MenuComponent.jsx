import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "../Global";

export default class MenuComponent extends Component {
  url = Global.urlApiHospitales;
  state = {
    hospitales: [],
  };
  loadHospitales = () => {
    axios.get(this.url + "api/Hospitales").then((res) => {
      this.setState({
        hospitales: res.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#home">
          <img
            src="https://pngteam.com/images/magneto-png-540x810_aa40baac_transparent.png"
            width="80"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="doctores/1">
                Doctores
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#dropdown"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hospitales
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {this.state.hospitales.map((hospital) => {
                  return (
                    <li key={hospital.idHospital}>
                      <NavLink
                        className="dropdown-item"
                        to={"/doctores/" + hospital.idHospital}
                      >
                        {hospital.nombre}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#disabled">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
