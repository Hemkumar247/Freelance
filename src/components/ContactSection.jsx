import { motion } from 'framer-motion';
import { Clock3, MapPinned, MessageCircleMore, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';

function ContactSection({ contact, whatsappLink }) {
  return (
    <section
      id="contact"
      className="section-shell pb-20 pt-8 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-14"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="overflow-hidden rounded-[34px] border border-white/10 bg-[#181311] shadow-warm"
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <iframe
            src={contact.mapEmbed}
            title={`${contact.name} map`}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '520px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="space-y-8">
          <SectionHeading
            kicker="Visit us"
            title="Make the plan. We'll make the table feel right."
            description="Everything important is here: the map, the timing, and the fastest path to a confirmed reservation. Keep the experience frictionless and send guests straight to WhatsApp."
          />

          <div className="grid gap-4">
            <motion.article
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.08] text-amber">
                  <MapPinned size={20} />
                </span>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-sand/75">
                    Address
                  </p>
                  {contact.address.map((line) => (
                    <p key={line} className="mt-2 text-lg text-cream">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>

            <motion.article
              className="rounded-[28px] border border-white/10 bg-[#181311] p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.08] text-amber">
                  <Clock3 size={20} />
                </span>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-sand/75">
                    Timings
                  </p>
                  <div className="mt-2 space-y-2">
                    {contact.timings.map((line) => (
                      <p key={line} className="text-sm leading-7 text-cream/90 sm:text-base">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              className="rounded-[28px] border border-white/10 bg-[#181311] p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.08] text-amber">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-sand/75">
                    Phone / WhatsApp
                  </p>
                  <p className="mt-2 text-lg text-cream">{contact.phone}</p>
                  <p className="mt-2 text-sm leading-7 text-sand/[0.85]">
                    Replace this placeholder number with your live booking contact to make
                    the CTA fully active.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-amber px-6 py-4 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <MessageCircleMore size={18} />
              Reserve on WhatsApp
            </a>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-cream transition duration-300 hover:border-white/20 hover:bg-white/10"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
