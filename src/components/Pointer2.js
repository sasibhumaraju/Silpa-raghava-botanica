import React from "react";
import './Pointer2.css';
import hand from '../assets/hand.svg'
class Pointer2 extends React.Component {


    render(){
        return(
            <div className="Pointer2">
                   <div className="hand2"><img  src={hand} alt="hand"></img> </div>
                   <div className="body2">Tap on plot of your intrest</div>
            </div>
        )
    }
}

export default Pointer2 ;