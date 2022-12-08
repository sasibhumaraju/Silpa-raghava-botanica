import React from "react";
import './PlotsCard.css';

class PlotCard extends React.Component {

    render(){
        return(
            <div className="PlotCard">
                <div className="PlotBody">
                    <div className="plotElement"> 
                        <div className="PlotElementHeading">Plot No</div>
                        <div className="PlotElementBody">141</div>
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