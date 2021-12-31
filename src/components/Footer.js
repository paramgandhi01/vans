import React from "react";
import "./Footer.css";

export default function Header() {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="footer-left">
          <div>
            <h4>CORPORATE INFO</h4>
            <ul>
              <li>CAREERS</li>
              <li>B2B</li>
              <li>PRIVACY POLICY</li>
              <li>TERMS & CONDITION</li>
              <li>COOKIES</li>
            </ul>
          </div>
          <div>
            <h4>CUSTOMER SERVICE</h4>
            <ul>
              <li>FAQ</li>
              <li>CONTACT US</li>
              <li>SIZING CHARTS</li>
            </ul>
          </div>
          <div>
            <h4>FOLLOW VANS</h4>
            <div className="follow">
                <div><i class="fa fa-facebook-f"></i></div>
                <div><i class="fa fa-twitter"></i></div>
                <div><i class="fa fa-instagram"></i></div>
                <div><i class="fa fa-youtube"></i></div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <h4>SIGN UP TO VANS NEWSLETTER:</h4>
          <p>
            SUBSCRIBE TO OUR NEWSLETTER TO GET LATEST NEWS ABOUT OUR PRODUCTS,
            EVENTS AND SALES
          </p>
          <div className="footer-right-email">
            <div className="email">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL ADDRESS"
              ></input>
            </div>
            <div className="email-sub">
              <i class="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-bottom">
        <div className="fb-left">&copy;2016 VANS - ALL RIGHTS RESERVED</div>
        <div className="fb-right">
            <div><i class="fa fa-cc-visa"></i></div>
            <div><i class="fa fa-cc-mastercard"></i></div>
            <div><i class="fa fa-cc-paypal"></i></div>
        </div>
      </div>
    </div>
  );
}
