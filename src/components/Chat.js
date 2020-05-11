import React from 'react';
import '../styles/styles.scss'

const Chat =(props)=>(
        <div className='chat'>
             <form  action="/" method="post" id="message">
                    <input className='convo' id='mess' type='text'></input>
                    <button className='send' type='submit' value="Send">Send</button>
                    </form>
        </div>

    )

export default Chat;