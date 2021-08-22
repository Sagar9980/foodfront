import React from "react";
import logoImg from "../../images/LOGO.png";
import "./footer.css";
import { ReactComponent as MessageIcon } from "../../images/carbon_email.svg";
import { ReactComponent as PhoneIcon } from "../../images/bx_bxs-phone.svg";
import { ReactComponent as LocationIcon } from "../../images/dashicons_location.svg";
import { ReactComponent as FacebookIcon } from "../../images/akar-icons_facebook-fill.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../images/Vector.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div className="cl-one">
          <img src={logoImg} alt="" />
          <p>Home</p>
          <p>Food & Drinks</p>
          <p>About</p>
          <p>Contacts</p>
          <p>Blogs</p>
        </div>
        <div className="cl-two">
          <h4>Get Help?</h4>
          <p>How To Order?</p>
          <p>FAQs</p>
          <p>Availabe Areas</p>
          <h4>Legal</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div className="cl-three">
          <h4>Contacts</h4>
          <div className="email">
            <MessageIcon fill="white" /> <span>example@gmail.com</span>
          </div>
          <div className="contact">
            <PhoneIcon fill="white" />
            <span>
              5803456,
              <br /> 58065721
            </span>
          </div>
          <div className="location">
            <LocationIcon fill="white" />
            <span>
              xyx street, New Ham City, <br />
              Tronto
            </span>
          </div>
        </div>
        <div className="cl-four">
          <h4>Social Handles</h4>
          <div className="facebook">
            <FacebookIcon fill="white" /> <span>Facebook</span>
          </div>
          <div className="instagram">
            <InstagramIcon fill="white" /> <span>Instagram</span>
          </div>
          <div className="youtube">
            <YoutubeIcon fill="white" /> <span>Youtube</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
