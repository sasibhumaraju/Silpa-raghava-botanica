import React from 'react';
import './MobileScreen.css';
import computer from '../assets/computer.svg'

class MobileScreen extends React.Component {

    render() {
        return (
            <div className='MobileScreen'>
             
      <div className='desktopSuggetion'>
      <div className='desktopSuggetionHeading' >
              We respect your intrest. But we find desktop gives much better experience than a mobile.
              </div>
          <img className='desktopSuggetionIcon' src={computer}></img>
        
        <div className='desktopSuggetionDescription'>
       Open in Desktop
      </div>
      </div>

                </div>
        );
    }
}

export default MobileScreen;