import React from "react";
import map from './assets/map2.jpg'
import {TransformComponent, TransformWrapper} from 'react-zoom-pan-pinch'
import './PlotsBody.css'

class PlotsBody extends React.Component{

    render(){
        return(
            <div className="Image-Container" >
                <TransformWrapper defaultScale={1}
                  maxScale={25}
                  
                  centerOnInit
                  initialPositionX={2000}
                  centerZoomedOut>
                    <TransformComponent>
            <img   src={map}></img>
            </TransformComponent>
            </TransformWrapper>
            </div>
        );
    }
}
export default PlotsBody;