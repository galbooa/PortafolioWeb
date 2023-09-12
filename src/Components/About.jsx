/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/fondoc.png";

const imageAltText = "background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Soy una persona apasionada por el aprendizaje constante y la resolución de problemas, con un enfoque en lograr metas profesionales en mi carrera en el diseño de UX/UI, donde puedo combinar mi creatividad y habilidades técnicas para crear experiencias digitales significativas y atractivas.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Diseño web",
  "Experiencia de usuario",
  "Diseño inclusivo",
  "Interfaces de usuario móvil",
  "Diagramas de flujo",
  "Metodologías ágiles",
  "Azure Devops",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  ' "El diseño no es solo cómo se ve y cómo se siente. El diseño es cómo funciona." - Steve Jobs';

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "3.5rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "0.5rem",
        }}
      >
        <h2>Sobre Mí</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;