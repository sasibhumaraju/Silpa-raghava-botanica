import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.css';
import gallery from '../assets/gallery.svg';
import GalleryView from './GalleryView'

class Gallery extends React.Component {
  
    static defaultPlops = {
        GalleryIconLink : '',
        GalleryDescrition : ''
    }

    constructor (props) {
        super(props);
        this.state = {
            showGallery : false
        }
    }
    
    handleShowGallery = () => {
        this.setState({
            showGallery : !this.state.showGallery
        })
    }

    render() {

        const images = [
            {
              url: 'https://picsum.photos/id/1018/1000/600/',
              dsc: 'Walk through',
            },
            {
             url:'https://picsum.photos/id/1015/1000/600/',
             dsc: 'English dub',
            },
            {
              url: 'https://picsum.photos/id/1018/1000/600/',
              dsc: 'Walk through',
            },
            {
             url:'https://picsum.photos/id/1015/1000/600/',
             dsc: 'English dub',
            },
            {
              url: 'https://picsum.photos/id/1018/1000/600/',
              dsc: 'Walk through',
            },
            {
             url:'https://picsum.photos/id/1015/1000/600/',
             dsc: 'English dub',
            },
            {
              url: 'https://picsum.photos/id/1018/1000/600/',
              dsc: 'Walk through',
            },
            {
             url:'https://picsum.photos/id/1015/1000/600/',
             dsc: 'English dub',
            },
            {
              url: 'https://picsum.photos/id/1018/1000/600/',
              dsc: 'Walk through',
            },
            {
             url:'https://picsum.photos/id/1015/1000/600/',
             dsc: 'English dub',
            },
            {
              url: 'https://picsum.photos/id/1018/1000/600/',
              dsc: 'Walk through',
            },
            {
             url:'https://picsum.photos/id/1015/1000/600/',
             dsc: 'English dub',
            },
            {
              url: 'https://picsum.photos/id/1018/1000/600/',
              dsc: 'Walk through',
            },
            {
             url:'https://picsum.photos/id/1015/1000/600/',
             dsc: 'English dub',
            },
            {
              url: 'https://picsum.photos/id/1018/1000/600/',
              dsc: 'Walk through',
            },
            {
             url:'https://picsum.photos/id/1015/1000/600/',
             dsc: 'English dub',
            },
          ];
        const PopUp = this.state.showGallery? <GalleryView Images = {images}  handleShowGallery = {this.handleShowGallery}></GalleryView>:'';
        return(
            <>
            {PopUp}
            <div className='Gallery' onClick={this.handleShowGallery}> 
                <div className='GalleryIcon'>
                  <img src={gallery}></img>
                </div>
                <div className='GalleryDescrition'>
                  Gallery
                </div>
             </div>
             </>
        )
    }
}
export default Gallery;