import React from 'react'
import Citas from './Citas'

export default function ListadoCitas({listado}) {

 
  return (
   <div className="one-half column">
   
   {listado.map((item)=>(
    <div className="cita">
        
<Citas
      Macosta={item.Macosta}
      Dueño={item.Dueño}
      Fecha={item.Fecha}
      Hora={item.Hora}
      Sintomas={item.Sintomas}
    />
    </div>
   ) )

    }

    
  </div>
  )}
  




