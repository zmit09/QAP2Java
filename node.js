const http = require('http');

const server = http.createServer((request, response) => {
  const url = request.url;

  switch (url) {
    case '/about':
      console.log('Handling /about route');
      response.end('About Page');
      break;
    case '/contact':
      console.log('Handling /contact route');
      response.end('Contact Page');
      break;
    case '/products':
      console.log('Handling /products route');
      response.end('Products Page');
      break;
    case '/subscribe':
      console.log('Handling /subscribe route');
      response.end('Subscribe Page');
      break;
    default:
      console.log('Handling default route');
      response.end('Welcome to the Home Page');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
