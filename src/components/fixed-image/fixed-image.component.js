import React from "react";
import "./fixed-image.style.scss";
import Img from "gatsby-image";

const createFixedImage = (fixedImage) => (
  <div className="column has-text-centered">
    <Img fixed={fixedImage.childImageSharp.fixed} />
  </div>
);

export default ({ fixedImage = null }) => {
  return (
    <section className="section mt-5">
      <div className="container">
        <h1 className="has-text-centered mb-3">Fixed Image</h1>
        {fixedImage && (
          <div className="columns">
            {createFixedImage(fixedImage)}
          </div>
        )}
      </div>
    </section>
  );
};
