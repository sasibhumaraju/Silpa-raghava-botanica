import React from "react";
import './Pointer.css'
class Pointer extends React.Component {


    render(){
        return(
            <div className="Pointer">
                   <div className="hand"></div>
                   <div className="body">Tap on plot of your intrest</div>
            </div>
        )
    }
}

export default Pointer ;