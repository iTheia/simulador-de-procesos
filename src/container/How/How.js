import React from 'react'
import './How.css'
export default function How() {
    return (
        <section id="how">
            <img src={require('./mujer.svg')} alt="" />
            <div className="content">
                <h1>Que es un Programa</h1>
                <p>
                    Es un archivo estatico almacenado en memoria este es quien genera <span>procesos</span>
                </p>
                <h1>Que es un Proceso</h1>
                <p>
                    Es toda orden de ejecucion la cual necesita memoria, tiempo en en el procesador, un programa puede crear muchos procesos, el mas basico surge cuando
                    un programa se quiere ejecutar
                </p>
                <h1>Como funciona el simulador</h1>
                <article>
                    <p>Todo proceso tiene 3 estados basicos</p>
                    <ul>
                        <li>
                            <span>Listo</span>
                            <p>
                                El proceso ha almacenado recursos y esta preparado para ser ejecutado
                            </p>
                        </li>
                        <li>
                            <span>Bloqueado</span>
                            <p>
                                El proceso no puede seguir siendo ejecutado puesto que necesita un recurso el cual no esta disponible
                            </p>
                        </li>
                        <li>
                            <span>Finalizado</span>
                            <p>
                                El proceso ha terminado
                            </p>
                        </li>
                    </ul>
                </article>
                <h1>Que tome en cuenta para este simulador</h1>
                <p>
                    Todo proceso tendra una cantidad de recursos, tiempo necesario en el procesador y nombre
                    <br></br>
                    opcionalmente estos procesos pueden necesitar recusos adicionales, como dispositivos E/S, etc
                </p>
                <p>
                    El sistema en el que el despachador trabajara es una aproximacion a Round robin, es decir, los procesos
                    con menor tiempo en procesador seran despachados primero, para asi liberar ese espacio de memoria lo mas pronto posible
                </p>
                <p>
                    Adicional a esto, Puede haber interbloqueo entre los procesos y no se pueden salir de este estados
                    <br></br>
                    Este es solo un sistema basico que aplica los fundamentos
                </p>
            </div>
        </section>
    )
}
