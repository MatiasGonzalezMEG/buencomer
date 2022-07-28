alert("Bienvenidos al buen comer, el precio es por persona.")

let precio = 0;
let descuento = 200;
let preciodescuento = 0;
let menores = 0;

let comida = parseInt (prompt("Ingrese el numero segun corresponda de lo que va a comer 1-Pizza 2- Hamburguesa 3- Pasta:  "))

if(comida == 1 ){
    precio = 400;
    alert("El precio por persona es de $400")
    comida = "Pizza"
} else if (comida == 2){
    precio = 500;
    alert("El precio por persona es de $500")
    comida = "Hamburguesa"
} else if (comida == 3 || comida < 3) {
    precio = 300;
    alert("El precio por persona es de $300")
    comida = "Pasta"
} else{
    console.log ("No corresponde")
}

let personas = parseInt (prompt("Ingrese el numero de personas que van a comer, recuerde que solo se permiten 4 personas: "))

precioTotal = precio * personas;

class Clientes {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
/ ARRAY DE Clientes /
let listaPersonas = []

const agregarpersona = () => {
    let nombre = prompt("¿Cuál es el nombre de la persona a comer?");
    let edad = parseInt(prompt("¿Cuál es la edad de esta persona?"));
    let clienteNuevo = new Clientes (nombre, edad);
    listaPersonas.push(clienteNuevo);
}
for ( let i = 1 ; i <= personas ; i++){
    agregarpersona()
}

console.log(listaPersonas)


listaPersonas.forEach(persona => {
    if (persona.edad < 12) {
        precioTotal = precioTotal - descuento;
        menores = menores + 1;
    }
})
console.log(menores)

if (menores > 1) {
    alert("Tiene descuento de 200$ por el total de " + menores + "menor." )
    alert("El precio a pagar es de: " + precioTotal)
} else {
    alert("El precio a pagar es de: " + precio)
}