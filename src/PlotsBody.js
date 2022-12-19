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
import PlotsData from './models/PlotsData.js'
import PrismaZoom from 'react-prismazoom'
import Compass from "./components/Compass";
import Pointer from "./components/Pointer";
import close from './assets/close.svg';
import Draw from './services/draw.js';
import Loader from './components/Loader'
import Logo from './components/BotanicalLogo'
import { Observable, timer } from "rxjs";
import Share from './components/Share.js'
import { StreamBuilder, Snapshot, ConnectionState } from "react-stream-builder";
import { async } from "@firebase/util";
import { doc } from "firebase/firestore";





class MyMap extends React.Component {
   
      
    // Write data in 'Output.txt' .


        constructor(props){
          
            super(props);
            this.state = {
                currentData : {},
                active:false,
                showCard:false,
                formPlotNum:0,
                plotsMapListData : [],
                updated: true
            }
        }

            componentDidMount() {
               this.getPlotsData();
            }

            getPlotsData = async () => {
                 var data = [];
                 var temp = [];
                 var temp2 = [];        
                 let plots = await sessionStorage.getItem("plots") || null;
        //   console.log('llllllllll,',plots)
                if(plots === null || plots === 'undefined') {
                  
                    try{
                        data = await plotsDataServices.getAllPlotsData();
                        temp = data.docs.map((doc) => ({...doc.data()}))
                        temp2 = temp.map((doc)=>doc.plots)
    
                        sessionStorage.setItem("plots", JSON.stringify(temp2[0]));
                        this.setState({
                            plotsMapListData : temp2[0],
                            updated : false
                        })
                    }
                    catch (err) {
                           console.log("check your internet connetion")
                    }
                    
                  
                }      
                else 
                {
                    console.log('llllllll',"yers")
                    this.setState({
                        plotsMapListData : JSON.parse(plots),
                        updated : false
                    })

                
                }
            }


    closecard = () => {
            this.setState({
                active : false
            })}
    
    handleClick = ( obj )=>{
        this.setState({currentData : obj,active:true,showCard:true});
          }

    handleOnImageClick = (event) => {
        // console.log("----->"+event.nativeEvent.offsetX)
        // console.log("----->"+event.nativeEvent.offsetY)
        Draw.addPoint(event.nativeEvent.offsetX,event.nativeEvent.offsetY)
    }

    downloadfile = () => {
        const fileData = JSON.stringify(Draw.allDrawing);
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "user-info.json";
        link.href = url;
        link.click();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        Draw.addDrawing(this.state.formPlotNum,Draw.points);
    }

    handleFormChange = (event) => {
       this.setState({
        formPlotNum : event.target.value
       });

    }

putToDatabase = () => {
   
        //  plotsDataServices.addPlotsData(A);
   
}


    render(){
        const closeButton =  <div className="close" onClick={this.closecard}><img className="close-body" src={close}></img></div>
        const card =<> <PlotCard PlotNum={this.state.currentData.name} Available={this.state.currentData.available} Dimension={this.state.currentData.dimension} Size={this.state.currentData.size} Facing={this.state.currentData.facing} Slidein={this.state.active}></PlotCard> {this.state.active? closeButton : ''} </>;
        const mapper =  <ImageMapperWeb  src={map} lineWidth={0.00001}  width={1125}  imgWidth={12413} map={{   name: "my-map",areas: [...A.plots.map((v)=>{ if(isNaN(v.name)){ return {...v,preFillColor: 'rgba(255,215,0,0.05)',  } }  let c = (v.available)? 'rgba(50, 205, 50, 0.25)' : 'rgba(220, 20, 60, 0.25)'; return {...v,preFillColor: c,  }       })]    }}  onClick={area => this.handleClick(area)} onImageClick={event=>{this.handleOnImageClick(event)}}/> ;
        let k =  <div className="submitdrawing">
        <form onSubmit={this.handleFormSubmit}>
               <input type="text" 
                      value={this.state.formPlotNum}
                      onChange={this.handleFormChange} 
               ></input>
               <button type="submit"> submit</button>
        </form>
        <button onClick={this.downloadfile}>download</button>
    </div>
        return(

       
          (this.state.plotsMapListData.length == 0)?
           <Loader></Loader> 
           :





            // <button onClick={this.putToDatabase}> Update to databse </button>
         
            <div className="PlotsBody">
                <div className="container"    > 
                    <div className="image-container"  >
                        <div className="inner-image-container">
                            <PrismaZoom maxZoom={18} > 
                            {mapper}
                            {/* <ImageMapperWeb  src={map} lineWidth={0.00001}  width={1125}  imgWidth={12413} map={{   name: "my-map",areas: [...A.plots .map((v)=>{ if(isNaN(v.name)){ return {...v,preFillColor: 'rgba(255,215,0,0.05)',  } }  let c = (v.available)? 'rgba(50, 205, 50, 0.25)' : 'rgba(220, 20, 60, 0.25)'; return {...v,preFillColor: c,  }       })]    }}  onClick={area => this.handleClick(area)} onImageClick={event=>{this.handleOnImageClick(event)}}/> ; */}
                              </PrismaZoom>
                        </div>
                           {/* <div className="none"> {k}   {mapper}</div>   */}
                    
                         <Compass></Compass>
                         <Pointer></Pointer>
                         <Logo></Logo>
                         {/* <Share></Share> */}
                         {this.state.showCard? card : ''} 
                     </div>
                 </div>
             </div>
        );
    }
}

export default MyMap;