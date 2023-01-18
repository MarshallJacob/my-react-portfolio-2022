import React from 'react';
import ghicon from './assets/images/github-mark.jpg';
import linkicon from './assets/images/linkdin-icon-1.jpg';
import fbicon from './assets/images/fb-icon.jpg';
// All logos downloaded from: "https://icons8.com/icon/"


function Footer () {
    return (
        <footer className="footer fixed-bottom bg-dark text-white">
            <div id="signature">
                <p>Marshall Shane Jacob | Porfolio 2022</p>
            </div>
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

        </footer>
    )
}

export default Footer;