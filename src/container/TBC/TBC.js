import React,{useEffect, useState} from 'react'
import Creador from './Proceso/Creador'
import Tabla from './Proceso/Tabla'
import CreadorRecurso from './Proceso/CreadorRecurso'
import ContainerRecursos from './Proceso/ContainerRecursos'
import './TBC.css'
import RecursosDelProcesador from './Proceso/RecursosDelProcesador'
import templateRecursos from './template.js'
export default function TBC() {
    const [time, setTime] = useState(Date.now())
    const [recursos, setRecursos] = useState(templateRecursos())
    const [TBC, setTBC] = useState({
        actual: 1,
        nextId:1,
        recursos:2000,
        procesos: []
    }) 

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000)
        let procesoActual = obtener()
        if (procesoActual) {
            if (procesoActual.estado === 'bloqueo') {
                procesoActual = verificarBloqueo(procesoActual)
            }
            procesoActual = vefiicarBloqueo(procesoActual)
        
            if (procesoActual.estado === 'listo' ) {
                procesoActual.tiempo -=1
            }
            procesoActual = verificarFinal(procesoActual)
            if (procesoActual) {
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
            
        }
        return () => {
            clearInterval(interval);
        }
    }, [time])

    return (
        <section id="simulator">
            <div className="content">
                <ContainerRecursos recursos={recursos}></ContainerRecursos>
                <Creador TBC={TBC} recursos={recursos}></Creador>
                <Tabla procesos={TBC.procesos} recursos={recursos}></Tabla>
                <CreadorRecurso agregarRecurso={agregarRecurso}></CreadorRecurso>
                <RecursosDelProcesador RecursosDelProcesador={TBC.recursos}></RecursosDelProcesador>
            </div>
        </section>
    )
    function obtener() {
        let proceso
        let libresEnLista = false
        TBC.procesos.forEach(proceso =>{
            if (proceso.estado === 'listo') {
                libresEnLista = true
            }
        })

        if (libresEnLista) {
            TBC.procesos.forEach(element =>{
                if (element.estado === 'finalizado' && element.id === TBC.actual) {
                    TBC.procesos.forEach(element =>{
                        if (element.estado !== 'finalizado') {
                            TBC.actual = element.id
                        }
                    })
                }
                if(element.id === TBC.actual){
                    proceso = element
                }
            })
        }
        if (!libresEnLista){
            TBC.procesos.forEach(element =>{
                if (element.estado === 'bloqueo') {
                    element.recursosNecesarios.forEach(recursoNecesario =>{
                        const recurso = recursos[recursoNecesario]
                        if (recurso.ocupadoPor == element.id) {
                            TBC.actual = element.id
                            proceso =element
                        }
                    })
                }
            })
        }
        
        
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
            TBC.recursos += parseInt(proceso.recursos)
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
    
    function agregarRecurso (recurso){
        let copy = recursos
        copy.push(recurso)
        setRecursos(copy) 
    }
}
