import React from 'react';
import './GalleryView.css';
import close from '../assets/close.svg';
import MediaPlayer from './MediaPlayer';


class GalleryView extends React.Component {

    static defaultProps = {
        Images : [],
        handleShowGallery : ()=>{}
    }

    constructor(props) {
        super(props);
        this.state = {
            showPopUp : false,
            currentImageUrl : ''
        }
    }

    helperShowPopUp = () => {
        this.setState({
            showPopUp : !this.state.showPopUp
        })
    }

    setCurrentImageUrl = (url) => {
        this.setState({
            currentImageUrl : url
        })

        this.helperShowPopUp();
    }





    render() {
        const popUp = this.state.showPopUp?  <MediaPlayer helper={this.helperShowPopUp} AutoPopUp ImageLink={this.state.currentImageUrl} ></MediaPlayer> : ''
        const images = this.props.Images.map((imageData)=>{
            return (
                <div className='GalleryViewBodyCard'  onClick={()=>{this.setCurrentImageUrl(imageData.url)}}>
                    <img className='GalleryViewBodyImage'   src={imageData.url}></img>
                    <div   className='GalleryViewBodyImageDescrition'>{imageData.dsc}</div>
                </div>
            )
        })
        return(

            <> 
               {popUp}
               <div className='GalleryClose' onClick={this.props.handleShowGallery}>  <img  className='MediaCloseChild' src={close}></img> </div>
               <div className='GalleryView'>
               <div className='GalleryViewTitle'>-&nbsp; Silpa Raghava Botanica &nbsp;- </div>
               <div className='GalleryViewTitleBody'>Botanica Galleries </div>  
               <div className='GalleryViewBody'>
                   {images}
                </div>

            </div>
            </>
        )
    }
}

export default GalleryView;