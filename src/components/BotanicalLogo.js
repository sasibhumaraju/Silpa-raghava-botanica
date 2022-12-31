import react from 'react';
import './BotanicalLogo.css';
import logo from '../assets/botanical.png'
import React from 'react';

class BotanicalLogo extends React.Component {
    render () {
        return (
            <div className='BotanicalLogo'>
                <img className='BotanicalLogoImage' src={logo}></img>
            </div>
        )
    }
}

export default BotanicalLogo;