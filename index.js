const axios = require('axios'); //accion para ejecutar get y post  


axios.get('https://api.covid19api.com/summary')
.then(pregunta => {   
    console.log ("el get es", pregunta.data.Global); //imprimo mi dato global donde se encuentra todo los relacionado del covib19. METODO GET
    
})    

axios.post('https://jsonplaceholder.typicode.com/comments?postId=1', {
    pais: "Canada",
    contraseña: "123312",
}) //datos que envio a la API para que me genere una respuesta en el panel serial. METODO POST
.then(pedido => {
    console.log("la peticion post es ", pedido.data);
})
