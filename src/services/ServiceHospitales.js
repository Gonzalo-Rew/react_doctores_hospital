import axios from "axios";
import Global from "../Global";

export default class ServiceHospitales {
  getHospitales() {
    return new Promise(function (resolve) {
      let url = Global.urlApiHospitales;
      let request = "api/hospitales";
      axios.get(url + request).then((response) => {
        resolve(response.data);
      });
    });
  }

  getDoctoresByHospitalId(idHopital) {
    return new Promise(function (resolve) {
      let url = Global.urlApiDoctores;
      let request = "api/doctores/doctoreshospital/" + idHopital;
      axios.get(url + request).then((response) => {
        resolve(response.data);
      });
    });
  }

  postHospital(hospital) {
    return new Promise(function (resolve) {
      let url = Global.urlApiHospitales;
      let request = "api/hospitales";
      axios.post(url + request, hospital).then((response) => {
        resolve(response);
      });
    });
  }
}
