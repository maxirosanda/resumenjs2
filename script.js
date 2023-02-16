
// Metodos de arrays
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


//Metodos de busqueda y transformacion
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
*/
