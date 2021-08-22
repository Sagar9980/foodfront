import React from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../routes";
import Footer from "../Footer/index.js";

// importing images

import logoImg from "../../images/LOGO.png";
import imageOne from "../../images/backgroundOne.jpg";
import imageTwo from "../../images/backgroundTwo.jpg";
import imageThree from "../../images/backgroundThree.jpg";
import imageFour from "../../images/backgroundFour.jpg";
import imageFive from "../../images/backgroundFive.jpg";
import imageSix from "../../images/backgroundSix.jpg";
import SignInForm from "./SignInForm";
import "../../css/register-signin.css";

function SignInPage() {
  const history = useHistory();
  const register = () => history.push(ROUTES.REGISTER);
  const rdHome = () => history.push(ROUTES.HOME_PAGE);
  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
  ];
  const randomNum = Math.floor(Math.random() * 6);
  const selectImage = images[randomNum];

  return (
    <div className="register-page">
      <div className="navbar-section">
        <nav className="navbar-content">
          <span>
            <img
              src={logoImg}
              alt="logo"
              onClick={rdHome}
              className="start-logo"
            />
          </span>

          <span>
            <button onClick={register} className="register-btn-nav">
              Register
            </button>
          </span>
        </nav>
      </div>

      <div className="register-main">
        <div className="register-main-box">
          {/* slide show */}
          <div className="register-slideshow">
            <img src={selectImage} alt="" className="imageOne" />
          </div>

          <div className="register-forms">
            <SignInForm />
          </div>
        </div>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}
export default SignInPage;
