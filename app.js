const fs = require('fs');
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const url = request.url;

  switch (url) {
    case '/about':
      fs.readFile('./views/about.html', (error, data) => {
        if (error) {
          response.writeHead(404, { 'Content-Type': 'text/html' });
          response.end('404 Not Found');
        } else {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.write(data);
          response.end();
        }
      });
      break;

    // Handle other routes...

    default:
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write('Welcome to the Home Page');
      response.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const EventEmitter = require('events');

class RouteEventEmitter extends EventEmitter {}

const routeEmitter = new RouteEventEmitter();

// Define the specific route we want to monitor
const monitoredRoute = '/products';

// Set up the event listener
routeEmitter.on('routeAccessed', (route) => {
  console.log(`Route ${route} was accessed.`);
});

// Inside request handler, check if the route matches the monitored route
if (request.url === monitoredRoute) {
  // Emit the event when the specific route is accessed
  routeEmitter.emit('routeAccessed', monitoredRoute);
}



