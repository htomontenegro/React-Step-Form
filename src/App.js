import React from "react";
import "./App.css";
import { connect } from "react-redux";

import Container from "@material-ui/core/Container";

import Navegacion from "./components/Navegacion";
import Formulario from "./components/Formulario";
import Tarjetas from "./components/Tarjetas";
import { eliminarTarjeta } from "./actions/tarjetaAction";
function App(props) {
  const eliminarTarjeta = (row) => {
    console.log(props.tarjetas.tarjetas);
    let tarjetas = props.tarjetas.tarjetas.filter((tarjeta, i) => {
      console.log("tarjeta");
      console.log(tarjeta);
      console.log("row");
      console.log(row);
      return tarjeta.contacto.correo !== row.contacto.correo;
    });
    props.eliminarTarjeta(tarjetas);
  };
  return (
    <div className="App">
      <Navegacion />
      <Container maxWidth="sm">
        <Formulario />
        <Tarjetas data={props.tarjetas} eliminar={eliminarTarjeta} />
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tarjetas: state.tarjetasReducer,
  };
};

export default connect(mapStateToProps, { eliminarTarjeta })(App);
