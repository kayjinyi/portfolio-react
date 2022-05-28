import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>

      <div id="work">
        <div className="workproject">
          <div className="special">
            <a
              className="card col-5 col-sm-4"
              id="cardsix"
              href="https://fotofotolibrary.herokuapp.com/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Foto</h3>
              </div>
            </a>
          </div>

          <div>
            repo:{" "}
            <a href="https://github.com/kayjinyi/FOTOFOTO" target="_blank">
              https://github.com/kayjinyi/FOTOFOTO
            </a>
          </div>

          <div className="special">
            <a
              className="card"
              id="cardone"
              href="https://kayjinyi.github.io/delicacy/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Delicacy</h3>
              </div>
            </a>
          </div>

          <div>
            repo:{" "}
            <a href="https://github.com/kayjinyi/delicacy" target="_blank">
              https://github.com/kayjinyi/delicacy
            </a>
          </div>

          <div className="special">
            <a
              id="cardtwo"
              className="card"
              href="https://kayjinyi.github.io/weatherReport/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Weather Report</h3>
              </div>
            </a>
          </div>

          <div className="repo">
            repo:{" "}
            <a href="https://github.com/kayjinyi/weatherReport" target="_blank">
              https://github.com/kayjinyi/weatherReport
            </a>
          </div>

          <div className="special">
            <a
              className="card"
              id="cardthree"
              href="https://kayjinyi.github.io/thirdPassword/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Password Generator</h3>
              </div>
            </a>
          </div>
          <div className="repo">
            repo:
            <a href="https://github.com/kayjinyi/thirdPassword" target="_blank">
              https://github.com/kayjinyi/thirdPassword
            </a>
          </div>

          <div className="special">
            <a
              className="card"
              id="cardfour"
              href="https://pure-caverns-20602.herokuapp.com/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Note Taker</h3>
              </div>
            </a>
          </div>

          <div className="repo">
            repo:{" "}
            <a href="https://github.com/kayjinyi/noteTaker" target="_blank">
              https://github.com/kayjinyi/noteTaker
            </a>
          </div>

          <div className="special">
            <a
              className="card"
              id="cardfive"
              href="https://gentle-hollows-22810.herokuapp.com/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Tech Blog</h3>
              </div>
            </a>
          </div>
          <div className="repo">
            repo:{" "}
            <a href="https://github.com/kayjinyi/TechBlog" target="_blank">
              https://github.com/kayjinyi/TechBlog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}