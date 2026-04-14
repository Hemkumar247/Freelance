import { motion, useScroll, useSpring } from 'framer-motion';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import ExperienceSection from './ExperienceSection';
import FloatingWhatsApp from './FloatingWhatsApp';
import Footer from './Footer';
import Hero from './Hero';
import MenuSection from './MenuSection';
import Navbar from './Navbar';
import TestimonialsSection from './TestimonialsSection';

function HomePage({
  navigation,
  footerLinks,
  heroHighlights,
  menuCategories,
  experienceMoments,
  testimonials,
  contactDetails,
  socialLinks,
  whatsappLink,
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink text-cream">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-px origin-left bg-amber"
        style={{ scaleX }}
      />

      <div className="ambient-layer pointer-events-none fixed inset-0 z-0 opacity-90" />
      <div className="grain-overlay pointer-events-none fixed inset-0 z-0" />

      <Navbar links={navigation} whatsappLink={whatsappLink} />
      <FloatingWhatsApp whatsappLink={whatsappLink} label="Book a table" />

      <main className="relative z-10">
        <Hero highlights={heroHighlights} whatsappLink={whatsappLink} />
        <AboutSection />
        <MenuSection categories={menuCategories} whatsappLink={whatsappLink} />
        <ExperienceSection moments={experienceMoments} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection contact={contactDetails} whatsappLink={whatsappLink} />
      </main>

      <Footer links={footerLinks} socials={socialLinks} />
    </div>
  );
}

export default HomePage;
