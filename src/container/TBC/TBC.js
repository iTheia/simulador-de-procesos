import React,{useEffect, useState} from 'react'
import Proceso from './Proceso/Proceso'
import './TBC.css'

export default function TBC() {
    const [time, setTime] = useState(Date.now())
    const [recursos, setRecursos] = useState([])
    const [TBC, setTBC] = useState({
        actual: 1,
        nextId:1,
        procesos: []
    })

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000)
        let procesoActual = obtener()
        if (procesoActual) {
            procesoActual = vefiicarBloqueo()
            if (procesoActual.estado === 'listo' ) {
                procesoActual.tiempo -=1
            }
            procesoActual = verificarFinal(procesoActual)
            
            let nextId = procesoActual.id
            let minimo = 99999
            TBC.procesos.forEach((proceso) =>{
                if(proceso.estado === 'bloqueo'){
                    proceso = verificarBloqueo(proceso)
                }
                if (proceso.estado === 'listo') {
                    if(proceso.tiempo< minimo){
                        minimo=proceso.tiempo
                        nextId  = proceso.id
                    }
                }
            })
            TBC.actual=nextId
        }
        
        return () => {
            clearInterval(interval);
        }
    }, [time])

    return (
        <section id="simulator">
            <div className="content">

            <button onClick={()=>console.log(TBC)}>Revisar TBC</button>
            <button onClick={()=>console.log(recursos)}>Revisar Recursos</button>
            {TBC.procesos.map(proceso =>{
                return <Proceso proceso={proceso}></Proceso>
            })}
            
            </div>
        </section>
    )

    function obtener() {
        let proceso
        TBC.procesos.forEach(element =>{
            if(element.id === TBC.actual){
                proceso = element
            }
        })
        return proceso
    }
    function vefiicarBloqueo(proceso) {
        if (proceso.recursosNecesarios) {
            proceso.recursosNecesarios.forEach(recurso =>{
                if(recursos[recurso].ocupadoPor === null){
                    recursos[recurso].ocupadoPor = proceso.id
                }
                if(recursos[recurso].ocupadoPor !== proceso.id){
                    proceso.estado = 'bloqueo'
                }
            })
        }
        return proceso
    }

    function eliminarRecursos(proceso) {
        recursos.forEach((recurso,index) =>{
            for (let j = 0; j < proceso.recursosNecesarios.length; j++) {
                const posicionDelRecursoEnElProceso = proceso.recursosNecesarios[j]
                if(index === posicionDelRecursoEnElProceso){
                    recursos[posicionDelRecursoEnElProceso].ocupadoPor = null
                }
            }
            return proceso
        })
        delete proceso.recursosNecesarios
    }
    function verificarFinal(proceso) {
        if (proceso.tiempo === 0) {
            proceso.estado = 'finalizado'
            if (proceso.recursosNecesarios) {
                proceso = eliminarRecursos(proceso)
            }
        }
        
        return proceso
    }
    function verificarBloqueo(proceso) {
        let quitarBloqueo = false
        recursos.forEach((recurso,index) =>{
            for (let j = 0; j < proceso.recursosNecesarios.length; j++) {
                const posicionDelRecursoEnElProceso = proceso.recursosNecesarios[j]
                if(index === posicionDelRecursoEnElProceso){
                    if (recursos[posicionDelRecursoEnElProceso].ocupadoPor === null) {
                        quitarBloqueo = true
                    }else{
                        quitarBloqueo = false
                    }
                }
            }
        })
        if (quitarBloqueo) {
            proceso.estado = 'listo'
        }
        return proceso
    }
    
}
