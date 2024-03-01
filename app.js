// app.js

const http = re quire('http')
 const server = http.createServer((req, res) => {
  console.log(req)
  res.write('welcome to our home you fuck boy page')
  res.end ()
 })
 server.listen(5000)