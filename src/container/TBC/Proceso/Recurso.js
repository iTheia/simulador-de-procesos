import React from 'react'
import '../Styles/Recurso.css'

export default function Recurso({recurso}) {
    
    if(recurso.ocupadoPor !== null){
        return (
            <div className="recurso" style={{
                background: '#ad1700',
                color: '#f2f2f2f2'
            }} >
                <span>{recurso.nombre}</span>
            </div>
        )
    }
    return (
        <div className="recurso"  style={{
                background: '#50a700',
                color: '#f2f2f2f2'
            }} >
            <span>{recurso.nombre}</span>
        </div>
    )
}
