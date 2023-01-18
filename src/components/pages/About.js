import React from 'react';
import portfolioPicture from "./assets/images/Portfolio-pic.jpg";
import ghicon from './assets/images/github-mark.jpg';
import linkicon from './assets/images/linkdin-icon-1.jpg';
import fbicon from './assets/images/fb-icon.jpg';

// All logos downloaded from: "https://icons8.com/icon/"


export default function About() {
  return (
    <div className="container">
      <section className="aboutSection">
          <h1 class="pageHeader">Marshall Jacob | Portfolio</h1>
        <div className='aboutTop'>
          <h2>
            About Me
          </h2>
          <p className="abt-par">
          I'm a new web developer. I love learning languages and playing music on multiple intruments.
          <br></br>
          Programming has become my new obssesion. I'm currently the Affiliate Marketing Manager for True Leaf  
          <br></br>
          Market. I'm used to working with web developers and have helped design systems and processes for True
          <br></br>
          Leaf production and shippping teams.
          <br></br>
          <br></br>
          
          </p>
          <div id="abt-img">
            <img src={portfolioPicture} alt="portfolioPicture" id="portPic"></img>
          </div>
        </div>
        <div>
          <div className="aboutBtm">
            <h3>Email: marshall.jacob16@icloud.com</h3>
          </div>
          <div className="aboutBtm">
            <h3>Social Media</h3>
            <div className="iconsection">
            <div className="icondiv">
                <a href="https://github.com/MarshallJacob" target="_blank" rel="noopener noreferrer">
                    <img className="socialicon" src={ghicon} alt="Github"/>
                </a>
            </div>
            <div className="icondiv">
                <a href="https://www.linkedin.com/in/marshall-jacob-b5a283232/" target="_blank" rel="noopener noreferrer">
                    <img className="socialicon" src={linkicon} alt="Linkedin"/>
                </a>
            </div>
            <div className="icondiv">
                <a href="https://www.facebook.com/profile.php?id=100005026458341" target="_blank" rel="noopener noreferrer">
                    <img className="socialicon" src={fbicon} alt="Facebook"/>
                </a>
            </div>
        </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lsec">
          {/* <div>
            <img className="aboutIcons" src={htmlPhoto} alt="html logo"></img>
          </div>
          <div>
          <img className="aboutIcons" src={mysqlPhoto} alt="mysql logo"></img>
          </div>
          <div>
          <img className="aboutIcons" src={jsPhoto} alt="javascript logo"></img>
          </div> */}
        </div>
      </section>
    </div>
    
  );
}
