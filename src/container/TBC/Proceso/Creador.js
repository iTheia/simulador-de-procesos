import React,{useState} from 'react'

export default function Creador({agregarProceso, recursos}) {
    const template = {
        id:null,
        nombre:"",
        tiempo:0,
        estado:"listo",
        recursosNecesarios:[2],
        recursos:0
    }
    const [proceso, setProceso] = useState(template)
    const handleChange = (e) =>{
        let copy = proceso
        copy[e.target.name] = e.target.value
        setProceso(copy)
    }
    const handleChangeCheck = (e) =>{
        let copy = proceso
        if (copy.recursosNecesarios) {
            
        }else{
            copy.recursosNecesarios.push()
        }
    }
    const crearProceso = (e) => {
        if(proceso.tiempo === 0){
            return
        }
        if(proceso.nombre === ""){
            return 
        }
        if(proceso.recursos === 0){
            return 
        }
        refNombre.current.value=''
        refTiempo.current.value= 0
        refRecursos.current.value=0
        setProceso(template)
        agregarProceso(proceso)
    }
    const refNombre = React.createRef()
    
    const refRecursos = React.createRef()
    const refTiempo = React.createRef()
    return (
        <div className="creador">
            <label>Nombre</label>
            <input  type="text" ref={refNombre} name="nombre" onChange={handleChange} />
            
            <label>Tiempo en procesador</label>
            <input type="number" ref={refTiempo} name="tiempo" onChange={handleChange}/>

            
            <label>Cantidad de recursos</label>
            <input type="number" ref={refRecursos} name="recursos"  onChange={handleChange}/>
            <div className="check-container">
            {
                recursos.map(recurso =>{
                    return (
                        <label className="check">
                            <p>{recurso.nombre}</p>
                            <input onChange={handleChangeCheck} name="recurso" type="checkbox" />
                        </label>
                    )
                })
            }
            </div>
            
            <button onClick={crearProceso}>Crear</button>
        </div>
    )
}
