import React from "react";
import { BrowserRouter, NavLink, Link, Route, Router } from "react-router-dom";
//import "../../assets/css/Cards.css";
import '../../assets/css/bootstrap.min.css'
const Cards = () => {
  return (
    <div>
      <div class="cards-list">
        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p>
              <Link to="./journey/journey">Learning Journey</Link>
            </p>
          </div>
        </div>
        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p>
              <Link to="./courses/course">Courses</Link>
            </p>
          </div>
        </div>
        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p>
              <Link to="./batches/batch">Batches</Link>
            </p>
          </div>
        </div>
      </div>

      <hr />

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
              <Link to="./project/project">Project</Link>
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
            <p><Link to="./qna/qna">QNA</Link>
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

      <hr />

      <div class="cards-list">
        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
          <p><Link to="/">Categories</Link></p>
          </div>
        </div>
      </div>

      <hr />

      <div class="cards-list">
        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p>
              <Link to="./pdf/pdf">PDFs</Link>
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

        <div class="card 1">
          <div class="card_image"> </div>
          <div class="card_title">
            <p>
              <Link to="./videos/videos">Videos</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
