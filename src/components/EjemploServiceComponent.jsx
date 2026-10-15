import React, { Component } from "react";
import ServiceEjemplo from "../services/ServiceEjemplo";

export default class EjemploServiceComponent extends Component {
  service = new ServiceEjemplo();

  state = {
    mensaje1: "",
    mensaje2: "",
    comics: [],
  };

  loadData() {
    this.setState({
      mensaje1: this.service.getSaludo(),
      mensaje2: this.service.getDia("Juan"),
      comics: this.service.getComics(),
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div>
        <h1>Ejemplo Service Component</h1>
        <h2>Mensaje 1: {this.state.mensaje1}</h2>
        <h2>Mensaje 2: {this.state.mensaje2}</h2>
        {this.state.comics.map((comic, index) => {
          return (
            <div key={index}>
              <h3>{comic.titulo}</h3>
              <img src={comic.imagen} alt={comic.titulo} style={{ width: '100px', height: '100px' }}/>
            </div>
          );
        })}
      </div>
    );
  }
}
