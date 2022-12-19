import React from 'react';
import './Share.css';
import shareImg from '../assets/share.png';
import facebookImg from '../assets/facebook.svg';
import whatsappImg from '../assets/whatsapp.svg'
import linkedinImg from '../assets/linkedin-in.svg'
import mailImg from '../assets/mail.svg'

class Share extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            activateShare : false,
            showSocialIcons : false

        }
    }

    toggleShare = () => {
        this.setState({
            activateShare : !this.state.activateShare,
            showSocialIcons:true
        })
    }

    render() {

        const shareIconClass = this.state.activateShare? 'socialIconsActive' : 'socialIconsDeactive'
        const socialIcons = this.state.showSocialIcons? (<div className={shareIconClass}>
            <div className='ShareIcon'><a target="_blank" rel="noopener noreferrer" href="whatsapp://send?text=Silpa raghava botanica https://goo.gl/maps/qDbd5pz2hMVm9mwN7" data-action="share/whatsapp/share"><img className='ShareIconBody' src={whatsappImg}></img></a> </div> 
            <div className='ShareIcon'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/sharing/share-offsite/?url=https://goo.gl/maps/qDbd5pz2hMVm9mwN7"><img className='ShareIconBody' src={linkedinImg}></img></a> </div> 
            <div className='ShareIcon'><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//goo.gl/maps/qDbd5pz2hMVm9mwN7"><img className='ShareIconBody' src={facebookImg}></img></a> </div> 
            <div className='ShareIcon'><a href="mailto:?subject=Silpa raghava botanica &body= https://goo.gl/maps/qDbd5pz2hMVm9mwN7"><img className='ShareIconBody' src={mailImg}></img></a> </div> 
           
            </div>) : ''
        return (
            <>
            {socialIcons    }

             <div className="Share">
                <div className='ShareControl' onClick={this.toggleShare} > 
                 <img className="ShareImg" src={shareImg}></img>
                 </div>
             </div>
             </>
        )
    }

}
export default Share;