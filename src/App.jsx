/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Usman Akinyemi",
  title: "Linux Lover",
  email: "usmanakinyemi202@gmail.com",
  gitHub: "Unique-Usman",
  instagram: "",
  linkedIn: "usman-akinyemi-1689711b3/",
  medium: "",
  twitter: "usman_akinyemi",
  youTube: "usmanakinyemi6054",
  hashNode: "UniqueUsman",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const educationDetails = [
  {
    name: "Plaksha University",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Computer Science and Artificial Intelligence",
    year: "2022-2026",
  },
  {
    name: "University of People",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    year: "2021-2026",
  },
  // Add more educational institutions as needed
  {
    name: "ALX Africa",
    degree: "Diploma",
    fieldOfStudy: "Software Engineering",
    year: "2022-2024",
  },
];

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <Education institutions={educationDetails}/>
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
