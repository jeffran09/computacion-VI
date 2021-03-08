// ejercio de json numero 4 I corte. 
//el ejemplo.json el array fue proporcionado por /albums en la pagina de https://jsonplaceholder.typicode.com/



const fs = require('fs'); //me permite leer, crear, actualizar, borrar archivos
let rawData = fs.readFileSync('ejemplo.json');
let json = JSON.parse(rawData);


const axios = require('axios'); //accion para ejecutar get y post  

axios.post('https://jsonplaceholder.typicode.com/posts', json,  {
    
}) //datos que envio a la API para que me genere una respuesta en el panel serial. METODO POST
.then(pedido => {
    console.log("la primera peticion es:", pedido.data[0]);
    console.log("la ultima peticion es: " , pedido.data[49]);
}) //en este post se muestra un espejo en su respuesta, donde se pide informacion del primero al ultimo
.catch(error => {
    console.log(error);
} )