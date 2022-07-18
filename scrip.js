alert("Bienvenidos al buen comer, el precio es por persona.")

let comida = parseInt (prompt("Ingrese el numero segun corresponda de lo que va a comer 1- Pizza: $400 2- Hamburguesa: $500 3- Pasta: $300:  "))
let personas = parseInt (prompt("Ingrese el numero de personas que van a comer: "))

console.log ("Comida seleccionada: " + comida)
console.log ("Personas que van a comer: " + personas)
let precio = 0;

if(comida == 1 ){
    precio = 400
    console.log ("El precio por persona es: " + precio)
} else if (comida == 2){
    precio = 500
    console.log ("El precio por persona es: " + precio)
} else if (comida == 3 || comida < 3) {
    precio = 300
    console.log ("El precio por persona es: " + precio)
} else{
    console.log ("No corresponde")
}

let preciototal = precio * personas
console.log ("El precio total sin descuento es:" + preciototal)

if (personas > 3){
    let total = preciototal * 0.5
    alert("El total a pagar es: " + total)
} else {
    alert("El total a pagar es: " + preciototal)
}

alert("Ahora solo falta reservar tu mesa. Muchas gracias")
