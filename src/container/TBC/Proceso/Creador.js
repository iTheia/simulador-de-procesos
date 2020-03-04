import React,{useState} from 'react'

export default function Creador({TBC, recursos}) {
    const template = {
        id:null,
        nombre:"",
        tiempo:0,
        estado:"listo",
        recursosNecesarios:[],
        recursos:0
    }
    const refNombre = React.createRef()
    const refRecursos = React.createRef()
    const refTiempo = React.createRef()
    const [proceso, setProceso] = useState(template)

    
    
    const handleChange = (e) =>{
        let copy = proceso
        copy[e.target.name] = e.target.value
        setProceso(copy)
    }
    const crearProceso = (e) => {
        if(proceso.tiempo === 0){
            return
        }
        if(proceso.nombre === ""){
            return 
        }

        if(proceso.recursos === 0){
            if((TBC.recursos-proceso.recursos) <= 0){
                console.log("Estas intentando usar mas recursos de los disponibles")
                
                return 0 
            }
            return 0
        }
        refNombre.current.value=''
        refTiempo.current.value= ''
        refRecursos.current.value=''
        TBC.recursos -= proceso.recursos
        console.log(proceso)
        proceso.id = TBC.nextId
        TBC.nextId += 1
        TBC.procesos.push(proceso)
        setProceso(template)
    }
    const cambiarEstadoDelCheckBox = (e) => {
        let id
            recursos.forEach((element,index) =>{
                if (e.target.name === element.nombre) {
                    id = index

                }
            })
        if (e.target.checked) {
            proceso.recursosNecesarios.push(id)
        }else{
            proceso.recursosNecesarios.forEach((recurso, index) =>{
                if (recurso === id) {
                    proceso.recursosNecesarios.splice(index,1)
                }
            })
        }

    }
    return (
        <div className="creador">
            <span className="title">Crea un proceso</span>
            <div className="form">
                <input placeholder="Nombre" type="text" ref={refNombre} name="nombre" onChange={handleChange} />
                <input placeholder="Tiempo en procesador" type="number" ref={refTiempo} name="tiempo" onChange={handleChange}/>
                <input placeholder="Cantidad de memoria" type="number" ref={refRecursos} name="recursos"  onChange={handleChange}/>
                <div className="check-container">
                    {
                        recursos.map(recurso =>{
                            return (
                                <div key={recurso.nombre} className="checkbox">
                                    <input onChange={cambiarEstadoDelCheckBox} id={recurso.nombre} name={recurso.nombre} type="checkbox" />
                                    <label htmlFor={recurso.nombre}>{recurso.nombre}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <button onClick={crearProceso}>Crear proceso</button>
        </div>
    )
}
