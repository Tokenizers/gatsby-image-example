import React from 'react';

import Phototheque from '../components/phototheque';
import FixedImage from '../components/fixed-image';
import AdaptativeImage from '../components/adaptative-image';
import Helmet from '../components/helmet';
const IndexPage = () =>
<>
<Helmet />
<Phototheque />
<FixedImage />
<AdaptativeImage />
</>

export default IndexPage;
