export function Masthead() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-end justify-between px-6 py-8">
        <div className="space-y-1">
          <p className="label-caps text-muted-foreground">{"\n"}</p>
          <p className="text-xl font-medium tracking-tight">Sahil Aggarwal</p>
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="/#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="/#journey" className="transition-colors hover:text-foreground">
            Journey
          </a>
          <a href="/#expertise" className="transition-colors hover:text-foreground">
            Expertise
          </a>
          <a href="/#publications" className="transition-colors hover:text-foreground">
            Publications
          </a>
          <a href="/writing" className="transition-colors hover:text-foreground">
            Portfolio
          </a>
          <a href="/#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
