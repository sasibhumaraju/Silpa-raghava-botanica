import React from "react";
import map from './assets/map2.jpg'
import ImageMapperWeb from 'react-image-mapper';
import ImageMapperMob from 'react-img-mapper';
import {isMobile} from 'react-device-detect';
import plotsDataServices
 from "./services/plots-data.services";
 import PlotCard from './components/PlotCard.js'
import './PlotsBody.css'
import A from './list.js'
import PrismaZoom from 'react-prismazoom'
import Compass from "./components/Compass";
import Pointer from "./components/Pointer";
import close from './assets/close.svg';




class MyMap extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                currentData : {},
                active:false,
                showCard:false
            }
        }
  
    closecard = () => {
            this.setState({
                active : false
            })}
    
    handleClick = ( obj )=>{
        this.setState({currentData : obj,active:true,showCard:true});
          }


    render(){
        const closeButton =  <div className="close" onClick={this.closecard}><img className="close-body" src={close}></img></div>
        const card =<> <PlotCard PlotNum={this.state.currentData.name} Available={this.state.currentData.available} Dimension={this.state.currentData.dimension} Size={this.state.currentData.size} Facing={this.state.currentData.facing} Slidein={this.state.active}></PlotCard> {this.state.active? closeButton : ''} </>;
        const mapper = isMobile?  <ImageMapperMob src={map} lineWidth={0.00001}   width={1125} imgWidth={12413} map={{ name: "my-map",areas: [...A.map((v)=>{let c = (v.available)? 'rgba(50, 205, 50, 0.25)' : 'rgba(220, 20, 60, 0.25)'; return {...v,fillColor: c}       })]    }}  onClick={area => this.handleClick(area)}/>   :         <ImageMapperWeb src={map} lineWidth={0.00001}   width={1125} imgWidth={12413} map={{ name: "my-map",areas: [...A.map((v)=>{let c = (v.available)? 'rgba(50, 205, 50, 0.25)' : 'rgba(220, 20, 60, 0.25)'; return {...v,preFillColor: c}       })]    }}  onClick={area => this.handleClick(area)}/> ;
        
        return(
            <div className="PlotsBody">
                <div className="container"    > 
                    <div className="image-container"  >
                        <div className="inner-image-container">
                            <PrismaZoom maxZoom={18} >{mapper}  </PrismaZoom>
                        </div>
                        <Compass></Compass>
                        <Pointer></Pointer>
                        {this.state.showCard? card : ''} 
                    </div>
                </div>
            </div>
        );
    }
}

export default MyMap;