import React from 'react'
import Recurso from './Recurso'
export default function ContainerRecursos({recursos}) {
    return (
        <div className="ContainerRecursos">
            {recursos.map(recurso=>{
                return <Recurso key={recurso.nombre} recurso={recurso}></Recurso>
            })}
        </div>
    )
}
