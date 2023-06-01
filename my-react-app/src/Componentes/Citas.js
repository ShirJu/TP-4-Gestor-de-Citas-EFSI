import React from 'react'

export default function Citas({citas}) {

    return (
        
       
        <>

        {citas.map(item => (
        
             <div className="cita" key={item.id}>
         <div className="cita">
        <p>Dueño: <span>{item.nomDueno}</span></p>
        <p>Fecha: <span>{item.Fecha}</span></p>
        <p>Hora: <span>{item.Hora}</span></p>
        <p>Sintomas: <span>{item.Sintomas}</span></p>
        <button className="button elimnar u-full-width">Eliminar </button>    </div>
        </div>
        ))}
        
                
        

 
    
        
    )
    </>
    )

        }
    

    
       
       
    


