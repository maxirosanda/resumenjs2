
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

// Localstorage y SessionStorage
/*
localStorage.setItem("dato1","primer dato de prueba")
console.log(localStorage.getItem("dato1"))
localStorage.setItem("dato2","segundo dato de prueba")
console.log(localStorage.getItem("dato2"))
console.log(localStorage.length)
//localStorage.removeItem("dato2")
//localStorage.clear()
const objeto = {
    nombre: "maxi",
    apellido:"rosanda",
    habilitado:true,
    cursos:{
        javascript:15000
    }
}
const objetoJson = JSON.stringify(objeto)
console.log(objeto)
console.log(objetoJson)
const objetojs = JSON.parse(objetoJson)
console.log(objetojs)

for(let i = 0 ;i < localStorage.length;i++){
   let clave = localStorage.key(i)
   console.log("clave:" + clave)
   console.log("Valor: " +  localStorage.getItem(clave)) 
}
sessionStorage.setItem("dato3","este es el dato 3")
console.log(sessionStorage.getItem("dato3"))
*/

//Operadores Avanzados
/*
let i = 0
i+=1
i+=2
i++
console.log(i)

const condicion = false

let variable = condicion == true ? "verdadero":"falso"
console.log(variable)
condicion == false && console.log("verdadero")
*/
//operador ||
/*
console.log(0 || "sale el segundo valor")
console.log(40 || "sale el segundo valor")
console.log(null|| "sale el segundo valor")
console.log(undefined || "sale el segundo valor")
console.log( "Hola mundo" || "sale el segundo valor")
console.log("" || "sale el segundo valor")
console.log(NaN|| "sale el segundo valor")
console.log(true || "sale el segundo valor")
console.log(false|| "sale el segundo valor")
*/
console.log("------------------------------------------------")
// operador ??
/*
console.log(0 ?? "sale el segundo valor")
console.log(40 ?? "sale el segundo valor")
console.log(null ?? "sale el segundo valor")
console.log(undefined ?? "sale el segundo valor")
console.log( "Hola mundo" ?? "sale el segundo valor")
console.log("" ?? "sale el segundo valor")
console.log(NaN ?? "sale el segundo valor")
console.log(true ?? "sale el segundo valor")
console.log(false ?? "sale el segundo valor")
*/
/*
const objeto = {
    nombre: "maxi",
    apellido:"rosanda",
    habilitado:true,
    cursos:{
        javascript:15000
    }
}
const valor = objeto?.cursos?.javascript || "no existe el curso"
console.log(valor)
const valor2 = objeto.cursos?.dw || "no existe el curso"
console.log(valor2)

//desestructuracion
const { nombre , apellido } = objeto
console.log(nombre)
console.log(apellido)
const { habilitado , cursos:{javascript} } = objeto
console.log(javascript)
//alias desestructuracion
const {
    nombre:nombreAlumno,
    apellido:apellidoAlumno
} = objeto

console.log(nombreAlumno)
//desetructuracion en parametros
const funcionDestructuracion = ({nombre,apellido,habilitado,cursos:{javascript}}) =>{
    console.log(nombre)
}
funcionDestructuracion(objeto)
//desestructuracion de arrays
const array = ["hola","chau","miercoles"]
let [a,b,c] = array
console.log(a , b , c)
let [ , ,d] = array
console.log(d)
//spread
console.log(...array)
const numeros = [121,121,2121,223,434]
console.log(Math.max(...numeros))
const mixto = [...array,...numeros]
console.log(mixto)
const objeto2 = {...objeto}
console.log(objeto2)
//rest parameters
const max = (...numeros)=>{
    console.log(numeros)
    console.log(numeros.reduce((acc,n)=> acc + n,0))
}

max(12,232,12,12)
*/
//get all
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
//get
fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json))
// create
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))

  //update
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
// delete
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
//query
fetch('https://jsonplaceholder.typicode.com/posts?userId=1&title=foo')
  .then((response) => response.json())
  .then((json) => console.log(json));