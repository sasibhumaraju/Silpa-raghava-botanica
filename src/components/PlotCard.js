import React from "react";
import './PlotsCard.css';

class PlotCard extends React.Component {
    static defaultProps = {
        Available : false,
        PlotNum : 0,
        Facing : 'east',
        Dimension : '0',
        Size:'0'



    }

    render(){
        return(
            <div className="PlotCard">
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
                    <div className="plotElement"> 
                        <div className="PlotElementHeading">Status      </div>
                        <div className="PlotElementBody">`{this.props.Available? "Available" : "Sold"}`</div>
                        </div>
                  </div>
            </div>
        );
    }
}
export default PlotCard;