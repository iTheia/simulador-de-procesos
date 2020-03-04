import React from 'react'
import Proceso from './Proceso'
export default function Tabla({procesos, recursos}) {
    return (
        <div className="tabla">
            <div className="row">
                <div className="columna principal"> <h2>Id</h2> </div>
                <div className="columna principal"> <h2>Nombre</h2> </div>
                <div className="columna principal"> <h2>Tiempo</h2> </div>
                <div className="columna principal"> <h2>Memoria</h2> </div>
                <div className="columna principal"> <h2>Recursos</h2> </div>
                <div className="columna principal"> <h2>Estado</h2> </div>
            </div>
            {
                procesos.map(proceso => {
                    return <Proceso key={proceso.id} proceso={proceso} recursos={recursos}></Proceso>
                })
            }
        </div>
    )
}
