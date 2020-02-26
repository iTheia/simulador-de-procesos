import React from 'react'
import './Home.css'
export default function Home() {
    return (
        <>
        <section id="home">
            <div className="content">
                <h1> <span>Simulador de procesos</span> de un sistema operativo</h1>
            </div>
            <img className="logo" src={require('./src/process.svg')} alt="imagen" />
            <div className="down">
                <h2>Descubre como funciona</h2>
                <svg  className="arrow" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.378906 0-132.667969-26.628906-181.019531-74.980469-48.351563-48.351562-74.980469-112.640625-74.980469-181.019531s26.628906-132.667969 74.980469-181.019531c48.351562-48.351563 112.640625-74.980469 181.019531-74.980469s132.667969 26.628906 181.019531 74.980469c48.351563 48.351562 74.980469 112.640625 74.980469 181.019531s-26.628906 132.667969-74.980469 181.019531c-48.351562 48.351563-112.640625 74.980469-181.019531 74.980469zm0-472c-119.101562 0-216 96.898438-216 216s96.898438 216 216 216 216-96.898438 216-216-96.898438-216-216-216zm138.285156 182-28.285156-28.285156-110 110-110-110-28.285156 28.285156 138.285156 138.285156zm0 0"/></svg>
            </div>
        </section>
        </>
    )
}
