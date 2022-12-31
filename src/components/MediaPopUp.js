import React from 'react';
import './MediaPopUp.css';
import ReactPlayer from 'react-player';
import ReactDOM from 'react-dom/client';
import close from '../assets/close.svg'

class MediaPopUp extends React.Component {
    static defaultProps = {
        VideoLink : 'null',
        ImageLink : 'null'
        // handlePopUp : ()=>{}
    }

    handlePopUp = () =>{
        console.log("clicked")
        this.props.handlePopUp()
    }

    render() {

        const mediaBody = (this.props.VideoLink.localeCompare('null') == 0)?  <img className='MediaImage' src={this.props.ImageLink}></img> : <ReactPlayer height={500} width={889} url={this.props.VideoLink}></ReactPlayer> 

        return(
            <>
            <div className='MediaPopUp'> 
            <div className='MediaClose' onClick={this.handlePopUp}>
                 <img  className='MediaCloseChild' src={close}></img>
              </div>
              <div className='MediaPopUpChild'>
               {mediaBody}
               </div>
             </div>
             </>
        )
    }
}
export default MediaPopUp;