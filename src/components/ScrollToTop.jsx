import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { stripLangPrefix } from '@/i18n/routing';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    // Switching language shows the same page, so keep the reader's place.
    const samePage = stripLangPrefix(previousPath.current) === stripLangPrefix(pathname);
    previousPath.current = pathname;
    if (samePage) return;

    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
