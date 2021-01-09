import { graphql, StaticQuery } from "gatsby";
import React from "react";
import View from "./fixed-image.component";

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          fixedImage: file(relativePath: { eq: "fixed-image/image.jpg" }) {
            childImageSharp {
              fixed(quality: 90, width: 500) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }     
        }
      `}
      render={({ fixedImage }) => (
        <View fixedImage={fixedImage} {...props} />
      )}
    />
  );
};
