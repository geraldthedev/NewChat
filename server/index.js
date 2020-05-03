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
     
      

app.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.listen(PORT, ()=> console.log(`Listening on ${PORT}`))

io.on('connection', (socket)=>{
    console.log(`Client connected`);
    socket.on('disconnect', ()=>{
        console.log(`Client disconnected`)
    })
})


module.exports = app;