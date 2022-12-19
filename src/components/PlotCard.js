import React from "react";
import './PlotsCard.css';
import Modal from './ModalForm.js'

class PlotCard extends React.Component {

    static defaultProps = {
        Available : false,
        PlotNum : 0,
        Facing : 'east',
        Dimension : '0',
        Size:'0',
     
    }

    constructor(props) {
        super(props)
        this.state = {
            showModal : false
        }
    }

    openModal = () => {
        this.setState({
            showModal : true
        })
    }

    closeModal = () => {
        this.setState({
            showModal : false
        } )
    }

 

    render(){
        const status = this.props.Available? <div className="available">Available</div>  : <div className="sold">Sold</div>
        const PlotcardClass = this.props.Slidein? "PlotCard-slidein" : "PlotCard-slideout";
        const request = this.props.Available? <div className="requestButton" onClick={this.openModal}>Request price</div> : ''
        const modal = this.state.showModal? <Modal plotNumber={this.props.PlotNum} closeModalFuntion = {this.closeModal} ></Modal> : ''
        return(
            <>
            {modal}
         
            <div className={PlotcardClass}>
                <div className="PlotBody">
                    <div className="plotElement"> 
                        <div className="PlotElementHeading">Plot No</div>
                        <div className="PlotElementBody">{this.props.PlotNum}</div>
                        </div>
                    <div className="plotElement"> 
                        <div className="PlotElementHeading">Facing    </div>
                        <div className="PlotElementBody">{this.props.Facing}</div>
                        </div>
                    <div className="plotElement"> 
                        <div className="PlotElementHeading">Dimensions</div>
                        <div className="PlotElementBody">{this.props.Dimension}</div>
                        </div>
                    <div className="plotElement"> 
                        <div className="PlotElementHeading">Size      </div>
                        <div className="PlotElementBody">{this.props.Size}</div>
                        </div>
                  
                  </div>
                  <div className="plotStausElement"> 
                        <div className="PlotStatusElementHeading">Status      </div>
                        <div className="PlotStatusElementBody">{status}</div>
                  </div>

                  {request}
                 
            </div>
            </> 
        );
    }
}
export default PlotCard;