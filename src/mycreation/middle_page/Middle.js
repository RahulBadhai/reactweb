import React from 'react'
import "./Middle.css"
import devloper from './LOGO/devloper1.jpg';
import money from './LOGO/money2.jpg';
import about from './LOGO/about.jpg';
import frame from './LOGO/Frame.jpg';
import frame1 from './LOGO/Frame 1.png';
import frame2 from './LOGO/Frame 2.png';

import { Link } from 'react-router-dom';
export default function Middle() {
  return (
    <div className="first" id="fist">
      <div className="poster">
        <img data-aos="fade-right" src={devloper} alt="img" height="auto" />
        <div className="desc" data-aos="fade-left">
          <h1>want to grow your buisness...?</h1>
          <h1>get your buisness online! </h1>
          <h1>BUILD WEBSITE FOR YOUR BUISNESS/PASSION<br /></h1>
        </div>
      </div><br />

      <div className="info">
        <div className="card mb-2"  style={{ maxwidth: "500px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={money} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "2em", padding: "0.5%" }}>Explore Your Buisness/Passion </h5>
                <p className="card-text" style={{ fontSize: "1.5em", padding: "0.5%", color: "#000", textTransform: "capitalize" }}data-aos="fade-right">in this online world! get your self online.whether you choose to create website to share your passion ,inform people about your buisness,sell your products,or any other reason there are no  boundaries to what can you do.so why are you waiting for?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3"  style={{ maxwidth: "500px" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "2em", padding: "0.5%" }}>WELCOME TO RB DEVLIOERS!</h5>
                <p className="card-text" style={{ fontSize: "1.5em", padding: "0.5%", textTransform: "capitalize" }}data-aos="fade-right">hii guys,here if you want to build website,so you comes at right place. here we build website for your buisness/passion.our community used latest technology and framework for building the websites.we provide variety of services to our customers at reasonable price.if you want our services <b>just contact me on g-mail</b>  </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={about} className="img-fluid rounded-start" alt="..." style={{ backgroundSize: "contain" }} />
            </div>
          </div>
        </div>
      </div>
      {/* this is image slider */}
      <div className="img_slider" style={{width:"100%"}}>
        <div className="text-slider" style={{width:"100%",marginLeft:"1%"}}>
          <h1 style={{textTransform:"uppercase",fontWeight:"bolder"}}>here are some examples of our <b style={{color:"tomato"}}>ui designs</b>!!</h1>
          <p style={{textTransform:"capitalize",fontSize:"1rem"}}>for more designs you can follow me on <b style={{letterSpacing:"5px",color:"tomato",textTransform:"uppercase"}}>instagram!</b> </p>
        </div>
        <div className="design" style={{width:"100%",marginTop:"1%"}}>
        <img src={frame} alt="design1" width="50%"  data-aos="fade-right" data-aos-delay="100" style={{marginLeft:"10%"}}/>
        <img src={frame1} alt="design1" width="50%" height="auto" data-aos="fade-right"  style={{position:"relative",marginTop:"-18%",marginLeft:"25%"}}/>
        <img src={frame2} alt="design1" width="50%" height="auto" data-aos="fade-right" style={{position:"relative",marginTop:"-18%",marginLeft:"35%"}}/>

        </div>
      </div>
      {/* //this is Servic section */}

      <div id="services" style={{ marginTop: "5%" }}>
        <h1 style={{ width: "100%", marginTop: "2%", background: "aquamarine", padding: "1%",fontWeight:"bolder"}}>OUR SERVICE :</h1>
        <div className="service">
          <div className="card text-white bg-danger mb-3" style={{ maxWidth: "25rem", height: "18rem" }} data-aos="fade-left" data-aos-delay="400">
            <div className="card-header">Student Project</div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>college project with documentation</h5>
              <p className="card-text">we accept student college projects about web building.we also provide them documentation of project according to college instruction at responsible price.<br /><b>PRICE : start-from 1000RS/-</b><br /><b style={{ color: "black" }}>(price will change according to customization)</b> </p>
            </div>
          </div>
          <div className="card text-white bg-primary mb-3" style={{ maxWidth: "25rem", height: "18rem" }} data-aos="fade-left" data-aos-delay="500">
            <div className="card-header">build website</div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>build website for your buisness or passion</h5>
              <p className="card-text">we create  static as well as dynamic website for you.our charges for website are given below.<br /><br /><b>for static website(contain 4 pages) :</b><br /> <ul><li>it contain 4 pages (home,about,contact,services etc)</li><li>responsive design</li><li>social meadia integration</li><li>seo optimized</li><li>PRICE:start-from 1500RS (WITH HOSTING)</li></ul><br /><b>for dynamic website(contain 4-5 pages) :</b><br /> <ul><li>content upload / e-commerce functionality</li><li>responsive design</li><li>social meadia integration</li><li>seo optimized</li><li>logo creation</li><li>PRICE: start-from 4000RS (WITH HOSTING)</li></ul><b style={{ color: "black" }}>(price will change according to customization)</b></p>
            </div>
          </div>
          <div className="card text-white bg-success mb-3" style={{ maxWidth: "25rem", height: "18rem" }} data-aos="fade-left" data-aos-delay="600">
            <div className="card-header" >Other services</div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>services:</h5>
              <p className="card-text">our community do other work on fiverr like below :<b><ul> <li>youtube thumbnail creation(FROM 300RS/)</li><li>youtube video editing(FROM 700-1500RS/)</li></ul></b></p>
            </div>
          </div >
        </div>
      </div>
    </div>
  )
}

