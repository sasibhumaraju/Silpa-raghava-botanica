import React from "react";
import map from './assets/map2.jpg'
import ImageMapper from 'react-image-mapper';
import plotsDataServices
 from "./services/plots-data.services";
 import PlotCard from './components/PlotCard.js'
import './PlotsBody.css'
import A from './list.js'
import PrismaZoom from 'react-prismazoom'
import { MapInteractionCSS } from 'react-map-interaction';
import {TransformComponent, TransformWrapper} from 'react-zoom-pan-pinch'

class MyMap extends React.Component {

        static defaultProps ={
            times : true
        }

        constructor(props){
            super(props);
        
            this.state = {
                currentData : {},
                active:false
            }
        }
  

    handleClick=( obj)=>{
       console.log("entered")
        this.setState({currentData : obj,active:true});
        console.log(obj.name);
          }


    render(){
        const card = <PlotCard PlotNum={this.state.currentData.name} Available={this.state.currentData.available} Dimension={this.state.currentData.dimension} Size={this.state.currentData.size} Facing={this.state.currentData.facing}></PlotCard>;
        return(
            <div>
            <div className="container"    > 
            
                <div className="image-container"  >
                {/* <TransformWrapper 
            //   velocityAnimation={{disabled:true}}
              pinch={{disabled:true}}
                                    maxScale={25}
                                    limitToBounds
                                    centerOnInit
                                    
                                    wheel={{touchPadDisabled:true}}
                                    centerZoomedOut>
                      */}
                            {/* <MapInteractionCSS
                           value={this.state.value}
                       
                           onChange={(value) =>{
                            if(value.scale < 5 && this.state.prevScale > value.scale)
                            {
                                // this.setState(
                          
                                //     { value: {...value,translation: { x: 0, y: 0 },scale:1}})
                            }

                           
                           else  if(value.scale === 1)
                             {
                                this.setState(
                          
                                    { value: {...value,translation: { x: 0, y: 0 }}})
                             }
                           
                             else
                            {
                                this.setState(
                          
                                    { value: {...value}})
                            }
                            this.state.prevScale = value.scale;
                           }
                           } 
                             disablePan={false}  maxScale={15} minScale={1} 
         >
        */}
            {/* <TransformComponent
                        > */}
                        <div className="inner-image-container">
                        <PrismaZoom maxZoom={18} >

        <ImageMapper src={map}
                lineWidth={0.00001} 
                width={  1125} 
                imgWidth={12413} 
                map={{ name: "my-map",
                       areas: [
                            ...A.map((v)=>{
                                let c = (v.available)? 'rgba(4, 255, 75, 0.3)' : 'rgba(255, 0, 0, 0.3)'
                            return {...v,preFillColor: c}
                                         })]    }}  
    	onClick={area => this.handleClick(area)}
    />           
     {/* </TransformComponent> */}
   
              {/* </MapInteractionCSS> */}
             
              {/* </TransformWrapper> */}
              </PrismaZoom>
              </div>
              </div>
              
              </div>
          
             ` {this.state.active? card  : null}   `
            </div>
        );
    }
}

export default MyMap;