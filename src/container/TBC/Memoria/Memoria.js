import React from 'react'
import './Memoria.css'
import Particion from './Particion'

export default function Memoria({TBC}) {

    function renderParticiones() {
        let particiones = []
        for (let index = 0; index < TBC.particiones.length; index++) {
            const particion = TBC.particiones[index]
            particiones.push(<Particion key={index} color={particion.color}></Particion>)
        }
        return particiones
    }

    return (
        <div className="Memoria" id="memoria">
            {renderParticiones()}
        </div>
    )
}
