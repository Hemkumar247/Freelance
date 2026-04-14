import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeOut' } }}
    >
      <motion.div
        className="flex flex-col items-center gap-5 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-amber shadow-glass"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.1, ease: 'easeInOut' }}
        >
          <Coffee size={30} />
        </motion.div>
        <div className="space-y-2">
          <p className="text-[0.72rem] uppercase tracking-[0.4em] text-sand/80">
            Aiden&apos;s Cafe
          </p>
          <h1 className="font-display text-4xl text-cream">Pouring the mood</h1>
        </div>
        <div className="h-px w-44 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-amber to-transparent"
            animate={{ x: ['-120%', '220%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Loader;
