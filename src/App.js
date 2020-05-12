import React, {Component} from 'react'
import './styles/styles.scss'
import Info from './components/Info';
import Story from './components/Story';
import Chat from './components/Chat';
import Misc from './components/Misc';
import socketIOClient from "socket.io-client";

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
        endpoint: 'http://localhost:5000'
        }
        
    }


    componentDidMount(){
        const {endpoint} = this.state;  
        const socket = socketIOClient(endpoint)
    }
     
    render(){
        return (
            <div className='container'>
                <div className='content-wrapper'>
               <Info />
               <Story />
                
                </div>
                
                <div className="messenger-wrapper">
                    
                    <Chat />
                
                    <Misc />
                    
                </div>

                
                
            </div>
        )
    }
}