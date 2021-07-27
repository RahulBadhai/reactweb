import React from 'react'
import Shiv from './download.png';
import nav from './images/nav.png';
import "./Header.css";
import {HashLink as Link} from "react-router-hash-link";
export default function Header() {
    const myfun= ()=>{
        // console.log("hiii this press");
        let x = document.getElementById("mynav");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    }
     const onClick1=()=>{
        window.location.href=('mailto:rahulbadhai07@gmail.com');
    }
    
    return (
        <div className="main-header">
            <div className="logo1">
                <img src={Shiv} alt="logo" />
            </div>
            <div className="heading">
                <h1 data-aos="zoom-in">RB DEVELOPERS</h1>
                <p><b>&nbsp; |&nbsp;&nbsp;f r e e l a n c e  &nbsp; c o m m u n i t y&nbsp;&nbsp;|</b></p>
            </div>
            <div className="nav" id="mynav">
                <Link to="/" className="link"><p onClick={myfun}>Home</p></Link>
                <Link to="about" className="link"><p onClick={myfun}>About</p></Link>
                <Link to="/#services" className="link"><p onClick={myfun}>Service</p></Link>
                 <Link to="#" className="link" id="contact"><p onClick={onClick1}>Contact</p></Link>
                 <p className="icon"> <img src={nav} alt="" onClick={myfun}/></p>
            </div>
        </div>

    )
}
