import React from 'react'

export default function Formulario() {
    
   
    return (
        <>
            <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" />
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" id="nombreM"/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" /><label>hora</label>
            <input type="time" name="hora" className="u-full-width" /><label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width"></textarea>
            <button type="submit" className="u-full-width button-primary" >Agregar Cita</button>
        </>
    )
}
