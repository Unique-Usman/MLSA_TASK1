/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "clearit",
    description:
      "Built the command line too that can be use to remove files which is not useful. It differs from other deleting tools as it provide you the interactive opportunity to check the content of a file before deleting the file",
    url: "https://github.com/Unique-Usman/clearit/blob/main/clearit",
  },
  {
    title: "ConnectToLearn",
    description:
      "Work with another teammate on ConnectToLearn which is a platform matches completed courses and interests to propose relevant projects. It suggests ideas based on course performance and curiosity, connecting users with experts for validation and execution guidance.(It is mainly for my college)",
    url: "https://github.com/Unique-Usman/ConnectToLearn",
  },
  {
    title: "OpenSource Contribution (LLVM Compiler)",
    description:
      "I solved an existing problem with the Extract API in Clang. The challenge involved generating accurate JSON files based on specified arguments. I successfully resolved inconsistencies in the attributes for Objective-C properties from the source code. Furthermore, I updated the tests to ensure precise JSON file generation, enhancing the Extract API functionality within Clang.",
    url: "https://github.com/Unique-Usman/llvm-project/commit/32b53cf9d0c8c0e01ce5b0e7d5c717202a98cdf5",
  },
  {
    title: "DesignIT New Website",
    description: "I am currently on creating the frontend portion of the new DesignIT website.",
    url: "https://designit1.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
