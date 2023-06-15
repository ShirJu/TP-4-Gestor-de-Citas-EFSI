
import './App.css';
import React, { useState } from "react";
import Formulario from './Componentes/Formulario';
import Citas from './Componentes/Citas';
import ListadoCitas from './Componentes/ListadoCitas';

function App() {
  //useState: estado del componente
  //estoy desestructurando useState en  ArrayCitas (el array actual) y setId (el nuevo contenido a gregar)

  //variable ArrayCitas que le asigno useState([]) desde el inicio.
  //setCitas es un modificador de ese valor
  const [ArrayCitas, setCitas] = useState([]);

  //recibe newCita (objeto) de formulario
  function AgregarCita (newCita) {

    //llama al modificador
    setCitas(
      [
        // agarro ArrayCitas que ya tiene un valor y le agrego newCita que llega por parametros
        ...ArrayCitas,
        newCita
      ]
    );
  }
  
  function EliminarCita(id) {
    
    const citasActualizadas = ArrayCitas.filter(c => c.id !== id);
    setCitas(citasActualizadas);
  }
  
  //viwe de la pantalla

  //Line 49: llamo al componente  formulario que es hijo y le mando por prop la funcion AgregarCita
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

