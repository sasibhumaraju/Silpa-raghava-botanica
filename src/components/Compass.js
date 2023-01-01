import React from "react";
import compass from '../assets/compass.svg'
import './Comapss.css'
import a from '../assets/a.svg'

class Compass extends React.Component {
         
    render(){
        return(
            <div className="Compass">
                  <div className="N">N</div>
                 <img className="c-img"  src={compass}></img>
                
              
                 {/* <path d="m412.565 490.484-143.055-296.62c-2.502-5.187-7.752-8.484-13.511-8.484s-11.009 3.297-13.511 8.484l-143.053 296.62c-2.916 6.047-1.46 13.294 3.566 17.746 5.025 4.45 12.397 5.02 18.046 1.395l134.953-86.603 134.953 86.602c2.482 1.593 5.297 2.376 8.099 2.376 3.575 0 7.131-1.275 9.948-3.771 5.025-4.451 6.481-11.698 3.565-17.745zm-171.565-224.472v130.99l-91.489 58.71zm30 130.99v-130.99l91.489 189.7z" fill="#ffffff" data-original="#000000" style="" ></path> */}
                
            </div>
   
        )
    }


}
export default Compass;