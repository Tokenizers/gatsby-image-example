import { graphql, StaticQuery } from "gatsby";
import React from "react";
import View from "./adaptative-image.component";
import { MOBILE_QUERY, DESKTOP_QUERY } from "../../utils/graphquery.utils";

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          adaptativeMobile: file(
            relativePath: { eq: "adaptative-image/image-mobile.jpg" }
          ) {
            childImageSharp {
              fixed(quality: 90, width: 300) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          adaptativeDesktop: file(
            relativePath: { eq: "adaptative-image/image.jpg" }
          ) {
            childImageSharp {
              fixed(quality: 90, width: 500) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      `}
      render={({ adaptativeMobile, adaptativeDesktop }) => {
        
        // we build a new object that gather each media associated with the right image.
        const adaptativeImage = [
          {
            ...adaptativeMobile.childImageSharp.fixed,
            media: MOBILE_QUERY,
          },
          {
            ...adaptativeDesktop.childImageSharp.fixed,
            media: DESKTOP_QUERY,
          },
        ];

        return <View adaptativeImage={adaptativeImage} {...props} />;
      }}
    />
  );
};
