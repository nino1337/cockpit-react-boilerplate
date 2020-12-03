import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import SlickSlider from 'react-slick';

import useContext from '../../hooks/useContext';
import Image from '../cockpit/image/Image';
import NewsSlides from './newsSlides/NewsSlides';
import * as S from './Slider.styles';

const Slider = ({ items, settings = {}, type = 'default' }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const { currentPage } = useContext();
  const color = currentPage.color && currentPage.color.firstColor;
  const defaultSettings = {
    autoplay: false,
    infinite: true,
    beforeChange: (current, next) => setActiveSlide(next + 1),
  };
  const newsSliderSettings = {
    adaptiveHeight: true,
    fade: true,
    nextArrow: <NavigateNext />,
    prevArrow: <NavigateBefore />,
  };

  let sliderSettings = { ...defaultSettings, ...settings };

  if (type === 'news') sliderSettings = { ...sliderSettings, ...newsSliderSettings };
  return (
    <S.Slider color={color}>
      {type === 'news' && (
        <S.SliderCounter>
          {activeSlide}/{items.length}
        </S.SliderCounter>
      )}
      <SlickSlider {...sliderSettings}>
        {items.map((item) => {
          if (type === 'default') return <Image image={item} key={item.meta.title} />;
          if (type === 'news') return <NewsSlides key={item.title} news={item} />;
        })}
      </SlickSlider>
    </S.Slider>
  );
};

Slider.propTypes = {
  items: propTypes.array,
  settings: propTypes.object,
  type: propTypes.string,
};

export default Slider;
