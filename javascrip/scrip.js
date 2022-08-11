const comida = document.querySelector("#comida");
console.log(comida)

const personas = document.querySelector("#personas");

const nombre = document.getElementById("nombre");


const edad = document.querySelector("#edad");


const boton = document.querySelector("#btn");

const textoFinal = document.querySelectorAll(".nuevo_elemento")

const form= document.querySelector("#contenedor")

const informacion = document.querySelector("#informacion");

informacion.style.display = "none"

let precioComida = 0;
let cantperson = 0;
let comidaElegida = "";
let reservaNombre = "";
let cantpersonas = 0;


/* OBJETO PRECIOS */
const precios = {
    pizza: 400,
    burga: 500,
    pastas: 300,
}

/* FUNCION COMIDA */  
comida.addEventListener("change", () => {
    comidaElegida = comida.value
    funcionComida()
})

let funcionComida = () => {
    if (comidaElegida == "Pizza") {
        precioComida = precios.pizza;
    } else if (comidaElegida == "Hamburguesa") {
        precioComida = precios.burga;
    } else if (comidaElegida == "Pastas") {
        precioComida = precios.pastas;
    } else if (comidaElegida == "Elige una opción"){
        Error
    }
    return(precioComida);
}

/* FUNCION PERSONAS */

personas.addEventListener("change", () => {
    cantperson = personas.value
    funcionPersonas()
    console.log(cantperson)
})

let funcionPersonas = () => {
    if(personas.value == "1"){
        cantpersonas = 1;
    } else if (personas.value == "2"){
        cantpersonas = 2;
    }  else if (personas.value == "3"){
        cantpersonas = 3;
    } else if (personas.value == "4"){
        cantpersonas = 4;
    } return(cantpersonas);
}

/* FUNCION NOMBRE */
nombre.addEventListener("change", () => {
    let reservaNombre = nombre.value
    console.log(reservaNombre)
})

/* FUNCION EDAD */
edad.addEventListener("change", () => {
    let edadReserva = edad.value
    console.log(edadReserva)
})

/* FORMULARIO */
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

})

/* Click */
boton.onclick = () =>{
    funcionPersonas()
    funcionComida()
    console.log(cantpersonas)
    console.log(precioComida)
    let costototal = cantpersonas * precioComida;
    console.log(costototal)
    form.style.display = "none";
    informacion.style.display = "block"
    informacion.innerHTML = `<p> El precio total a pagar es de: $AR ${costototal}. <br> La reserva fue hechap por  ${nombre.value} de edad ${edad.value}.</p>`

}

/* Json */
localStorage.setItem("nombre", nombre.value);
localStorage.setItem("edad", edad.value);

let comidaJSON = JSON.stringify(comida.value)

localStorage.setItem("Prodcuto", comidaJSON)

let comidaJS = JSON.parse(localStorage.getItem('Producto'))

console.log("Pedido reservado: ",comida.value)
