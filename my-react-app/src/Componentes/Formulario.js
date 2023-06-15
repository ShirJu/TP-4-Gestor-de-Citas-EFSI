import React, { useState } from "react";

//a mi componente le llega por parametro la funcion asignada a onAgregarCita
export default function Formulario({ onAgregarCita }) {

    //useState(0): estoy inicializando el id en 0
    //estoy desestructurando useState en  idState y setId
    const [idState, setId] = useState(0);

    const CrearCita = (e) => {
        //Anula comportamineto natural de la pagina, no me saca de la pagina
        //es para que no se reinicie y no borre los datos
        e.preventDefault();

        // armo un objeto
        let newCita = {

            //target es el formulario, name: mascota
            id: idState,
            nomMascota: e.target.mascota.value,
            nomDueno: e.target.propietario.value,
            fecha: e.target.fecha.value,
            hora: e.target.hora.value,
            sintomas: e.target.sintomas.value
        }

        //reinicio los valores
        e.target.mascota.value = ''
        e.target.propietario.value = ''
        e.target.fecha.value = ''
        e.target.hora.value = ''
        e.target.sintomas.value = ''

        //paso a la funcion pasada por parametros el objeto creado con los objetos del form
        //recibo la funcion onAgregarCita y le mando newCita
       onAgregarCita(newCita);
       console.log(newCita);
    }
// cuando aprieto el botton de tipo submit y a traves de e mando el evento de onSubmit
    return (
        <form onSubmit={(e) => CrearCita(e)}>
            <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" id="nombreM"/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" /><label>hora</label>
            <input type="time" name="hora" className="u-full-width" /><label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width"></textarea>
            <button type="submit" onClick={()=>  setId(idState + 1)} className="u-full-width button-primary">Agregar Cita</button>
        </form>
    )
}
