import React from 'react';
import MediaPlayer from './MediaPlayer';
import './BottomNav.css'
import yIcon from '../assets/youtube.svg';
import Gallery from './Gallery';
import Location  from './Location';

class BottomNav extends React.Component {
    render() {
        return(
        <div className='BottomNav'>
           {/* <MediaPlayer ImageLink={'https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} MediaIconLink={yIcon} MediaDescrition={'Walk through'}></MediaPlayer>
              <MediaPlayer VideoLink={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} MediaIconLink={yIcon} MediaDescrition={'English Dub'}></MediaPlayer> */}
              <Location></Location>
              <Gallery></Gallery>
              {/* <MediaPlayer VideoLink={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} MediaIconLink={yIcon} MediaDescrition={'Route Map'}></MediaPlayer>
              <MediaPlayer VideoLink={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} MediaIconLink={yIcon} MediaDescrition={'Site Map'}></MediaPlayer> */}
        </div>);
    }
}

export default BottomNav;