import React from "react";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="head">
      <h1>FEATURED PRODUCTS</h1>
      <div className="check">
        <div>
          <p>MEN</p>
          <input type="checkbox" checked></input>
        </div>
        <div>
          <p>WOMEN</p>
          <input type="checkbox"></input>
        </div>
        <div>
          <p>UNISEX</p>
          <input type="checkbox"></input>
        </div>
      </div>
      <div className="products">
        <div className="vans1">
          <img src="./images/vans1.jpg"></img>
          <p>
            MONO OLD <br />
            SKOOL SHOES
          </p>
          <hr className="hr1"/>
          <h5>$55.99</h5>
        </div>
        <div className="vans2">
          {" "}
          <img src="./images/vans2.jpg"></img>
          <p>
            OLD <br />
            SKOOL SHOES
          </p>

          <hr className="hr1" />
          <h5>$65.99</h5>
        </div>
        <div className="vans3">
          {" "}
          <img src="./images/vans3.jpg"></img>
          <p>
            COATED OLD SKOOL <br />
            REISSUE DX SHOES
          </p>
          <hr  className="hr1" />
          <h5>$65.99</h5>
        </div>
        <div className="vans4">
          {" "}
          <img src="./images/vans4.png"></img>
          <p>
            VARSITY SUEDE
            <br />
            OLD SKOOL SHOES
          </p>
          <hr   className="hr1"/>
          <h5>$65.99</h5>
        </div>
        <div className="vans5">
          {" "}
          <img src="./images/vans1.jpg"></img>
          <p>
            SK9-HI
            <br />
            MTE SHOES
          </p>
          <hr   className="hr1"/>
          <h5>$55.99</h5>
        </div>
      </div>
    </div>
  );
}
