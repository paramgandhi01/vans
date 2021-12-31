import React from "react";
import "./Featured2.css";

export default function Featured2() {
  return (
    <div className="products2">
      <div className="big">
        <div className="big-1">
          <div className="big1-top">
            <div className="date">21/09/2016</div>
            <div className="cart">
              <i class="fa fa-heart"></i>02
            </div>
          </div>
          <img src="./images/fall16.jpg"></img>
        </div>
        <div className="big-2">
          <div className="big2-top">
            <div className="date">21/09/2016</div>
            <div className="cart">
              <i class="fa fa-heart"></i>12
            </div>
          </div>
          <img src="./images/patmoore.jpg"></img>
        </div>
        <div className="big-3">
          <div className="big3-top">
            <div className="date">21/09/2016</div>
            <div className="cart">
              <i class="fa fa-heart"></i>07
            </div>
          </div>
          <img src="./images/riot.jpg"></img>
        </div>
      </div>
      <div className="small">
        <div className="small-1">
          <h3>
            UNIFORM <br /> FRIENDLY <br /> SHOES
          </h3>

          <hr className="hr2" />

          <button className="small-btn">
            DISCOVER MORE<i class="fa fa-chevron-right"></i>
          </button>
        </div>
        <div className="small-2">
          <img src="./images/download.png"></img>
        </div>
      </div>
    </div>
  );
}
