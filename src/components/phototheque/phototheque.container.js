import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { mapGraphResultToList } from "../../utils/graphquery.utils";
import View from "./phototheque.component";

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          photos: allFile(
            filter: { relativeDirectory: { eq: "phototheque" } }
          ) {
            edges {
              node {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1080) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      `}
      render={({ photos }) => (
        <View photos={mapGraphResultToList(photos)} {...props} />
      )}
    />
  );
};
