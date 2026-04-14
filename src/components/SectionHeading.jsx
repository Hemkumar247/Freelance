import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ kicker, title, description, align = 'left' }) {
  const alignment =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left';

  return (
    <motion.div
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-sand">
        {kicker}
      </span>
      <h2 className="font-display text-4xl leading-none text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="max-w-xl text-sm leading-7 text-sand/[0.85] sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}

export default SectionHeading;
