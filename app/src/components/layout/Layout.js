import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';

import LocalizationContext from '../../localization/context';
import CockpitComponents from '../cockpitComponents/CockpitComponents';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import * as S from './Layout.styles';

const Layout = () => {
  const { currentPage, siteSettings } = useContext(LocalizationContext);

  return (
    <>
      <Helmet>
        <title>{`${siteSettings.name} ${
          currentPage.metaTitle && '| ' + currentPage.metaTitle
        }`}</title>
        <meta
          name="description"
          content={currentPage.metaDescription || siteSettings.description}
        />
        {!currentPage.indexable && <meta name="robots" content="noindex" />}
        <link
          rel="icon"
          href={process.env.REACT_APP_COCKPIT_BASE_URL + siteSettings.favIcon.path}
        />
      </Helmet>
      <Header />
      <Navigation />
      <S.Main>
        <Container>
          {currentPage.components && <CockpitComponents components={currentPage.components} />}
        </Container>
      </S.Main>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
