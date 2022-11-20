import React from 'react';
// import img from '';
import resume from './assets/images/Marshall_Jacob_Resume_photo.jpg'

export default function Resume() {
  return (
    <div>
      <h1 class="pageHeader">Resume</h1>
      <div id="res-img">
        <img src={resume} alt="Resume"></img>
      </div>
      <div id="res-dl">
        <a href={require("./assets/images/Marshall_Jacob_Resume.pdf")} download="MarshallJacobResume">Download Resume</a>
      </div>
    </div>
  );
}
