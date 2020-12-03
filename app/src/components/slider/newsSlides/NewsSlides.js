import propTypes from 'prop-types';
import React from 'react';

import Image from '../../cockpit/image/Image';

const NewsSlides = ({ news }) => {
  return (
    <a href={news.link.url}>
      <Image image={news.image} />
      <div>{news.link.text}</div>
      <span>{news.text}</span>
    </a>
  );
};

NewsSlides.propTypes = {
  news: propTypes.object,
};

export default NewsSlides;
