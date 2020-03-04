import React from 'react'
import '../Styles/RecursosDelProcesador.css'
export default function RecursosDelProcesador({RecursosDelProcesador}) {
    const outCircle = React.createRef()
    const recursosTotales = 2000;
    const porcentaje = ((RecursosDelProcesador*100)/recursosTotales)
    
    const offset = (440 - (440 *porcentaje)/100)
    const styles = {
        strokeDashoffset:offset,
        stroke: "#016f9b"
    }
    if( porcentaje<30){
        styles.stroke = "#f54c35"
    }else if( porcentaje<60){
        styles.stroke = "#ebd934"
    }
    return (
        <div className="box">
            <div className="percent">
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle ref={outCircle} style={styles} cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                    <h2>{RecursosDelProcesador}<span>MB</span></h2>
                </div>
            </div>
            <h2 className="text">Memoria libre</h2>
        </div>
    )
}
