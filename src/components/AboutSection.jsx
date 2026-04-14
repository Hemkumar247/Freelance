import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import MoodOverlay from './MoodOverlay';
import SectionHeading from './SectionHeading';

const highlights = [
  {
    label: 'House roasts designed for comfort and clarity',
    effect: 'snow',
  },
  {
    label: 'Dessert-forward menu that feels worth dressing up for',
    effect: 'rain',
  },
  {
    label: 'Soft lighting, layered textures, and an easy luxury mood',
    effect: 'autumn',
  },
];

function AboutSection() {
  const [moodEffect, setMoodEffect] = useState(null);
  const [effectKey, setEffectKey] = useState(0);

  useEffect(() => {
    if (!moodEffect) {
      return undefined;
    }

    const timer = window.setTimeout(() => setMoodEffect(null), 3800);
    return () => window.clearTimeout(timer);
  }, [moodEffect, effectKey]);

  const triggerMood = (effect) => {
    setMoodEffect(effect);
    setEffectKey((current) => current + 1);
  };

  return (
    <>
      <MoodOverlay effect={moodEffect} effectKey={effectKey} />

      <section
        id="about"
        className="section-shell pb-10 pt-16 sm:pb-12 sm:pt-20 lg:pb-10 lg:pt-24"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85 }}
        >
          <div className="absolute -left-6 top-8 hidden h-40 w-40 rounded-full bg-amber/[0.15] blur-3xl sm:block" />
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 shadow-warm">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
              alt="A warm and premium cafe interior"
              className="h-[480px] w-full object-cover"
            />
            <motion.div
              className="glass-panel absolute inset-x-4 bottom-4 rounded-[28px] p-5 sm:inset-x-6 sm:bottom-6 sm:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-amber">
                  <Sparkles size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-cream sm:text-lg">
                    Designed to feel like an evening well spent
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-sand/[0.85] sm:text-base">
                    The space balances cafe calm with date-night warmth, so it works
                    for both quick resets and long, slow tables.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <SectionHeading
            kicker="Our story"
            title="We built a cafe around atmosphere, not just coffee."
            description="Aiden's Cafe is designed for the people who notice the ceramic cup, the playlist, the plating, and the way a room feels at golden hour. Every drink and dessert is made to invite another ten minutes at the table."
          />

          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            {highlights.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => triggerMood(item.effect)}
                className="group flex items-center justify-between rounded-[26px] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl transition duration-300 hover:border-amber/25 hover:bg-white/[0.08]"
              >
                <p className="max-w-lg text-sm leading-7 text-sand/90 sm:text-base">
                  {item.label}
                </p>
                <ArrowUpRight
                  size={18}
                  className="text-sand transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
                />
              </button>
            ))}
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            {[
              ['12+', 'signature drinks and rotating specials'],
              ['Every day', 'fresh bakes and plated desserts'],
              ['One tap', 'WhatsApp reservations from any section'],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-[26px] border border-white/10 bg-[#181311] p-5 shadow-glass"
              >
                <p className="font-display text-4xl text-cream">{value}</p>
                <p className="mt-2 text-sm leading-6 text-sand/80">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
