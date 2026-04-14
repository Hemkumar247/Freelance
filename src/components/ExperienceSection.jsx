import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import MoodOverlay from './MoodOverlay';
import SectionHeading from './SectionHeading';

function ExperienceSection({ moments }) {
  const sectionRef = useRef(null);
  const [weatherEffect, setWeatherEffect] = useState(null);
  const [effectKey, setEffectKey] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const badgeY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  useEffect(() => {
    if (!weatherEffect) {
      return undefined;
    }

    const timer = window.setTimeout(() => setWeatherEffect(null), 3800);
    return () => window.clearTimeout(timer);
  }, [weatherEffect, effectKey]);

  const triggerWeather = (effect) => {
    setWeatherEffect(effect);
    setEffectKey((current) => current + 1);
  };

  return (
    <>
      <MoodOverlay effect={weatherEffect} effectKey={effectKey} />

      <section
        id="experience"
        ref={sectionRef}
        className="overflow-hidden pb-10 pt-4 sm:pb-12 sm:pt-6 lg:pb-12 lg:pt-6"
      >
        <div className="section-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="The experience"
              title="Every visit shifts with the hour."
              description="Swipe through the room as it changes from slow, sunlit mornings to candle-warm evenings. The idea is simple: the atmosphere should make the table feel worth booking."
            />

            <motion.div
              className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-sand/[0.85] md:inline-flex"
              style={{ y: badgeY }}
            >
              Swipe or scroll to explore the space
            </motion.div>
          </div>

          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 hide-scrollbar lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible">
            {moments.map((moment) => (
              <motion.article
                key={moment.title}
                className="group relative min-w-[84%] snap-center overflow-hidden rounded-[32px] border border-white/10 bg-[#171210] shadow-warm sm:min-w-[62%] lg:min-w-0"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative h-[430px] overflow-hidden sm:h-[450px] lg:h-[420px]">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b09] via-[rgba(15,11,9,0.35)] to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/[0.12] bg-black/25 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-sand backdrop-blur-xl">
                    {moment.eyebrow}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="max-w-md font-display text-[2.6rem] leading-[0.92] text-cream sm:text-[3.2rem] lg:text-[2.8rem]">
                      {moment.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-sand/[0.88] sm:text-base">
                      {moment.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => triggerWeather(moment.effect ?? 'snow')}
                      className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-amber transition duration-300 hover:text-[#f6d3a0]"
                    >
                      Discover the mood
                      <MoveRight size={18} className="transition group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ExperienceSection;
