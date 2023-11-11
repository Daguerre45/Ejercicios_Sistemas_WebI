const http = require('http');
const url = require('url');
const port = 3000;
let contraseña = "";
let palabras_contraseñas = ["Validez","Jodido","Exculpar","Espesar","Atmósfera","Nomenclador","Claro","Cifra","Componer","Usurpación","Conciencia","Gusano","Muelle","Pantalla","Suegra","Fermentación","Noqueo","Enaltecer","Rendimiento","Orfebrería"];
let n_max = palabras_contraseñas.length
let n_min = 1;
let error;


const server = http.createServer((req, res) => {
    let query = url.parse(req.url,true).query;
    let palabras = parseInt(query.x)
    console.log(palabras)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(palabras > n_max){
        error = `Como máximo puedes elegir: ${n_max} palabras`;
        }else if(palabras < n_min){
            error = `Como mínimo puedes elegir: ${n_min} palabras`;
        }else{
            error = "";
            let palabrasSeleccionadas = [];
            for (let i = 0; i < palabras; i++) {
            let indiceAleatorio = Math.floor(Math.random() * palabras_contraseñas.length);
            palabrasSeleccionadas.push(palabras_contraseñas[indiceAleatorio]);
            contraseña = palabrasSeleccionadas.join('');
            }
        }
    res.end(`<h1>SU CONTRASEÑA ES:</h1> 
                <h3>${contraseña}<h3> <p>${error}</p>`);
});


server.listen(port, () => {
    console.log(`Servidor Node.js en funcionamiento en el puerto ${port}`);
  });