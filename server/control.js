const io = require('socket.io-client'),
socket = io.connect('http://localhost:5000');
       

message=(msg, callback)=>{
socket.emit('chat-message', {message: msg}, callback)
}
        
        
        

  


