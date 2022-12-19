import React from 'react';
import './Share.css';
import shareImg from '../assets/share.png';
import facebookImg from '../assets/facebook.svg';
import twitterImg from '../assets/twitter.svg';

class Share extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            activateShare : false
        }
    }

    toggleShare = () => {
        this.setState({
            activateShare : !this.state.activateShare
        })
    }

    render() {
        const shareIconClass = this.state.activateShare? 'socialIconsActive' : 'socialIconsDeactive'
        return (
             <div className="Share">
                 
                 <div className={shareIconClass}>
                    <img className='shareIcon' src={facebookImg}></img>
                    <img className='shareIcon' src={twitterImg}></img>
                 </div>
               

                <div className='ShareControl' onClick={this.toggleShare} > <img className="ShareImg" src={shareImg}></img></div>
             </div>
        )
    }

}
export default Share;