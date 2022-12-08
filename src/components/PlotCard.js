import React from "react";
import './PlotsCard.css';

class PlotCard extends React.Component {
    static defaultProps = {
        PlotNum : 0,
        Facing : 'east',
        Dimension : '54*77',

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
                        <div className="PlotElementBody">east</div>
                        </div>
                    <div className="plotElement"> 
                        <div className="PlotElementHeading">Dimensions</div>
                        <div className="PlotElementBody">42*67</div>
                        </div>
                    <div className="plotElement"> 
                        <div className="PlotElementHeading">Size      </div>
                        <div className="PlotElementBody">344</div>
                        </div>
                    <div className="plotElement"> 
                        <div className="PlotElementHeading">Status      </div>
                        <div className="PlotElementBody"></div>
                        </div>
                  </div>
            </div>
        );
    }
}
export default PlotCard;