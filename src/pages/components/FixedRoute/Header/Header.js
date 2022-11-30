import React from 'react';
import './Header.css';
import videoBg from '../../FixedRoute/../../../Assets/video.mp4'

const Header = () => {
     return (
          <div className='main'>
               <video src={videoBg} autoPlay loop muted></video>
               <div className='content'>
                    <h1>California</h1>
                    <a href="">explore</a>
               </div>
          </div>
     );
};

export default Header;