import styled from '@emotion/styled';

export const Slider = styled.div`
  .slick-slider {
    svg {
      color: ${({ theme, color }) => color || theme.colors.primary};
      width: 40px;
      height: 40px;
    }

    .slick-prev {
      top: -32px;
      left: -12px;
    }

    .slick-next {
      top: -32px;
      right: -12px;
    }
  }
  .slick-list {
    transition: height 0.2s;
  }
`;

export const SliderCounter = styled.p`
  text-align: center;
  width: 100%;
  font-weight: bold;
`;
