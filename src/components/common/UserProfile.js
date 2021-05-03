import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import face3 from "../../assets/img/faces/face-3.jpg";
import Userc from '../others-scrap/Userc';
//import { BrowserRouter, NavLink, Link, Route, Router } from "react-router-dom";
import "../../assets/css/Cards.css";

class User extends Component {
  render() {
    return (
      <div>
      
      <div class="cards-list">
        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p>
              <Link to="./lectures/Lecture">Live lecture</Link>
            </p>
          </div>
        </div>
        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p>
              <Link to="./projects/project">Project</Link>
            </p>
          </div>

        </div>
        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p>
              <Link to="./mcqs/mcq">MCQ</Link>
            </p>
          </div>
        </div>

        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p><Link to="/">Study Material</Link>
            </p>
          </div>
        </div>
        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p>
              <Link to="/Sales">Exams</Link>
            </p>
          </div>
        </div>
      </div>

      </div>
      
    )
  }
}

export default User