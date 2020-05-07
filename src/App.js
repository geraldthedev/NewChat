import React from 'react'
import './styles/styles.scss'
import Info from './components/Info';
import Story from './components/Story';
import Chat from './components/Chat';
import Misc from './components/Misc';







export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
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