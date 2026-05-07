import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-JS4CNMMYJC';

const Analytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
};

export default Analytics;
