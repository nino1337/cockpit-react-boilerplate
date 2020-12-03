const getCurrentPageData = (pages, router, siteSettings) => {
  const pathname = router.pathname;
  const page = pathname.split('/').filter((item) => item)[0];

  const homepageData = pages.find((page) => page._id === siteSettings.homepage._id);
  const pageData = pages.find((item) => item.title_slug === page);

  if (!pageData) return homepageData;

  if (pageData) {
    return pageData;
  }

  return null;
};

export default getCurrentPageData;
