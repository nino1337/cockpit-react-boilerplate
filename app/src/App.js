import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import { collections, singletons } from './axios';
import Layout from './components/layout/Layout';
import getCurrentPageData from './helper/getCurrentPageData';
import LocalizationContext from './localization/context';
import getTranslationsFromPage from './localization/getTranslationsFromPage';
import globalStyle from './styles/globalStyles';
import theme from './styles/theme';

function MyApp() {
  const [previewData, setPreviewData] = useState(null);
  const [data, setData] = useState(null);
  const [localizedData, setLocalizedData] = useState(null);
  const router = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const { data: pages } = await collections.get('/get/pages');
      const { data: siteSettings } = await singletons.get('/get/siteSettings');

      if (router.pathname === '/preview') {
        const handlePreviewData = (event) => {
          setPreviewData({ currentPage: event.data.entry, pages, siteSettings });
        };
        window.addEventListener('message', handlePreviewData);

        return () => {
          window.removeEventListener('message', handlePreviewData);
        };
      } else {
        setData({ pages, siteSettings });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const navigatorLanguage = navigator.language || navigator.userLanguage;
      const currentPage = getCurrentPageData(data.pages, router, data.siteSettings);

      if (!currentPage) {
        history.push('/');
      } else {
        setLocalizedData(getTranslationsFromPage(navigatorLanguage, { ...data, currentPage }));
      }
    }

    // keep app state in sync with current page
  }, [data, router]);

  return (
    <>
      {localizedData && (
        <ThemeProvider theme={theme(localizedData.siteSettings)}>
          <Global styles={globalStyle} />
          <LocalizationContext.Provider value={localizedData}>
            <Layout />
          </LocalizationContext.Provider>
        </ThemeProvider>
      )}
      {previewData && (
        <ThemeProvider theme={theme(previewData.siteSettings)}>
          <Global styles={globalStyle} />
          <LocalizationContext.Provider value={previewData}>
            <Layout />
          </LocalizationContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
