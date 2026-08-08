export function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 font-serif text-5xl">
              Let&apos;s refine your <span className="italic">narrative</span>.
            </h2>
            <a
              href="mailto:sgaggarwal2000@gmail.com"
              className="inline-flex items-center gap-2 rounded-sm bg-primary py-2 pr-3 pl-2 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-transform hover:-translate-y-0.5"
            >
              <svg
                className="size-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Get in Touch
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="label-caps text-muted-foreground">Location</p>
              <p className="text-sm">Jaipur, Rajasthan, India</p>
            </div>
            <div className="space-y-4">
              <p className="label-caps text-muted-foreground">Social</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.linkedin.com/in/sahilaggarwal-129001226"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 space-y-4">
              <p className="label-caps text-muted-foreground">Contact Details</p>
              <p className="text-sm">
                <a href="mailto:sgaggarwal2000@gmail.com" className="hover:text-gold">
                  sgaggarwal2000@gmail.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="tel:+919671364241" className="hover:text-gold">
                  +91 96713 64241
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
            © 2026 Sahil Aggarwal
          </p>
          <p className="text-[10px] tracking-widest uppercase italic text-muted-foreground">
            Crafted for Precision
          </p>
        </div>
      </div>
    </footer>
  );
}
