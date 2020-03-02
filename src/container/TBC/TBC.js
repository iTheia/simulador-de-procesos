import React,{useEffect, useState} from 'react'
import Proceso from './Proceso/Proceso'
import Creador from './Proceso/Creador'
import Tabla from './Proceso/Tabla'
import Recurso from './Proceso/Recurso'
import ContainerRecursos from './Proceso/ContainerRecursos'
import './TBC.css'

export default function TBC() {
    const [time, setTime] = useState(Date.now())
    const [recursos, setRecursos] = useState([
        {
            ocupadoPor:1,
            nombre:"Mouse",
            
        },
        {
            ocupadoPor:null,
            nombre:"Teclado"
        },
        {
            ocupadoPor:null,
            nombre:"Camara"
        },
        {
            ocupadoPor:null,
            nombre:"Microfono"
        }
    ])
    const [TBC, setTBC] = useState({
        actual: 1,
        nextId:1,
        procesos: [
            {
                id:1,
                nombre:"qwe",
                tiempo:5,
                estado:"listo",
                recursosNecesarios:[2],
                recursos:0
            },
            {
                id:2,
                nombre:"qwe",
                tiempo:5,
                estado:"listo",
                recursosNecesarios:[1],
                recursos:0
            },
            {
                id:3,
                nombre:"qwe",
                tiempo:5,
                estado:"listo",
                recursosNecesarios:[],
                recursos:0
            }
        ]
    }) 

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000)
        let procesoActual = obtener()
        if (procesoActual) {
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
                <Creador agregarProceso={agregarProceso} recursos={recursos}></Creador>
                <Tabla procesos={TBC.procesos}></Tabla>
                <button onClick={()=> console.log(TBC)}>TBC</button>
            </div>
        </section>
    )
    function agregarProceso(proceso) {
        proceso.id = TBC.nextId
        TBC.nextId += 1
        TBC.procesos.push(proceso)
    }
    function obtener() {
        let proceso
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
