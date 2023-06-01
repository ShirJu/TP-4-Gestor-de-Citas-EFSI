
import './App.css';
import React, { useState } from "react";
import Formulario from './Componentes/Formulario';
import Citas from './Componentes/Citas';
import ListadoCitas from './Componentes/ListadoCitas';

function App() {
  const listado = [
    {Mascota:'Nina', Dueño:'Martin', Fecha:'2023-05-02',Hora:23-20, Sintomas:'toz'}
  ];
  const [citas, setCitas] = useState([{
    id: 0,
    nomMascota: "prueba",
    nomDueno: "prueba",
    fecha: "prueba",
    hora: "prueba",
    sintomas: "prueba"
  }]);

  const AgregarCita = (newCita) => {


    setCitas(
      [
        ...citas,
        newCita,
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
            <Formulario />
          </div>
          <div className="one-half column">
            <h2> Administra tus citas</h2>
            <ListadoCitas listado={listado} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

