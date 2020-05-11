const express = require('express'),
      path = require('path'),
      app = express(),
      server = require('http').Server(app),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      io = require('socket.io')(server),
      PORT = process.env.PORT || 5000,
      router = express.Router(),
      INDEX = '../src/public/index.html';
     
      

app.get('*',(req, res) => res.sendFile(path.resolve('public/index.html')))
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
//app.use('/', router)



io.on('connection', (socket)=>{
  
const islander = require('../server/models/islander'),
    Player = new islander;
    console.log('new user')
    console.log(Player)

  socket.emit('new islander', `Welcome Islander. You have ${Player.item.name} and ${Player.ability.name}`)

  socket.on('chat-message', ChatData=>{
      socket.broadcast.emit('chat-message', ChatData)
  })

})

server.listen(PORT, (err)=>{
  if(err) throw err;
   console.log(`Listening on ${PORT}`)
  })

