import React from "react";
import compass from '../assets/compass.svg'
import './Comapss.css'

class Compass extends React.Component {
         
    render(){
        return(
            <div className="Compass">
                  <div className="N">N</div>
                 <img className="c-img"  src={compass}></img>
                
            </div>
   
        )
    }


}
export default Compass;