// eslint-disable-next-line import/prefer-default-export
export const mapGraphResultToList = (graphqlMarkers) =>
  graphqlMarkers.edges.map((el) => el.node);

export const EXTRA_SMALL_MOBILE_QUERY = `(max-width: 350px)`;
export const MOBILE_QUERY = `(max-width: 767px)`;
export const DESKTOP_QUERY = `(min-width: 768px)`;
