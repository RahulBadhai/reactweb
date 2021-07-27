import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import {
//     Link
//   } from "react-router-dom";
import './Footer.css';
import facebook from './LOGO/facebook.png';
import youtube from './LOGO/youtube.png';
import instagram from './LOGO/instagram.png';
import github from './LOGO/github2.png';
import fiverr from './LOGO/fiverr.png';
import linkedin from './LOGO/linkedin.png'; 
export default function Footer() {
  return (
    <footer className="foot" id="footid">
      <div className="lefts">
        <p style={{color:"white",fontSize:"1.4rem"}}>copyright @RB_DEVLOPERS</p>
      </div>
      <div className="logo">
        
        <p><img src={facebook} alt="facebook" width="35vw" height="35vh" onClick={()=>{ window.location.href="https://m.facebook.com/profile.php?id=100022671857690&ref=wizard";}}/></p>
        <p><img src={instagram} alt="facebook" width="35vw" height="35vh" onClick={()=>{ window.location.href="https://www.instagram.com/badhai.rahul/";}}/></p>
        <p><img src={youtube} alt="facebook" width="35vw" height="35vh" onClick={()=>{ window.location.href="https://www.youtube.com/channel/UCIK3MxyYBgnnRgEQr_wq3ww";}}/></p>
        <p><img src={github} alt="twitter" width="35vw" height="35vh" onClick={()=>{ window.location.href="https://github.com/RahulBadhai";}}/></p>
        <p><img src={fiverr} alt="fiverr" width="35vw" height="35vh" onClick={()=>{ window.location.href="https://www.fiverr.com/rahul_badhai?up_rollout=true";}}/></p>
        <p><img src={linkedin} alt="fiverr" width="35vw" height="35vh" onClick={()=>{ window.location.href="https://www.linkedin.com/mwlite/in/rahul-badhai-182171213";}}/></p>
      </div>
    </footer>

  )
}

