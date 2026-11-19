const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bienvenido a la API de Distribuciones Mediterráneo S.L. - Melanie');
    }

    else if (req.url === '/estado') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(JSON.stringify({
            servicio: 'API Node.js',
            hostname: os.hostname(),
            uptime_segundos: process.uptime(),
            fecha: new Date().toISOString()
        }));
    }

    else {
        res.writeHead(404);
        res.end('Ruta no encontrada');
    }
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Servidor escuchando en el puerto 3000');
});