import React from 'react'
import '../Styles/Recurso.css'

export default function Recurso({recurso}) {
    
    const styles={
        background: '#50a700',
        color: '#f2f2f2f2'
    }
    if(recurso.ocupadoPor !== null){
        styles.background = '#eb4034'
        styles.color= '#f2f2f2f2'
    }
    return (
        <div className="recurso"  style={styles} >
            <span>{recurso.nombre}</span>
        </div>
    )
}
