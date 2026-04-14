import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';

function TestimonialsSection({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  const activeTestimonial = testimonials[activeIndex];
  const sideTestimonials = testimonials.filter((_, index) => index !== activeIndex);

  return (
    <section
      id="testimonials"
      className="section-shell pb-8 pt-10 sm:pb-10 sm:pt-14 lg:pb-8 lg:pt-12"
    >
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="lg:pt-1">
          <SectionHeading
            kicker="What people feel"
            title="Reviews that read like they stayed longer than planned."
            description="Social proof matters most when it sounds human. These notes capture why guests come back for the room, the coffee, and the ease of booking."
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-stretch">
          <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-glass sm:min-h-[500px] sm:p-8">
            <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-amber/10 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="relative flex h-full flex-col"
              >
                <Quote className="text-amber" size={34} />
                <div className="mt-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className="fill-amber text-amber"
                    />
                  ))}
                </div>
                <p className="mt-6 font-display text-3xl leading-tight text-cream sm:text-4xl">
                  "{activeTestimonial.quote}"
                </p>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <p className="text-lg font-semibold text-cream">{activeTestimonial.name}</p>
                  <p className="text-sm text-sand/80">{activeTestimonial.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid gap-4 lg:grid-rows-2">
            {sideTestimonials.map((testimonial) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() =>
                  setActiveIndex(
                    testimonials.findIndex((item) => item.name === testimonial.name),
                  )
                }
                className="flex h-full flex-col justify-start rounded-[28px] border border-white/10 bg-[#181311] p-5 text-left transition duration-300 hover:border-white/20 hover:bg-white/5"
              >
                <p className="font-semibold text-cream">{testimonial.name}</p>
                <p className="mt-1 text-sm text-sand/80">{testimonial.role}</p>
                <p className="mt-3 text-sm leading-7 text-sand/[0.85]">
                  {testimonial.quote}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
