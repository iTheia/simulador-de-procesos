import React from 'react'
import excelIcon from './src/excel.svg'
import pptIcon from './src/powerpoint.svg'
import wordIcon from './src/word.svg'

export default function Defoult({TBC}) {
    
    const powerPoint = {
        id:null,
        nombre:"Power Point",
        tiempo:30,
        estado:"listo",
        recursosNecesarios:[],
        recursos:300,
        color: "#fa8211"
    }
    const word = {
        id:null,
        nombre:"Word",
        tiempo:20,
        estado:"listo",
        recursosNecesarios:[],
        recursos:200,
        color: "#115bfa"
    }

    const excel = {
        id:null,
        nombre:"Excel",
        tiempo:35,
        estado:"listo",
        recursosNecesarios:[],
        recursos:400,
        color: "#04c946"
    }

    function crearProceso (e, proceso) {
        if((TBC.recursos-proceso.recursos) < 0){
            alert("Estas intentando usar mas recursos de los disponibles")
            return 
        }

        proceso.id = TBC.nextId
        let contador = proceso.recursos
        for (let index = 0; index < TBC.particiones.length; index++) {
            if (TBC.particiones[index].ocupadoPor === null && contador !== 0) {
                TBC.particiones[index].ocupadoPor = proceso.id
                TBC.particiones[index].color = proceso.color
                contador--
            }
        }
        TBC.recursos -= proceso.recursos
        TBC.nextId += 1
        TBC.procesos.push(proceso)
    }
    const style= {
        width:"50px",
        height:"50px"
    }
    return (
        <div className="defoult">
                <button onClick={(e) => crearProceso(e, powerPoint)}>
                    <img src={pptIcon} alt="" style={style} />
                </button>
                <button onClick={(e) => crearProceso(e, word)}>
                    <img src={wordIcon} alt="" style={style} />
                </button>
                <button  onClick={(e) => crearProceso(e, excel)}>
                    <img src={excelIcon} alt="" style={style} />
                </button>
        </div>
    )
}
