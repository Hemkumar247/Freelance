import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import FullMenuPage from './components/FullMenuPage';
import HomePage from './components/HomePage';
import Loader from './components/Loader';
import {
  fullMenuSections,
  menuPageCategoryLinks,
  menuPageClosingNote,
  menuPageHero,
  menuPageNavigation,
  menuPageNotice,
} from './data/fullMenuContent';
import {
  contactDetails,
  experienceMoments,
  footerNavigation,
  heroHighlights,
  menuCategories,
  navigation,
  socialLinks,
  testimonials,
  whatsappLink,
} from './data/siteContent';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  const pathname = useMemo(() => {
    const currentPath = window.location.pathname.replace(/\/+$/, '');
    return currentPath || '/';
  }, []);

  const isMenuPage = pathname === '/menu';

  const resolvedMenuNavigation = useMemo(
    () =>
      menuPageNavigation.map((link) =>
        link.href === 'WHATSAPP_LINK' ? { ...link, href: whatsappLink } : link,
      ),
    [],
  );

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      {isMenuPage ? (
        <FullMenuPage
          whatsappLink={whatsappLink}
          hero={menuPageHero}
          navigation={resolvedMenuNavigation}
          categoryLinks={menuPageCategoryLinks}
          notice={menuPageNotice}
          sections={fullMenuSections}
          closingNote={menuPageClosingNote}
        />
      ) : (
        <HomePage
          navigation={navigation}
          footerLinks={footerNavigation}
          heroHighlights={heroHighlights}
          menuCategories={menuCategories}
          experienceMoments={experienceMoments}
          testimonials={testimonials}
          contactDetails={contactDetails}
          socialLinks={socialLinks}
          whatsappLink={whatsappLink}
        />
      )}

      <AnimatePresence>{isLoading ? <Loader /> : null}</AnimatePresence>
    </MotionConfig>
  );
}

export default App;
