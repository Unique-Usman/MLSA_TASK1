/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/unique.png";

const imageAltText = "Cmatrix from my personal terminal";

const Home = ({ name, title }) => {
  return (
    <section
      id="home"
      className="min-height"
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <img className="background" src={image} alt="" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "17rem",
          flexDirection: "column",
          color:"white",
        }}
      >
        <h1 style={{ textAlign: "center"}}>{name}</h1>
        <h2 style={{ textAlign: "center"}}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img
          src={arrowSvg}
          style={{ height: "3rem", width: "3rem", animation: "1s ease-out 0s 1 slideIn" }}
          alt={imageAltText}
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;