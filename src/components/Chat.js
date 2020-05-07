import React from 'react';
import '../styles/styles.scss'

const Chat =()=>(
        <div className='chat'>
             <form>
                    <input className='convo' type='text'></input>
                    <button className='send' type='submit'>Send</button>
                    </form>
        </div>
    )

export default Chat;