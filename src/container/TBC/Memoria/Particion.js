import React from 'react'

export default function Particion({color}) {
    
    if(color === ""){
        color = "#f2f2f2"
    }
    
    const style = {
        background:color,
        height: 750/2000
    }

    return (
        <div  className="particion" style={style}>
        </div>
    )
}
