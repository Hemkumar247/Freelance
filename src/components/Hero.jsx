import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Clock3, MapPin } from 'lucide-react';

function Hero({ highlights, whatsappLink }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          y: imageY,
          scale: imageScale,
          backgroundImage:
            "linear-gradient(180deg, rgba(18,15,13,0.2) 0%, rgba(18,15,13,0.78) 88%), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,176,109,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(122,88,64,0.4),transparent_38%)]" />

      <div className="section-shell section-space relative z-10 pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="max-w-3xl"
            style={{ y: contentY }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-sand">
              Chennai&apos;s intimate coffee house
            </span>
            <h1 className="mt-6 font-display text-6xl leading-[0.92] text-cream text-shadow-soft sm:text-7xl lg:text-[7.6rem]">
              Coffee for
              <span className="block text-amber">golden hours.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-sand/90 sm:text-lg">
              A premium cafe experience shaped around house roasts, sculpted desserts,
              and a room that makes people stay a little longer.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber px-6 py-4 text-sm font-semibold text-ink shadow-[0_22px_50px_rgba(225,176,109,0.24)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                Reserve on WhatsApp
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="/menu"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-cream backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10"
              >
                View full menu
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <motion.span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-sand/90 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.12 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
          >
            <div className="glass-panel rounded-[30px] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-sand/80">
                    The mood
                  </p>
                  <h2 className="mt-2 font-display text-4xl text-cream">
                    Warm, intimate, and quietly cinematic.
                  </h2>
                </div>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber/25 to-transparent blur-xl" />
              </div>
            </div>

            <div className="glass-panel rounded-[30px] p-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.08] text-amber">
                  <Clock3 size={20} />
                </span>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-sand/80">
                    Open daily
                  </p>
                  <p className="mt-2 text-lg font-semibold text-cream">
                    8:00 AM to late evening
                  </p>
                  <p className="mt-1 text-sm text-sand/[0.85]">
                    Built for slow mornings, catch-ups, and dessert after dark.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[30px] p-6 sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.08] text-amber">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-sand/80">
                    Find us
                  </p>
                  <p className="mt-2 text-lg font-semibold text-cream">
                    Aiden&apos;s Cafe, Chennai
                  </p>
                  <p className="mt-1 text-sm text-sand/[0.85]">
                    Close enough for a spontaneous coffee, polished enough for planned
                    evenings.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
