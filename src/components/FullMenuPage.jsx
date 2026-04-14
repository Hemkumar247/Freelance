import { motion } from 'framer-motion';
import {
  ArrowRight,
  Citrus,
  CupSoda,
  MessageCircleMore,
  Pizza,
  Salad,
  Sandwich,
  Soup,
  UtensilsCrossed,
} from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';

const sectionIcons = {
  'soup-bowls': Soup,
  salads: Salad,
  mocktails: CupSoda,
  mojitos: Citrus,
  quesadillas: Sandwich,
  pizza: Pizza,
};

function MenuPageHeader({ links }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(43,34,29,0.62)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-4 py-5 text-white sm:px-8">
        <a href="/" className="font-display text-3xl tracking-wide text-white">
          Aiden&apos;s
        </a>
        <nav className="hide-scrollbar flex items-center gap-5 overflow-x-auto text-sm uppercase tracking-[0.18em] text-white/[0.88] sm:gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="whitespace-nowrap transition hover:text-[#f0c07b]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function MenuSectionBlock({ section }) {
  const Icon = sectionIcons[section.id] ?? UtensilsCrossed;

  return (
    <section id={section.id} className="scroll-mt-28 border-t border-[#e4d8cb] pt-12 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#96735a]">
            {section.accent}
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none text-[#2a201c] sm:text-6xl">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#6d5a4d]">{section.summary}</p>
        </div>
        <div
          className="hidden h-24 w-24 items-center justify-center rounded-[30px] border border-[#d4c3b2] bg-white shadow-[0_18px_40px_rgba(54,40,31,0.08)] lg:flex"
          style={{ backgroundImage: section.tileBackground }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/45 bg-[rgba(255,255,255,0.72)] shadow-[0_10px_25px_rgba(62,45,36,0.08)]">
            <Icon size={28} strokeWidth={1.8} className="text-[#2a201c]" />
          </div>
        </div>
      </div>

      <div className="mt-8 divide-y divide-[#eadfd5]">
        {section.items.map((item, index) => (
          <article
            key={item.name}
            className="grid gap-5 py-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:gap-8"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7c6b6] bg-white text-sm font-semibold tracking-[0.08em] text-[#7a5f4f]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-medium tracking-[0.01em] text-[#342822] sm:text-[2rem]">
                  {item.name}
                </h3>
              </div>
              <p className="mt-3 max-w-3xl text-base leading-8 text-[#6b594d]">
                {item.description}
              </p>
            </div>

            <div className="text-left text-xl font-medium text-[#3b2b23] md:text-right md:text-2xl">
              {item.price}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FullMenuPage({
  whatsappLink,
  hero,
  navigation,
  categoryLinks,
  notice,
  sections,
  closingNote,
}) {
  return (
    <div className="min-h-screen bg-[#f3ede4] text-[#2b211d]">
      <MenuPageHeader links={navigation} />
      <FloatingWhatsApp whatsappLink={whatsappLink} label="Full menu on WhatsApp" />

      <section
        id="menu-top"
        className="relative flex min-h-[430px] items-end overflow-hidden pt-24"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(34,25,20,0.34), rgba(34,25,20,0.66)), url('${hero.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,192,123,0.16),transparent_34%),linear-gradient(180deg,transparent_0%,rgba(30,23,19,0.38)_100%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 pb-16 text-white sm:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-[#f0d8ba]">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-6xl leading-none sm:text-7xl lg:text-[5.6rem]">
            {hero.title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
            {hero.description}
          </p>
        </div>
      </section>

      <main className="relative z-10 -mt-10 rounded-t-[36px] bg-[#f8f4ef] pb-24 shadow-[0_-20px_60px_rgba(34,25,20,0.08)]">
        <div className="mx-auto max-w-[1280px] px-4 pt-12 sm:px-8">
          <motion.div
            className="rounded-[32px] border border-[#dfd1c2] bg-white/[0.88] p-6 shadow-[0_20px_50px_rgba(54,40,31,0.08)] backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8c6a56]">
                  {notice.label}
                </p>
                <h2 className="mt-4 font-display text-4xl leading-none text-[#2a201c] sm:text-5xl">
                  {notice.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#665446]">
                  {notice.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-[#132a17] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
                >
                  <MessageCircleMore size={18} />
                  {notice.buttonLabel}
                </a>
                <p className="max-w-md text-sm leading-7 text-[#7b6759] lg:text-right">
                  Cold coffee, burgers, basket fries, and more are available beyond this
                  featured page.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="hide-scrollbar mt-8 flex gap-3 overflow-x-auto pb-2">
            {categoryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-[#d9cabd] bg-white px-5 py-3 text-sm font-semibold text-[#4d3c32] transition hover:border-[#caa37e] hover:text-[#2a201c]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1280px] space-y-16 px-4 sm:px-8">
          {sections.map((section) => (
            <MenuSectionBlock key={section.id} section={section} />
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-[1280px] px-4 sm:px-8">
          <div className="rounded-[34px] bg-[#2b211d] px-6 py-10 text-white shadow-[0_30px_70px_rgba(29,22,18,0.24)] sm:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#d6b391]">
                  More to explore
                </p>
                <h3 className="mt-4 font-display text-4xl leading-none text-[#f6efe6] sm:text-5xl">
                  {closingNote.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/74">
                  {closingNote.description}
                </p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f0c07b] px-6 py-4 text-sm font-semibold text-[#2a201c] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
              >
                {closingNote.buttonLabel}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FullMenuPage;
