import React  from "react";
import './Loader.css'
import logo from '../assets/botanical.png'
class Loader extends React.Component{

    render() {
        return (
            <div className="Loader">
                <div className="loader-wrapper">
                    <div className="loader"></div>
                    <img className="LoaderImage" src={logo}></img>
                    
                </div>
               
            </div>
        )
    }
}
export default Loader