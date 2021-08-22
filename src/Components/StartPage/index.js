import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logoImg from "../../images/LOGO.png";
import backgroundImage from "../../images/main-background.jpg";
import aboutSideImage from "../../images/aboutus.png";
import curve from "../../images/Curve.png";
import waves from "../../images/waves.png";
import qualityFood from "../../images/qualityfood.png";
import superTaste from "../../images/supertaste.png";
import quickDeliery from "../../images/quickdelivery.png";
import testimonial from "../../images/testimonial.png";
import * as ROUTES from "../../routes";
import "./startpage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Footer/index.js";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";

function StartPage() {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const register = () => history.push(ROUTES.REGISTER);
  const signin = () => history.push(ROUTES.SIGN_IN);
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  const showSideMenu = () => {
    setShowMenu(!showMenu);
  };
  const reHome = () => history.push(ROUTES.HOME_PAGE);
  return (
    <div className="start-main-page">
      <div className="navbar-section">
        <nav className="navbar-content">
          <span>
            <img src={logoImg} alt="logo" className="start-logo" />
          </span>
          <div className={showMenu ? "show-menu" : "nav-menu"}>
            <button onClick={signin} className="signin-btn-nav">
              Sign In
            </button>
            <button onClick={register} className="register-btn-nav">
              Register
            </button>
          </div>
          <span className="menu-icon">
            <MenuIcon onClick={showSideMenu} />
          </span>
        </nav>
      </div>
      <div className="intro-section">
        <div className="intro-background">
          <img src={backgroundImage} alt="" className="background-image" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          className="intro-section-content"
        >
          <div className="intro-heading-text">
            <h1>Your Favourite Food</h1>
            <h1>Is On The Way!</h1>
          </div>
          <div className="intro-subheading-text">
            <p>Choose your favourite food &</p>
            <p>we get it for you under 60 minutes!!!</p>
          </div>
          <div className="order-button">
            <button onClick={reHome}>Order Now!</button>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-section-content">
          <div className="side-image">
            <img src={aboutSideImage} alt="" />
          </div>
          <div className="about-us">
            <div className="heading">
              <h1>About Us</h1>
              <img src={curve} alt="" className="curve" />
            </div>
            <div data-aos="fade-up" className="about-us-text">
              <p>
                We provide simple ways to eat delicious food in cheap price. We
                have more than hundred variety of food and beverages. All the
                foods and drinks we deliver are fresh and hygenic. And we always
                try to provide 100% coustomer satisfication!
              </p>
              <div className="see-more">
                <p>See More..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-section">
        <div className="background-wave">
          <img src={waves} alt="" />
        </div>
        <div className="services-section-content">
          <div className="heading">
            <h1>Our Services</h1>
            <img src={curve} alt="" className="curve" />
          </div>
          <div className="services-section-frames">
            <div
              data-aos="fade-up"
              data-aos-delay="10"
              className="services-frame"
            >
              <img src={qualityFood} alt="" />
              <h3>Quality Food</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                accumsan tellus. Mauris porttitor fringilla velit, ut tempus
                risus imperdiet eu. Sed eleifend dapibus tempus.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="20"
              className="services-frame"
            >
              <img src={superTaste} alt="" />
              <h3>Super Taste</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                accumsan tellus. Mauris porttitor fringilla velit, ut tempus
                risus imperdiet eu. Sed eleifend dapibus tempus.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="30"
              className="services-frame"
            >
              <img src={quickDeliery} alt="" />
              <h3>Quick Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                accumsan tellus. Mauris porttitor fringilla velit, ut tempus
                risus imperdiet eu. Sed eleifend dapibus tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tesitmonial-section">
        <div className="testimonial-section-content">
          <div className="heading">
            <h1>Testimonials</h1>
            <img src={curve} alt="" className="curve" />
          </div>
          <div className="testimonial-carousel">
            <Carousel
              autoPlay={true}
              centerMode={true}
              centerSlidePercentage={100}
              infiniteLoop={true}
              interval={5000}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
            >
              <div className="carousel-frame">
                <img src={testimonial} alt="" />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  a accumsan tellus. Mauris porttitor fringilla velit, ut tempus
                  risus imperdiet eu. Sed eleifend dapibus tempus."
                </p>
                <div className="person-detail">
                  <h4>Crish Martin</h4>
                  <span>Chief at BigBucket</span>
                </div>
              </div>
              <div className="carousel-frame">
                <img src={testimonial} alt="" />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  a accumsan tellus. Mauris porttitor fringilla velit, ut tempus
                  risus imperdiet eu. Sed eleifend dapibus tempus."
                </p>
                <div className="person-detail">
                  <h4>Crish Martin</h4>
                  <span>Chief at BigBucket</span>
                </div>
              </div>
              <div className="carousel-frame">
                <img src={testimonial} alt="" />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  a accumsan tellus. Mauris porttitor fringilla velit, ut tempus
                  risus imperdiet eu. Sed eleifend dapibus tempus."
                </p>
                <div className="person-detail">
                  <h4>Crish Martin</h4>
                  <span>Chief at BigBucket</span>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default StartPage;
