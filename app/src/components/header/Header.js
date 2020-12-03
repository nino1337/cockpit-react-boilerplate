import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import LocalizationContext from '../../localization/context';
import Image from '../cockpit/image/Image';
import * as S from './Header.styles';

const Header = () => {
  const { siteSettings } = useContext(LocalizationContext);

  return (
    <S.Header>
      <Link to="/">
        <Image image={siteSettings.headerLogo} />
        React
      </Link>
    </S.Header>
  );
};

export default Header;
