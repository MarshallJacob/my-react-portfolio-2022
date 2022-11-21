import React from 'react';
import portfolioPicture from "./assets/images/Portfolio-pic.jpg";

export default function About() {
  return (
    <div>
      <section>
        <div>
          <h1 class="pageHeader">Welcome!</h1>
          <p class="main-pars">
          I'm new to web development, but I'm loving it so far. I love learning languages and playing music 
          <br></br>
          so programming as been a perfect fit for me. Everything I learn just gets me excited for more!
          </p>
          <div id="abt-img">
            <img src={portfolioPicture} alt="portfolioPicture" id="portPic"></img>

          </div>
        </div>
      </section>
      {/* <section>
        <div>

        </div>
        <div>
          <h2>My hobbies</h2>
          <div>
            <h4>The Gully Bandits</h4>
          </div>
          <div>
            <h4>Learning Languages!</h4>
          </div>
        </div>
      </section> */}
    </div>
    
  );
}
