
import './App.css';
import Formulario from './Formulario';
import ListadoCitas from './ListadoCitas';

function App() {
  return (
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario />
          </div>
          <div class="one-half column">
            <h2>Administra tus citas</h2>
            <ListadoCitas/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

