import React from 'react';
import './MediaPlayer.css';
import ReactPlayer from 'react-player';
import MediaPopUp from './MediaPopUp'

class MediaPlayer extends React.Component {
    static defaultPlops = {
        VideoLink : '',
        ImageLink : '',
        MediaIconLink : '',
        MediaDescrition : '',
        AutoPopUp : false,
        helper : ()=>{}
    }

    constructor (props) {
        super(props);
        this.state = {
            showMedia : this.props.AutoPopUp,
        }
    }
    
    handlePopUp = () => {

     
        this.setState({
            showMedia : !this.state.showMedia,
        })
        this.props.helper();
    }

    render() {
        // const mediaPopUp = <MediaPopUp handlePopUp = {this.handlePopUp} VideoLink = {this.props.VideoLink} ImageLink = {this.props.ImageLink}></MediaPopUp>;
        const popUp = this.state.showMedia? <MediaPopUp handlePopUp = {this.handlePopUp} VideoLink = {this.props.VideoLink} ImageLink = {this.props.ImageLink}></MediaPopUp> : '';
        const body = this.props.AutoPopUp? 
                     popUp : 
                      <>
                    {popUp}
                    <div id="s" className='MediaPlayer' onClick={this.handlePopUp}> 
                        <div className='MediaIcon'>
                        <img src={this.props.MediaIconLink}></img>
                        </div>
                        <div className='MediaDescrition'>
                        {this.props.MediaDescrition}
                        </div>
                    </div>
                    </>;

        return(
           body
        )
    }
}
export default MediaPlayer