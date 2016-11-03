const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const filename = req.url === '/output.geojson' ? 'output.geojson' : 'presentation.html'
  fs.readFile(filename, 'binary', (err, data) => {
    if (err) throw err
    res.writeHead(200)
    res.end(data.toString('utf-8'))
  })
})
server.on('clientError', (err, socket) => {
  if (err) throw err
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})
server.listen(8000, function () {
  console.log('Presentation server running at http://localhost:8000')
})
