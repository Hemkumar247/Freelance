import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';
import SectionHeading from './SectionHeading';

function MenuSection({ categories, whatsappLink }) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id ?? 'coffee');
  const [activeItem, setActiveItem] = useState(null);

  const items = useMemo(
    () => categories.find((category) => category.id === activeTab)?.items ?? [],
    [activeTab, categories],
  );

  return (
    <section
      id="menu"
      className="section-shell pb-6 pt-14 sm:pb-8 sm:pt-16 lg:pb-4 lg:pt-20"
    >
      <div className="flex flex-col gap-10">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
          <div className="space-y-6">
            <SectionHeading
              kicker="Menu highlights"
              title="Taste-led, photo-worthy, and built for repeat orders."
              description="The menu is intentionally focused: crafted coffees, comforting savory plates, and desserts that carry their own share of the spotlight."
            />
            <div className="flex flex-col gap-3 sm:max-w-md">
              <a
                href="/menu"
                className="inline-flex min-h-[60px] w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-cream transition duration-300 hover:border-amber/30 hover:bg-white/[0.08]"
              >
                Open the full page menu
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 xl:justify-end">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                  activeTab === category.id
                    ? 'bg-amber text-ink shadow-[0_18px_40px_rgba(225,176,109,0.18)]'
                    : 'border border-white/10 bg-white/5 text-sand hover:border-white/20 hover:text-cream'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.button
                key={item.name}
                type="button"
                onClick={() => setActiveItem(item)}
                className="menu-card group overflow-hidden rounded-[30px] border border-white/10 bg-[#181311] text-left shadow-glass"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-art h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.imagePosition ?? 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sand backdrop-blur-xl">
                    {activeTab}
                  </div>
                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.72rem] font-medium text-cream backdrop-blur-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="font-display text-3xl text-cream">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-sand/[0.85]">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-sm text-sand/80">
                    <span>{item.pairing}</span>
                    <ArrowUpRight
                      size={18}
                      className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
                    />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center bg-black/[0.65] p-4 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="w-full max-w-4xl overflow-hidden rounded-[34px] border border-white/10 bg-[#171210] shadow-warm"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative h-80 md:h-full">
                  <img
                    src={activeItem.image}
                    alt={activeItem.name}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: activeItem.imagePosition ?? 'center center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                </div>

                <div className="relative flex flex-col p-6 sm:p-8">
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cream"
                    aria-label="Close menu item details"
                  >
                    <X size={18} />
                  </button>

                  <div className="max-w-lg space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-sand">
                      <Sparkles size={14} />
                      Featured detail
                    </div>
                    <h3 className="pr-10 font-display text-4xl text-cream sm:text-5xl">
                      {activeItem.name}
                    </h3>
                    <p className="text-sm leading-7 text-sand/[0.88] sm:text-base">
                      {activeItem.description}
                    </p>
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                      <p className="text-[0.72rem] uppercase tracking-[0.32em] text-sand/75">
                        Pairing note
                      </p>
                      <p className="mt-3 text-sm leading-7 text-cream/90">
                        {activeItem.pairing}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {activeItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-sand"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-display text-4xl text-amber">{activeItem.price}</span>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                    >
                      Reserve on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default MenuSection;
