import React from 'react'
import './Navbar.css'
import logo from './planning.svg'
export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt=""/>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#how">Como funciona</a></li>
                <li><a href="#simulator">Simulador</a></li>
            </ul>
        </nav>
    )
}
