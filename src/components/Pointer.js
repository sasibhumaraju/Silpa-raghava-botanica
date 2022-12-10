import React from "react";
import './Pointer.css';
import hand from '../assets/hand.svg'
class Pointer extends React.Component {


    render(){
        return(
            <div className="Pointer">
                   <div className="hand"><img  src={hand} alt="hand"></img> </div>
                   <div className="body">Tap on plot of your intrest</div>
            </div>
        )
    }
}

export default Pointer ;