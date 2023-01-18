import React from 'react';
// import img from '';
import resume from './assets/images/Marshall_Jacob_Resume_photo.jpg'

export default function Resume() {
  return (
    <div className="container aboutSection">
      <h1 className="pageHeader">Resume</h1>
    <div className='aboutTop'>
      <div>
        <img src={resume} id="res-img" alt="Resume"></img>
      </div>
    </div>
      <div className="aboutTop" id="res-dl">
        <a href={require("./assets/images/Marshall_Jacob_Resume.pdf")} download="MarshallJacobResume">Download Resume</a>
      </div>
    </div>
  );
}
