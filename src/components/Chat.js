import React from 'react';
import '../styles/styles.scss'
import socketIOClient from "socket.io-client";
const socket = 'http://localhost:5000';

const submit =()=>{
    const socket = socketIOClient(this.state.endpoint)
    socket.on('chat-message', (data)=>{
        
    })
}

const Chat =(props)=>(
        <div className='chat'>
             <form id="message">
                    <input className='convo' id='mess' type='text'></input>
                    <button className='send' type='submit' value="Send">Send</button>
                    </form>
        </div>

    )

export default Chat;