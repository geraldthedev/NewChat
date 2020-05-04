import React from 'react';
import './styles/styles.scss'





export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={}
    }

     
    render(){
        return (
            <div className='container'>
                <div className='content-wrapper'>
                <div className='info'></div>
                <div className='story'></div>
                
                </div>
                <span className='divider'></span>
                <div className="messenger-wrapper">
                    
                    <div className='chat'>
                    <input className='convo' type='text'></input>
                    </div>
                    <div className='misc'>
                        misc box
                    </div>
                    
                </div>
                
            </div>
        )
    }
}