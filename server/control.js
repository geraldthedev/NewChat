const io = require('socket.io-client'),
socket = io.connect('http://localhost:5000');
       

message=(msg, callback)=>{
const makeMess =()=> ({msg})

handleEvent(makeMess)
.then(()=> callback(null))
.catch(callback)
}
 
return{
    message
}
        
        

  


