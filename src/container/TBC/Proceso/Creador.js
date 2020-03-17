import React,{useState, useEffect} from 'react'
import { SketchPicker } from 'react-color'

export default function Creador({TBC, recursos}) {
    const template = {
        id:null,
        nombre:"",
        tiempo:0,
        estado:"listo",
        recursosNecesarios:[],
        recursos:0,
        color: "#111"
    }
    const refNombre = React.createRef()
    const refRecursos = React.createRef()
    const refTiempo = React.createRef()
    const [proceso, setProceso] = useState(template)
    const [render, setrender] = useState(0)
    const [rendercheck, setrendercheck] = useState(true)
    useEffect(() => {
        setrendercheck(false)
    }, [render])
    const handleChange = (e) =>{
        let copy = proceso
        copy[e.target.name] = e.target.value
        setProceso(copy)
    }

    function crearProceso (e) {
        if(proceso.tiempo === 0){
            alert("El proceso necesita un tiempo de procesador")
            return
        }
        if(proceso.nombre === ""){
            alert("El proceso debe tener un nombre")
            return 
        }
        if((TBC.recursos-proceso.recursos) <= 0){
            alert("Estas intentando usar mas recursos de los disponibles")
            return 
        }
        if(proceso.recursos === 0){
            alert("Todo proceso utiliza memoria del procesador")
            return 
        }
        refNombre.current.value=''
        refTiempo.current.value= ''
        refRecursos.current.value=''

        proceso.id = TBC.nextId
        let contador = proceso.recursos
        
        for (let index = 0; index < TBC.particiones.length; index++) {
            if (TBC.particiones[index].ocupadoPor === null && contador !== 0) {
                TBC.particiones[index].ocupadoPor = proceso.id
                console.log(proceso)
                TBC.particiones[index].color = proceso.color
                contador--
            }
        }
        TBC.recursos -= proceso.recursos
        TBC.nextId += 1
        TBC.procesos.push(proceso)
        setProceso(template)
        let x = render +1
        setrender(x)
        setrendercheck(true)
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
                <input type="color" name="color" onChange={handleChange}/>
                <div className="check-container">
                    {
                        (rendercheck)? <h1>Render</h1>: recursos.map(recurso =>{
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
