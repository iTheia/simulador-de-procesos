import React,{useState} from 'react'

export default function CreadorRecurso({agregarRecurso, recursosDisponibles}) {
    
    const template = {
        ocupadoPor:null,
        nombre:""
    }
    const nombreRef = React.createRef()
    const [recurso, setRecurso] = useState(template)

    const handleChange = (e) =>{
        let copy = recurso 
        copy[e.target.name] = e.target.value
        setRecurso(copy)
    }
    const verificar = () =>{
        if (recurso.nombre === "") {
            return 
        }
        nombreRef.current.value = ''
        agregarRecurso(recurso)
        setRecurso(template)
    }
    return (
        <div className="creador-recurso">
            <label>Crear un recurso</label>
            <input ref={nombreRef} placeholder="Nombre del recurso" onChange={handleChange} name="nombre" type="text" />
            <button onClick={verificar}>Agregar</button>
        </div>
    )
}
