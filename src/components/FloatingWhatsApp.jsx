import { motion } from 'framer-motion';
import { MessageCircleMore } from 'lucide-react';

function FloatingWhatsApp({ whatsappLink, label = 'Book a table' }) {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#0b2010] shadow-[0_24px_45px_rgba(37,211,102,0.3)]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.45 }}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="absolute inset-0 -z-10 rounded-full border border-[#25D366]/70 animate-pulse-ring" />
      <MessageCircleMore size={20} />
      <span className="hidden sm:inline">{label}</span>
    </motion.a>
  );
}

export default FloatingWhatsApp;
