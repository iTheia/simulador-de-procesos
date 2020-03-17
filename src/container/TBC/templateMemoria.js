export default function name() {

    let particiones = []

    for (let index = 0; index < 2000; index++) {
        particiones.push({
            id:index,
            ocupadoPor: null,
            color: "",
        })
        
    }
    return particiones
}