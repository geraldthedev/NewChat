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
                
                <div className="messenger-wrapper">
                    
                    <div className='chat'>
                        <form>
                    <input className='convo' type='text'></input>
                    <button className='send' type='submit'>Send</button>
                    </form>
                    </div>
                
                    <div className='misc'>
                        misc box
                    </div>
                    
                </div>
                
            </div>
        )
    }
}