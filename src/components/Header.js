import React, { useState } from "react";
import "./Header.css";
import "./Header1.js";

export default function Header() {
  const [state, setstate] = useState({ check: false });
  const changeFun = () => {
    setstate({
      ...state,
      check: !state.check,
    });
  };

  return (
    <div className="bg">
      <div className="bg-overlay">
        <div className="nav">
          <div className="nav-l">
            <img src="./images/vans.png"></img>
          </div>
          <div className="nav-m">
            <div className="navm-l">
              <input type="text" placeholder="SEARCH..." />
            </div>
            <div className="navm-r">
              {state.check ? (
                <ul className="navlist">
                  <li>
                    REST OF EUROPE<i className="fa fa-arrow-down"></i>
                  </li>
                  <li>
                    STORE LOCATOR<i className="fa fa-location-arrow"></i>
                  </li>
                  <li>
                    HELP<i className="fa fa-question-circle"></i>
                  </li>
                  <li>
                    LOGIN<i className="fa fa-lock"></i>
                  </li>
                  <li>
                    REGISTER<i className="fa fa-user"></i>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div onClick={changeFun} className="toggle">
              <i className="fa fa-bars"></i>
            </div>
          </div>
          <div className="nav-r">
            <i className="fa fa-shopping-cart"></i>
          </div>
        </div>
        <div className="nav2">
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>NEW ARRIVALS</li>
            <li>SKATE</li>
            <li>LATEST</li>
            <li>#HOUSEOFVANS</li>
          </ul>
        </div>
        <div className="desc">
          <h1>VANS IS OLD SKOOL</h1>
          <p>
            INTRODUCED IN 1977, THE STYLE #36, NOW KNOWN AS <br /> OLD SKOOL,
            WAS THE FIRST VANS SHOE TO <br /> FEATURE THE ICONIC SIDESTRIPE
          </p>
          <button className="discover">DISCOVER NOW</button>
        </div>
      </div>
    </div>
  );
}
