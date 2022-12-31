import React from 'react';
import locationIcon from '../assets/location.svg';
import './Location.css'



class Location extends React.Component {

    openLocation = () => {
        var myWindow =  window.open('https://www.google.com/maps/d/u/0/viewer?mid=1Nsbh9TE-wz1N1OyQYNqNRTney1S6bas&ll=17.038119136330906%2C78.51705023422448&z=12','',`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=1000,height=500,left=180,top=120`)
      
       
    }

    render() {
        return (
            <>
            <div className='Location'>
                <div className='LocationIcon' onClick={this.openLocation} >
                    <img src={locationIcon}></img>
                </div>
                <div className='LocationDescrition'>
                    Location
                </div>
            </div>
            </>
        )
    }
}

export default Location;