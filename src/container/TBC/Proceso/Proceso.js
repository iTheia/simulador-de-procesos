import React from 'react'

export default function Proceso({proceso, recursos}) {
    const styles = {
        background:""
    }
    let recursosNecesarios = proceso.recursosNecesarios
    let recursosEnTexto = ''
    if (proceso.estado === 'bloqueo') {
        styles.background = "#eb4034"
    }else if (proceso.estado === 'finalizado'){
        styles.background = "#3480eb"
    }else{
        styles.background = "#50a700"
    }

    if(proceso.recursosNecesarios){
        if(proceso.recursosNecesarios.length > 1){
            recursosNecesarios.forEach(element => {
                recursosEnTexto +=  `${recursos[element].nombre}, `
            })
        }else{
            recursosNecesarios.forEach(element => {
                recursosEnTexto +=  `${recursos[element].nombre} `
            })
        }
        
    }
    

    return (
        <div className="row">
            <div className="columna">{proceso.id}</div>
            <div className="columna">{proceso.nombre}</div>
            <div className="columna">{proceso.tiempo}</div>
            <div className="columna recurso">
                {
                    (proceso.estado === 'finalizado')? proceso.recursos+" Fue utilizada": proceso.recursos+" Esta siendo Usada"
                }
            </div>
            <div className="columna">{recursosEnTexto}</div>
            <div style={styles} className="columna">{proceso.estado}</div>
        </div>
    )
}
