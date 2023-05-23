
import './App.css';
import Formulario from './Formulario.js';
import Citas from './Citas.js';
import ListadoCitas from './ListadoCitas.js';

function App() {
  const listado = [
    {Mascota:'Nina', Dueño:'Martin', Fecha:'2023-05-02',Hora:23-20, Sintomas:'toz'}
  ];
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

