
//OPERADORES LÓGICOS Y RELACIONALES
/*
== Es igual a == b
=== Es estrictamente igual a === b
!= Es distinto a != b
!== Es estrictamente distinto a != b
<, <=, >, >= Menor, menor o igual, mayor, mayor o igual a <= b
&& Operador and (y) a && b
|| Operador or (o) a || b
! Operador not (no) !a
*/


// METODOS DE ARRAYS
/*
const productos = ["Heladera","televisor","radio","microondas"]
productos.push("lavaropas") //1 
productos.unshift("primero") //2
productos.pop() //3
productos.shift() //4
productos.splice(2,1) //5 
let index = productos.indexOf("Heladera") //6
let productosCopia = productos.slice() //7
let listaProductos = productos.join(",") //8
let productos2 = productos.concat(["freidora","afeitadora"]) //9
productos.reverse() //10 modifica el original
let existe = productos.includes("Heladera") //11
*/


//METODOS DE BUSQUEDA Y TRANSFORMACION
/*
const productos = [
    {nombre:"heladera",precio:150000,stock:5},
    {nombre:"televisor",precio:100000,stock:4},
    {nombre:"cocina",precio:100000,stock:6}
]
productos.forEach( (producto)=> { //1
    console.log(producto.nombre)
} )
const producto = productos.find(producto=> producto.nombre == "heladera") //2 modifica el original
const index = productos.findIndex(producto=> producto.nombre == "cocina") //3
const total = productos.reduce((ac,producto)=> ac + producto.precio , 0 ) //4
const ivaProductos = productos.map((producto) =>{ //5
    return {
        nombre: producto.nombre,
        precio: producto.precio + producto.precio *0.21
    }
})
const existe = productos.some((producto) => producto.nombre == "heladera" ) //6
const baratos = productos.filter(producto => producto.precio <120000) //7 modifica el original
productos.sort((a,b)=>{ //8

    if(a.nombre > b.nombre){
        return 1
    }
    if(a.nombre < b.nombre){
        return -1
    }
    return 0

})
const numeros2 = [5, 3, 2, 6, 1, 4]
numeros2.sort((a, b) => b - a);  

const palabras = ["hola", "chau", "auto","teatro"]

palabras.sort((a,b)=>{ 

    if(a > b){
        return 1
    }
    if(a < b){
        return -1
    }
    return 0

})
*/

//DOM
/*
const contenedorProductos = document.getElementById("productos")
let contenedor = document.createElement("div")
let p = document.createElement("p")
let p2 = document.createElement("p")
p.innerText = "Hola Mundo"
p2.innerText = "chau"
p3 = document.createElement("p")
p3.innerText = "contar"
p3.className="row justify-content-center" //pisa las clases que tenia
p3.className = "col-12"
console.log(p3.innerText)
contenedor.append(p,p2)
contenedor.prepend(p3)
contenedorProductos.append(contenedor)


const div = document.getElementsByTagName("div")
div[0].innerHTML = "<div></div>"
div[1].innerText = "hola"
div[0].style.background = "black"
div[0].style.color = "white"
const productos = document.getElementsByClassName("producto")
for(const producto of productos){
    producto.classList.add("estilos","maxi")
    producto.classList.remove("estilos")
    producto.classList.replace("maxi","pitu")
    producto.setAttribute ("name","hola")
}
productos[2].remove()
document.querySelector(".producto")
document.querySelectorAll(".producto")
*/

//EVENTOS

//Eventos del mouse
/*
mousedown/: Se oprime/suelta el botón del ratón sobre un elemento.
mouseover/mouseout:  El puntero del mouse se mueve sobre/sale del elemento.
mousemove: El movimiento del mouse sobre el elemento activa el evento.
click: Se activa después de mousedown o mouseup sobre un elemento válido.
*/

//Eventos de teclado
/*
keydown: Cuando se presiona o se mantiene presinada
keyup: Cuando se suelta una tecla.
*/
//Eventos Input
/*
onchange: cuando se sale del input
input: cuando se escribe en el input
*/

//Evento Formulario
/*
submit
e.preventDefault();
e.target.children[0].value
*/

