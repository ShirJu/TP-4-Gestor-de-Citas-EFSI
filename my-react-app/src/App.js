
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

  function EliminarCita(cita) {
    const citasActualizadas = ArrayCitas.filter(c => c !== cita);
    setCitas(citasActualizadas);
  }

  return (
    <div id="root">

      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">

          <div className="one-half column">
            <h2>Crear mi Cita</h2>

            <Formulario onAgregarCita={AgregarCita}/>

            <ListadoCitas Citas={ArrayCitas}/>
          </div>

          <div className="one-half column">

            <h2> Administra tus citas</h2>

            <Citas citas={ArrayCitas} onEliminarCita={EliminarCita}/>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;

