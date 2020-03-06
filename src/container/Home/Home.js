import React from 'react'
import './Home.css'
export default function Home() {
    return (
        <>
        <section id="home">
            <div className="container">
                <h1> <span>Simulador de procesos</span> de un sistema operativo</h1>
                <img className="logo" src={require('./src/Proceso.svg')} alt="imagen" />
            </div>
        </section>
        </>
    )
}
