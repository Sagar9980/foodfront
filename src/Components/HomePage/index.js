import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import images
import logoImg from "../../images/LOGO.png";
import profileLogo from "../../images/Profile.png";
import cartLogo from "../../images/shopping-cart.png";
import dropdown from "../../images/dropdown.png";
import bannerOne from "../../images/banner1.jpg";
import bannerTwo from "../../images/banner2.jpg";
import "../../css/homepage.css";

function Home() {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        {/* navbarsection */}
        <div className="navbar-section">
          <div className="navbar-content">
            <div className="homepage-logo">
              <img src={logoImg} alt="logo" className="start-logo" />
            </div>
            <div className="navbar-menu-items">
              <span>Home</span>
              <span>Food & Drinks</span>
              <span>Blogs</span>
              <span>Services</span>
            </div>
            <div className="navbar-right">
              <div>
                <img src={profileLogo} alt="" className="profile-logo" />
              </div>
              <div className="shopping-cart">
                <p className="cart-amount">3</p>
                <img src={cartLogo} alt="" className="shopping-cart-logo" />
              </div>
              <div>
                <img src={dropdown} alt="" className="dropdown-options" />
              </div>
            </div>
          </div>
        </div>
        {/* bannersection */}
        <div className="homepage-banner-section">
          <Carousel
            autoPlay={true}
            centerMode={true}
            centerSlidePercentage={100}
            infiniteLoop={true}
            interval={5000}
            showArrows={true}
            showStatus={false}
            showThumbs={false}
          >
            <div className="banner-one-container">
              <img src={bannerOne} alt="" />
            </div>
            <div className="banner-two-container">
              <img src={bannerTwo} alt="" />
            </div>
          </Carousel>
        </div>
        {/* productcategories */}
        <div className="product-categories-section">
          <div className="product-categories-content">
            <div className="categories-heading-container">
              <h1 className="categories-heading">Categories</h1>
              <hr className="horizontal-line" />
            </div>
            <div className="categories-box">
              <div className="categories-box-one">
                <img></img>
              </div>
              <div className="categories-box-two"></div>
            </div>
          </div>
        </div>
        {/* hotpics */}
      </div>
    </div>
  );
}

export default Home;
// https://preview.themeforest.net/item/optivit-healthy-food-delivery-wordpress-theme/full_screen_preview/31404687?_ga=2.254092616.1124610990.1620446612-520980363.1613118664&_gac=1.14005957.1620446612.Cj0KCQjwytOEBhD5ARIsANnRjVhV91big6Jbr4ZrcWDbSFkpHVM71-ayDqDChD4UtZ0bD1xJRWbgo9UaAi3LEALw_wcB
