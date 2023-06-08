import React from 'react'

export default function Citas({citas,onEliminarCita}) {

    return (
        <>
        {citas.map(item => (
        <div className="cita" key={item.id}>
        
        <p>Mascota: <span>{item.nomMascota}</span></p>    
        <p>Dueño: <span>{item.nomDueno}</span></p>
        <p>Fecha: <span>{item.fecha}</span></p>
        <p>Hora: <span>{item.hora}</span></p>
        <p>Sintomas: <span>{item.sintomas}</span></p>
        <button onClick={()=> onEliminarCita(item.id)} className="button elimnar u-full-width">Eliminar</button> 
        </div>
        ))}            
    </>
    )
}
    

    
       
       
    


