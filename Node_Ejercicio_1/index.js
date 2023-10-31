const http = require('http');
const os = require('os');
const port = 3000;
const nodeVersion = process.version;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  console.log(`Sistema: ${os.platform()} ${os.release()}\n`);
  console.log(`Versión de Node.js: ${nodeVersion}\n`);
  res.end('<h1>MIRAR EL TERMINAL</h1>');
});

setInterval(() => {
    console.log('---------------------------------------------------');
    console.log(`CPU: ${JSON.stringify(os.cpus())}\n`);
    console.log(`FREE_RAM: ${os.freemem()}\n`);
    console.log(`Amount_RAM: ${os.totalmem()}\n`);
    console.log(`System_uptime: ${os.uptime()}\n`);
    console.log('---------------------------------------------------');
}, 3000);


server.listen(port, () => {
  console.log(`Servidor Node.js en funcionamiento en el puerto ${port}`);
});
