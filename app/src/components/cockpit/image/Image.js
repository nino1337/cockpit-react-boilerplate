import propTypes from 'prop-types';
import React from 'react';

import * as S from './Image.styles';

const Image = ({ isCockpitImage = true, image, height, width }) => (
  <S.Image
    height={height}
    width={width}
    alt={image.meta && image.meta.title}
    src={isCockpitImage ? process.env.REACT_APP_COCKPIT_BASE_URL + image.path : image.path}
  />
);

Image.propTypes = {
  image: propTypes.object,
  height: propTypes.string,
  width: propTypes.string,
  isCockpitImage: propTypes.bool,
};

export default Image;
