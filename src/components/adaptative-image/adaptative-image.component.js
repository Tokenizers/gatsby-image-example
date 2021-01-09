import React from "react";
import "./adaptative-image.style.scss";
import Img from "gatsby-image";

const createAdaptativeImage = (adaptativeImage) => (
  <div className="column has-text-centered">
    <Img fixed={adaptativeImage} />
  </div>
);

export default ({ adaptativeImage = null }) => {
  return (
    <section className="section mt-5">
      <div className="container">
        <h1 className="has-text-centered mb-3">Adaptative Image</h1>
        {adaptativeImage && (
          <div className="columns">
            {createAdaptativeImage(adaptativeImage)}
          </div>
        )}
      </div>
    </section>
  );
};
