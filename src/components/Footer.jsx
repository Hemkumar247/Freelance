function Footer({ links, socials }) {
  return (
    <footer className="section-shell pb-10 pt-6">
      <div className="relative overflow-hidden rounded-[30px] border border-white/[0.14] bg-[linear-gradient(180deg,#211915_0%,#16110f_100%)] px-6 py-8 shadow-[0_28px_80px_rgba(9,7,6,0.36)] sm:px-8 sm:py-9">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0c07b]/50 to-transparent" />
        <div className="pointer-events-none absolute -left-10 top-6 h-28 w-28 rounded-full bg-[#f0c07b]/10 blur-3xl" />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-4xl text-[#f8f2e8]">Aiden&apos;s Cafe</p>
            <p className="mt-3 text-base leading-7 text-[#d9c8b6]">
              Premium coffee, plated desserts, and a warm room worth returning to.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-[#cda98a]">
                Navigate
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="text-base text-[#f0e7dc] transition hover:text-[#f0c07b]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-[#cda98a]">
                Socials
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-[#f0e7dc] transition hover:text-[#f0c07b]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.1] pt-5 text-xs font-medium uppercase tracking-[0.28em] text-[#bca695]">
          Crafted for cozy mornings and effortless reservations.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
