// import React from "react";
// import map from './assets/map2.jpg'
// import ImageMapper from 'react-image-mapper';
// import {TransformComponent, TransformWrapper} from 'react-zoom-pan-pinch'
// import './PlotsBody.css'

// class PlotsBody extends React.Component{

//    constructor(props){
//     super(props);
//     this.state = {
//         scale : 1,
//         plotnum : 0,

//         data : [{ sold:false, name: "1", shape: "poly", coords: [0,1000,1000,0,6433,6079,3160,4158], preFillColor: 'rgba(4, 255, 75, 0.5)', },
               
//       ],

//         currentindex:0
//     }
    
//    }

   
//    handleClick=( obj,num, event)=>{
//     this.setState({currentindex : num});
//     console.log(num)
// }
// run=(  event)=>{
// this.setState({});

// }
//     render(){
//         return(
//             <div >
//                 <div className=".Image-Container" >
//                     <TransformWrapper 
//                                     maxScale={25}
//                                     limitToBounds
//                                     centerOnInit
                                   
//                                     centerZoomedOut>
//                         <TransformComponent>
//                             <ImageMapper onImageClick={this.run} onClick={this.handleClick} strokeColor={'black'} lineWidth={1} src={map} width={window.innerWidth} imgWidth={21413} map={{
                   
//                    name: "my-map",
//                    areas: [
//                       ...this.state.data
                  
//                    ]
//                 }} />
//                 </TransformComponent>
//                     </TransformWrapper>
//                 </div>
//                 {/* <div className="Plot-Container"></div>
//                 <div className="Plots-logo"></div> */}
//             </div>
//         );
//     }
// }
// export default PlotsBody;



import React from "react";
import map from './assets/map2.jpg'
import ImageMapper from 'react-image-mapper';
import plotsDataServices
 from "./services/plots-data.services";
 import PlotCard from './components/PlotCard.js'
import './PlotsBody.css'
import A from './list.js'
import { MapInteractionCSS } from 'react-map-interaction';
import {TransformComponent, TransformWrapper} from 'react-zoom-pan-pinch'
class MyMap extends React.Component{

constructor(props){
    super(props);
  
    this.state = {
        prevScale : 1,
        value: {
            scale: 1,
            translation: { x: 0, y: 0 },
          },
        scale : 1,
        plotnum : 0,
         currentData : {},
        currentindex:0
    }
}
  

    handleClick=( obj)=>{
        alert('clicked')
        this.setState({currentData : obj});
        console.log(obj.name);
          }

            run=(  event)=>{
                alert('clicked')
                // this.setState({});

            }


soldit = () =>{
    let s = this.state
    let i = this.state.currentindex
  
 let newstate = this.state.data.map((v)=>{
        return (v.name == `${i + 1}`)?  {...v, sold : true,preFillColor: 'rgba(0, 0, 0, 0.5)' } : v;
       })
    this.setState(c => ({data : [...newstate]}))
   
   
}
 
    render(){

        // A.map((v)=>{
        //     plotsDataServices.addPlotsData(v);
        // })

        // const v = {
        //     'availability':true
        // }
        // plotsDataServices.addPlotsData(v);


        var w = window.innerWidth
        console.log(w)
        console.log(this.state.scale)
        return(
            <div>
              
           
                     
       
                <div className="container"  > 
                <div className="image-container"  style={{   transform: `scale(${this.state.scale})` }} >
                {/* <TransformWrapper 
              velocityAnimation={{disabled:true}}
              pinch={{disabled:true}}
                                    maxScale={25}
                                    limitToBounds
                                    centerOnInit
                                    
    
                                    centerZoomedOut>
                        <TransformComponent
                        > */}
                            <MapInteractionCSS
                           value={this.state.value}
                       
                           onChange={(value) =>{
                            if(this.state.prevScale > value.scale)
                            {
                                this.setState(
                          
                                    { value: {...value,translation: { x: 0, y: 0 },scale:1}})
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
                {/* <ImageMapper 
                active
                onImageClick={this.run}
                onClick={this.handleClick} 
                strokeColor={'black'} 
                lineWidth={0.0001} 
                src={map}    
                width={window.innerWidth > 1125?  window.innerWidth : 1125} 
                imgWidth={12413} 
                map={{ name: "my-map",
                       areas: [
                                // ...this.state.data
                                ...A.map((v)=>{
                                return {...v,preFillColor: 'rgba(4, 255, 75, 0.25)'}
                                })]    }}   />    */}


<ImageMapper src={map}
          width={window.innerWidth > 1125?  window.innerWidth : 1125} 
         imgWidth={12413} 
          map={{ name: "my-map",
                       areas: [
                                // ...this.state.data
                                ...A.map((v)=>{
                                return {...v,preFillColor: 'rgba(4, 255, 75, 0.25)'}
                                })]    }}  
    	// onLoad={() => this.load()}
    	onClick={area => this.handleClick(area)}
    	// onMouseEnter={area => this.enterArea(area)}
    	// onMouseLeave={area => this.leaveArea(area)}
    	// onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
    	// onImageClick={evt => this.clickedOutside(evt)}
    	// onImageMouseMove={evt => this.moveOnImage(evt)}
    />           
              </MapInteractionCSS>
              {/* </TransformComponent>
              </TransformWrapper> */}
              </div>
              </div>
          
              <PlotCard PlotNum={this.state.currentData.name}></PlotCard>
             

         {/* <div className="plot-model">
            <h1>{this.state.data[this.state.currentindex].name}</h1>
           <h1> {this.state.data[this.state.currentindex].sold? 'sold' : 'notsold' }</h1>
            <button onClick={this.soldit} >sold it</button>
              </div> */}
            </div>
        );
    }
}

export default MyMap;