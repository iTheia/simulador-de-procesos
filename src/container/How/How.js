import React from 'react'
import './How.css'
export default function How() {
    return (
        <section id="how">
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
                <h1>¿Que es memoria?</h1>
                <p>
                    Es una estructura que almacena información, 
                    tomando en cuenta a partir de un sistema con particiones donde cada una tiene una dirección y espacio, 
                    los cuales es donde se guarda la información
                </p>
                <h1>¿Qué es el administrador de memoria?</h1>
                <p>
                    Se refiere a los distintos métodos y operaciones que se encargan de obtener la máxima utilidad de la memoria, organizando 
                    los procesos y programas que se ejecutan de manera tal que se aproveche de la mejor manera posible el espacio disponible.
                        Entre las principales operaciones que desarrolla la 
                        administración de memoria se encuentran la reubicación, que consiste 
                        en trasladar procesos activos dentro y fuera de la memoria principal para 
                        maximizar la utilización del procesador
                </p>
                <h1>Tareas que realiza</h1>
                <p>
                    <ul>
                        <li>Reasignación</li> 
                        <li>Protección</li> 
                        <li>Memoria compartida</li>
                        <li>Organización lógica</li>
                        <li>Organización física</li>
                    </ul>
                </p>
                <h1>Algoritmos y conceptos tomados en cuenta</h1>
                <article>
                    <h1>Fragmentación</h1>
                    <p>
                        La fragmentación comienza a aparecer cuando más procesos van siendo lanzados y van terminando: Al terminar la ejecución de un proceso, ya no tenemos sólo un bloque de espacio libre, sino dos. Potencialmente, cada programa que vaya terminando, irá devolviendo al sistema operativo un bloque de distinto tamaño, que quede entre dos procesos activos.
                        Si la computadora no tiene hardware específico que permita que los procesos resuelvan sus direcciones en tiempo de ejecución, el sistema operativo no puede reasignar los bloques existentes, y aunque pudiera hacerlo, mover un proceso entero en memoria puede resultar una operación cara en tiempo de procesamiento.
                        Al lanzarse un nuevo programa, el sistema operativo tiene tres estrategias según las cuales podría asignarle uno de los bloques disponibles
                    </p>
                    <h1>Primer ajuste</h1>
                    <p>        
                        Asigna al nuevo proceso el primer bloque que encuentre donde éste quepa. Este mecanismo es el más simple de implementar y el de más rápida ejecución.
                    </p>
                    <h1>Mejor ajuste</h1>
                    <p>
                        El sistema busca entre todos los bloques disponibles cuál es el que mejor se ajusta al tamaño requerido por el nuevo proceso. Esto requiere la revisión completa de la lista de bloques; lleva a que los bloques remanentes, una vez que se ubicó al nuevo proceso, sean tan pequeños como sea posible (esto es, que haya menor desperdicio).
                    </p>
                    <h1>Peor ajuste</h1>
                    <p>
                        El sistema busca cuál es el bloque más grande disponible, y se lo asigna al nuevo proceso. Empleando una estructura de datos como un montículo, esta operación puede ser incluso más rápida que la de primer espacio. Con este mecanismo se busca que los bloques que queden después de otorgarlos a un proceso sean tan grandes como sea posible, de cierto modo balanceando su tamaño.
                        La fragmentación externa se produce cuando hay muchos bloques libres entre bloques asignados a procesos; la fragmentación interna se refiere a la cantidad de memoria perdida por asuntos administrativos.
                    </p>
                    <h1>Compactación</h1>
                    <p>
                        Un problema importante que va surgiendo como resultado de esta fragmentación es que el espacio total libre de memoria puede ser mucho mayor que lo que requiere un nuevo proceso, pero al estar fragmentada en muchos bloques, éste no encontrará una partición donde ser cargado.
                        Si los procesos emplean resolución de direcciones en tiempo de ejecución, cuando el sistema operativo comience a detectar un alto índice de fragmentación, puede lanzar una operación de compresión o compactación: Mover los contenidos en memoria de los procesos en ejecución para que ocupen espacios contiguos, permitiendo unificar varios bloques libres en uno solo.
                        La compactación tiene un costo alto — Involucra mover prácticamente la totalidad de la memoria (probablemente más de una vez por bloque).
                    </p>
                    <h1>Multiprogramación de partición variable</h1>
                    <p>    
                        Los procesos ocupan tanto espacio como necesitan, pero obviamente no deben superar el espacio disponible de memoria.
                        No hay límites fijos de memoria, es decir que la partición de un trabajo es su propio tamaño.
                        Se consideran "esquemas de asignación contigua", dado que un programa debe ocupar las posiciones adyacentes de memoria.
                        Pueden ser usados por otros trabajos que cuando finalizan, dejan otros agujeros menores.
                        En sucesivos pasos, los "agujeros" son cada vez más numerosos, pero más pequeños, por lo que se genera un desperdicio de memoria principal.
                    </p>
                </article>
            </div>
        </section>
    )
}
