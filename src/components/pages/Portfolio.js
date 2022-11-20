import React from 'react';
import myJam from './assets/images/thats-my-jam.jpg';
import teamTrack from './assets/images/team-tracker.jpg';
import noteTaker from './assets/images/note-taker.jpg';
import traveLog from './assets/images/traveLog.jpg';
import regex from './assets/images/regex.jpg';


export default function Portfolio() {
    return (
    <div class="container">
        <div>
          <h1 class="pageHeader">Sample projects</h1>
        </div>
        <div class="row">
          <div  className="card col">
          <img class="card-img-top" src={myJam} alt="thats-my-jam website"></img>
            <div class="card-body">
            <h5 class="card-title">Thats-My-Jam</h5>
            <p class="card-text">An application that allows the user to find the lyrics to a song. Is it really your jam if you don't know the words?</p>
            <a href="https://github.com/jibba6/Thats-My-Jam" class="btn btn-primary">GitHub Page</a>
            <a href="https://jibba6.github.io/Thats-My-Jam/" class="btn btn-primary">Website</a>
            </div>
          </div>
          <div  className="card col">
          <img class="card-img-top" src={teamTrack} alt="Team Tracker website"></img>
            <div class="card-body">
            <h5 class="card-title">Team Tracker</h5>
            <p class="card-text">This application will allow you to keep tracking of any of your team members that you work with. Really handy with a big team!</p>
            <a href="https://github.com/MarshallJacob/TEAMTRACKER-AUGUST-2022" class="btn btn-primary">GitHub Page</a>
            </div>
          </div>
          <div  className="card col">
          <img class="card-img-top" src={noteTaker} alt="thats-my-jam website"></img>
            <div class="card-body">
            <h5 class="card-title">Note Taker</h5>
            <p class="card-text">Ever needed an great way to keep track of those golden ideas without losing track of them? Then the Note Taker app is the perfect solution for you!</p>
            <a href="https://github.com/jibba6/Thats-My-Jam" class="btn btn-primary">GitHub Page</a>
            <a href="https://jibba6.github.io/Thats-My-Jam/" class="btn btn-primary">Website</a>
            </div>
          </div>
        </div>
          <div class="row">
          <div  className="card col">
          <img class="card-img-top" src={traveLog} alt="thats-my-jam website"></img>
            <div class="card-body">
            <h5 class="card-title">traveLog</h5>
            <p class="card-text">This application will allow the user to keep track of all of the awesome places that they've been. That's not all! They will also be able to track all of the wonderfull places that they want to visit!</p>
            <a href="https://github.com/kylelarsenlarsen/Trip-Tracker" class="btn btn-primary">GitHub Page</a>
            <a href=" https://serene-sierra-18598.herokuapp.com" class="btn btn-primary">Website</a>
            </div>
          </div>
          <div  className="card col">
          <img class="card-img-top" src={regex} alt="thats-my-jam website"></img>
            <div class="card-body">
            <h5 class="card-title">Regex</h5>
            <p class="card-text">Here's a regex expanation that I made describing how I would handle email vaildation in a later project</p>
            <a href="https://gist.github.com/MarshallJacob/6750908decc991753add85171676ab62" class="btn btn-primary">GitHub Page</a>
            </div>
          </div>
          <div  className="card col">
          <img class="card-img-top" src={myJam} alt="thats-my-jam website"></img>
            <div class="card-body">
            <h5 class="card-title">Thats-My-Jam</h5>
            <p class="card-text">An application that allows the user to find the lyrics to a song. Is it really your jam if you don't know the words?</p>
            <a href="https://github.com/jibba6/Thats-My-Jam" class="btn btn-primary">GitHub Page</a>
            <a href="https://jibba6.github.io/Thats-My-Jam/" class="btn btn-primary">Website</a>
            </div>
          </div>
        </div>
    </div>
  );
}
  