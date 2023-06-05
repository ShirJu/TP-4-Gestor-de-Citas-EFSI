
import './App.css';
import React, { useState } from "react";
import Formulario from './Componentes/Formulario';
import Citas from './Componentes/Citas';
import ListadoCitas from './Componentes/ListadoCitas';

function App() {
  //useState: estado del componente
  //estoy desestructurando useState en  ArrayCitas (el array actual) y setId (el nuevo contenido a gregar)
  const [ArrayCitas, setCitas] = useState([]);

  function AgregarCita (newCita) {

    setCitas(
      [
        ...ArrayCitas,
        newCita
      ]
    );
  }

  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            //onAgregarCita es un objeto con el contenido en parametros
            <Formulario onAgregarCita={AgregarCita}/>
          </div>
          <div className="one-half column">
            <h2> Administra tus citas</h2>
            <Citas citas={ArrayCitas} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

