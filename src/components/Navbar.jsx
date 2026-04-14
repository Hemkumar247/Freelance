import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar({ links, whatsappLink }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6 ${
          isScrolled
            ? 'border-white/[0.12] bg-[rgba(26,21,19,0.72)] shadow-glass backdrop-blur-2xl'
            : 'border-transparent bg-transparent'
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] font-display text-xl text-amber">
            A
          </span>
          <div>
            <p className="font-display text-2xl leading-none text-cream">Aiden&apos;s</p>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-sand/80">
              Cafe
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="text-sm text-sand transition hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-amber/30 bg-amber/[0.15] px-5 py-3 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-amber/50 hover:bg-amber/20 hover:shadow-[0_0_30px_rgba(225,176,109,0.22)]"
          >
            Reserve on WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cream md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-[rgba(26,21,19,0.96)] p-5 shadow-glass backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sand transition hover:border-white/10 hover:bg-white/5 hover:text-cream"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex justify-center rounded-2xl bg-amber px-4 py-3 font-semibold text-ink"
                onClick={() => setIsOpen(false)}
              >
                Reserve on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
