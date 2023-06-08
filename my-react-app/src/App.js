
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

    //creo una nueva cita compilando las anteriores con una nueva
    setCitas(
      [
        ...ArrayCitas,
        newCita
      ]
    );
  }
  
  function EliminarCita(id) {
    
    const citasActualizadas = ArrayCitas.filter(c => c.id !== id);
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

          </div>

          <div className="one-half column">

            <h2> Administra tus citas</h2>

            <ListadoCitas citas={ArrayCitas} onEliminarCita={EliminarCita}/>

          </div>

        </div>
      </div>
    </div>

  );
}

export default App;

