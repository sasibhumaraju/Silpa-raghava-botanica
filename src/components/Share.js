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
            <div className='ShareIcon'><a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?text=Silpa raghava botanica https://www.google.com/maps/d/viewer?mid=1Nsbh9TE-wz1N1OyQYNqNRTney1S6bas&ll=17.05935828494674%2C78.52150072705707&z=12" data-action="share/whatsapp/share"><img className='ShareIconBody' src={whatsappImg}></img></a> </div> 
            <div className='ShareIcon'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.google.com/maps/d/viewer?mid=1Nsbh9TE-wz1N1OyQYNqNRTney1S6bas&ll=17.05935828494674%2C78.52150072705707&z=12"><img className='ShareIconBody' src={linkedinImg}></img></a> </div> 
            <div className='ShareIcon'><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https://www.google.com/maps/d/viewer?mid=1Nsbh9TE-wz1N1OyQYNqNRTney1S6bas&ll=17.05935828494674%2C78.52150072705707&z=12"><img className='ShareIconBody' src={facebookImg}></img></a> </div> 
            <div className='ShareIcon'><a href="mailto:?subject=Silpa raghava botanica &body= https://www.google.com/maps/d/viewer?mid=1Nsbh9TE-wz1N1OyQYNqNRTney1S6bas&ll=17.05935828494674%2C78.52150072705707&z=12"><img className='ShareIconBody' src={mailImg}></img></a> </div> 
           
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