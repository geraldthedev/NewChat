const http = require('http'),
      express = require('express'),
      app = express(),
      server = http.createServer(app),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      socket  = require('socket.io'),
      io = socket(server),
      PORT = process.env.PORT || 5000,
      INDEX = 'index.html';
     
      

app.get('/',(req, res) => res.sendFile(INDEX, { root: __dirname }))
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
server.listen(PORT, ()=> console.log(`Listening on ${PORT}`))

io.on('connection', (socket)=>{
    socket.emit('works', { now: 'hello'})
    console.log(`Client connected`);
    socket.on('other event', (data)=>{
        console.log(data)
    })
    socket.on('disconnect', ()=>{
        console.log(`Client disconnected`)
    })
})


module.exports = app;