import React, {Component} from 'react'
import './styles/styles.scss'
import socketIOClient from "socket.io-client";


export default class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
        story: false,    
        endpoint: 'http://localhost:5000',
        messages: []

        
        }
        this.chatSubmit = this.chatSubmit.bind(this)
        
    }
    

    componentDidMount(){
        const {endpoint} = this.state;  
        const socket = socketIOClient(endpoint)
        socket.on('new islander', data => this.setState({
            story: data
        }))

     
    }
    chatSubmit=async(event)=>{
        event.preventDefault()
        const {endpoint} = this.state;  
        const socket = socketIOClient(endpoint)
        socket.send('chat-message', data => this.setState({
            messages: data
        }))
    }
    
     
    render(){
        return (
            <div className='container'>
                <div className='content-wrapper'>
                <div className='info'>
            <div id='chatBox'>
            {this.state.messages}
            </div>
        </div>
               <div className='story' id='story'>
            {this.state.story}
        </div>
                
                </div>
                
                <div className="messenger-wrapper">
                    
                <div className='chat'>
             <form onSubmit={this.chatSubmit} id="message">
                    <input className='convo' id='mess' type='text'></input>
                    <button className='send' type='submit'>Send</button>
                    </form>
        </div>
                
        <div className='misc'>
            Misc
        </div>
                    
                </div>

                
                
            </div>
        )
    }
}
