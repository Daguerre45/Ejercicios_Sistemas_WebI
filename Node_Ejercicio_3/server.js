const http = require('http');
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

http.createServer((req, res) => {
  res.write('Servidor funcionando...');
  res.end();
}).listen(8080);

console.log('Servidor corriendo en http://localhost:8080');

function descargarHTML() {
  axios.get('https://intranet.ceu.es/es-es/Paginas/inicio.aspx')
    .then((response) => {
      const $ = cheerio.load(response.data);
      //obtenene todos los enlaces de la página:
      const enlaces = [];
      $('a').each((i, link) => {
        enlaces.push($(link).attr('href'));
      });
      console.log(enlaces);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Descarga y procesa el HTML cada 10 segundos
setInterval(descargarHTML, 10000);
