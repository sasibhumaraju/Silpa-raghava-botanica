import React from "react";
import compass from '../assets/compass.png'
import './Comapss.css'

class Compass extends React.Component {
         
    render(){
        return(
            <div className="Compass">
                  <div className="N">s</div>
                 <img className="c-img"  src={compass}></img>
                
            </div>
   
        )
    }


}
export default Compass;