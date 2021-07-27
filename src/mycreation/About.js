import React from 'react'
import './About.css';
import devloper1 from './pro1.png';
import devloper2 from './pro2.jpg';
import Shiv from './pro3.png';
import rahul from './new.jpg';

export default function About() {
    const myprofile = () => {
        var x = document.getElementById("mymodal");
        x.style.display = "block";
      }
      const myspan = () => {
        var x = document.getElementById("mymodal");
        x.style.display = "none";
    
      }
    return (
        <div>
<div>
        <div className="about" id="abouts">
          <div id="mymodal">
            <span className="close" onClick={myspan}>&times;</span>
            <table>
              <tr>
                <th>name </th><td>badhai rahul</td>
              </tr>
              <tr>
                <th>qualification </th>
                <td> B.sc(computer science)</td>
              </tr>
              <tr>
                <th>age </th>
                <td> 20</td>
              </tr>
              <tr>
                <th>country</th>
                <td>india</td>
              </tr>
              <tr>
                <th>e-mail</th>
                <td style={{ textTransform: 'none' }}>rahulbadhai07@gmail.com</td>
              </tr>
            </table>
          </div>
          <img src={rahul} alt="img" width="25%" height="auto" style={{ borderRadius: "50%" }} />
          <div className="description">
            <h5>About Me</h5>
            <p>rb developers website all about creativity and innovative work in field of technology. hii guys i'm <b>rahul badhai </b>owner of RB DEVLOPER .i'm from pune maharastra .i am working as a web developer and i am a youtuber too.here we create amazing and responsive website for you,at responsive price.our community has educated and experience devloper ! so just CONTACT US</p>
            <div className="btn btn-success" style={{ marginRight: "2%", width: "8rem" }} onClick={myprofile}>View Profile</div>
          </div>
        </div>

        <h2 style={{ marginTop: "5%", fontSize: "1.4rem", width: "100%", textAlign: "left" }}>OUR PROJECTS : <b>(For More Project Visit our youtube channel)</b></h2>
        <div className="projects">
          <div className="card" data-aos="fade-right" style={{ maxWidth: "414px", margin: "1%" }}>
            <img className="card-img-top" src={devloper1} alt="Card-cap" />
            <div className="card-body">
              <h5 className="card-title">social network site(REACH PAL)</h5>
              <p className="card-text" style={{ textTransform: "capitalize" }}>this is our first project,here we try to create social network site like facebok or etc.we devlop this project in php.</p>
              <a href="#" className="btn btn-danger" onClick={()=>{ window.location.href="https://youtu.be/5y27-GXKAwo";}}>Watch Video</a>
            </div>
          </div>
          <div className="card" data-aos="fade-right" style={{ maxWidth: "414px", margin: "1%" }}>
            <img className="card-img-top" src={devloper2} alt="Card-cap" />
            <div className="card-body">
              <h5 className="card-title">the gaming site(funzo)</h5>
              <p className="card-text" style={{ textTransform: "capitalize" }}>this website contain small games,illusion and many more.this website devlop using javascript.credit go of this to our community member lajwith ranawat.</p>
              <a href="#" className="btn btn-danger" onClick={()=>{ window.location.href="https://youtu.be/5Z_9ix5j_iQ";}}>watch video</a>
            </div>
          </div>
          <div className="card" data-aos="fade-right" style={{ maxWidth: "414px", margin: "1%" }}>
            <img className="card-img-top" src={Shiv}  alt="Card-cap" />
            <div className="card-body">
              <h5 className="card-title">RB DEVELOPERS</h5>
              <p className="card-text" style={{ textTransform: "capitalize" }}>this is my personal visitor website. i made this website using react js.if you are intersted for more follow me on social media.</p>
            </div>
          </div>
        </div>
        <div className="knowledge">
          <h2 >we have knowledge about latest and trending programming languages :</h2></div>
        <div className="graph">
          <div className="f1" >
            <b>HTML5</b> <div  style={{ width: "90%", backgroundColor: "#000", height: "1vw", marginTop: "2%", marginLeft: "1%" }}><div style={{ width: "86%", height: "1vw", backgroundColor: "#f38bb3"}}data-aos="fade-right" data-aos-delay="400"></div> </div>
          </div>
          <div className="f1">
            <b>CSS3, BOOTSTRAP</b> <div  style={{ width: "90%", backgroundColor: "#000", height: "1vw", marginTop: "2%", marginLeft: "1%" }}><div style={{ width: "78%", height: "1vw", backgroundColor: "#e227e2" }}data-aos="fade-right" data-aos-delay="500"></div> </div>
          </div>
          {/* <div className="f1">
            <b>BOOTSTRAP</b> <div  style={{ width: "90%", backgroundColor: "#000", height: "1vw", marginTop: "2%", marginLeft: "1%" }}><div style={{ width: "70%", height: "1vw", backgroundColor: "#fa7509" }}data-aos="fade-right" data-aos-delay="700" ></div> </div>
          </div> */}
          <div className="f1">
            <b>REACT</b> <div  style={{ width: "90%", backgroundColor: "#000", height: "1vw", marginTop: "2%", marginLeft: "1%" }}><div style={{ width: "60%", height: "1vw", backgroundColor: "#11fafa" }}data-aos="fade-right" data-aos-delay="600"></div> </div>
          </div>
          <div className="f1">
            <b>JAVASCRIPT</b> <div  style={{ width: "90%", backgroundColor: "#000", height: "1vw", marginTop: "2%", marginLeft: "1%" }}><div style={{ width: "60%", height: "1vw", backgroundColor: "#fa1111" }}data-aos="fade-right" data-aos-delay="700"></div> </div>
          </div>
          <div className="f1">
            <b>PHP</b> <div style={{ width: "90%", backgroundColor: "#000", height: "1vw", marginTop: "2%", marginLeft: "1%" }}><div style={{ width: "50%", height: "1vw", backgroundColor: "#c661f5" }}data-aos="fade-right" data-aos-delay="800"></div> </div>
          </div>
          <div className="f1">
            <b>wordpress</b> <div  style={{ width: "90%", backgroundColor: "#000", height: "1vw", marginTop: "2%", marginLeft: "1%" }}><div style={{ width: "60%", height: "1vw", backgroundColor: "#ffd900" }}data-aos="fade-right" data-aos-delay="900"></div> </div>
          </div>
          <div className="f1" style={{paddingBottom:"2%"}}>
            <b>NODE JS</b> <div style={{ width: "90%", backgroundColor: "#000", height: "1vw", marginTop: "2%", marginLeft: "1%"}}><div style={{ width: "40%", height: "1vw", backgroundColor: "#11fa7a" }}data-aos="fade-right" data-aos-delay="1000"></div> </div>
          </div>
        </div>
      </div>
        </div>
    )
}
