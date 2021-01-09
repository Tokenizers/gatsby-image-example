import React from "react";
import "./phototheque.style.scss";
import Img from "gatsby-image";

const createPhoto = (photo) => (
  <div key={photo.id} className="column is-half">
    <Img fluid={photo.childImageSharp.fluid} />
  </div>
);

export default ({ photos = [] }) => {
  console.warn(photos);
  return (
    <section className="section mt-5">
      <div className="container">
      <h1 className="has-text-centered mb-3">Fluid Images</h1>
        <div className="columns is-multiline">{photos.map(createPhoto)}</div>
      </div>
    </section>
  );
};
