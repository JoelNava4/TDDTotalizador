const IMPUESTO_CA = 0.0625

export function devolverItems(numItems){
    return numItems;
}
export function devolverPrecioxItems(precio){
    return precio;
}

export function devolverEstado(estado){
    return estado;
}

export function devolverPrecioNeto(numItems,precio){
    return numItems * precio;
}

export function devolverImpuesto(numItems,precio,estado){
    return estado === "CA" ? "Impuesto para " + estado + " (%" + IMPUESTO_CA * 100 + "): " + devolverPrecioNeto(numItems,precio) * IMPUESTO_CA:
           "El estado aun no tiene impuesto";
}