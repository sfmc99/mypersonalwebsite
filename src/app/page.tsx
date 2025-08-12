import Image from "next/image";
import { profile } from "@/content/profile";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      width="20"
      height="20"
      {...props}
    >
      <path d="M20.447 20.452h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.603 0 4.268 2.372 4.268 5.458v6.285zM5.337 7.433a2.064 2.064 0 1 1 0-4.129 2.064 2.064 0 0 1 0 4.129zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      width="20"
      height="20"
      {...props}
    >
      <path d="M12 .5a11.5 11.5 0 0 0-3.635 22.41c.576.105.788-.25.788-.556 0-.275-.01-1.003-.016-1.97-3.205.696-3.88-1.545-3.88-1.545-.523-1.328-1.277-1.683-1.277-1.683-1.044-.713.08-.699.08-.699 1.155.082 1.763 1.188 1.763 1.188 1.027 1.76 2.695 1.252 3.35.958.104-.742.402-1.252.732-1.54-2.558-.29-5.247-1.28-5.247-5.695 0-1.258.452-2.285 1.193-3.09-.12-.29-.52-1.46.112-3.045 0 0 .98-.314 3.212 1.18a11.18 11.18 0 0 1 5.848 0c2.23-1.494 3.208-1.18 3.208-1.18.634 1.585.234 2.756.115 3.045.744.805 1.192 1.832 1.192 3.09 0 4.427-2.694 5.4-5.26 5.685.41.355.78 1.056.78 2.13 0 1.54-.014 2.78-.014 3.16 0 .308.206.67.794.556A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Nav */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Ankit Bajpai</a>
          <ul className="hidden sm:flex items-center gap-6 text-sm">
            <li><a className="hover:opacity-80" href="#about">About</a></li>
            <li><a className="hover:opacity-80" href="#experience">Work</a></li>
            <li><a className="hover:opacity-80" href="#certifications">Certifications</a></li>
            <li><a className="hover:opacity-80" href="#blogs">Blogs</a></li>
            <li><a className="hover:opacity-80" href="#contact">Contact</a></li>
            <li className="flex items-center gap-3">
              <a
                className="hover:opacity-80"
                href="https://www.linkedin.com/in/ankitbajpaimartech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon className="opacity-90" />
              </a>
              <a
                className="hover:opacity-80"
                href="https://github.com/sfmc99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <GitHubIcon className="opacity-90" />
              </a>
            </li>
          </ul>
          <a
            href="mailto:ankbajpai1989.ab@gmail.com"
            className="inline-flex items-center rounded-full bg-foreground text-background text-sm px-4 py-2 shadow-sm hover:opacity-90"
          >
            Email Me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              {profile.title}
            </h1>
            <p className="mt-4 text-base/7 text-black/70 dark:text-white/70">
              {profile.bio}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="mailto:ankbajpai1989.ab@gmail.com"
                className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm shadow hover:opacity-90"
              >
                Get in touch
              </a>
              <a
                href="#blogs"
                className="inline-flex items-center rounded-full border border-black/10 dark:border-white/15 px-5 py-2.5 text-sm hover:bg-black/5 dark:hover:bg-white/10"
              >
                Read my blog
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center rounded-full border border-black/10 dark:border-white/15 px-5 py-2.5 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative aspect-square w-full max-w-[360px] md:max-w-none md:w-[420px] mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-2xl" />
            <div className="relative h-full w-full rounded-2xl border border-black/10 dark:border-white/10 bg-background/60 backdrop-blur flex items-center justify-center">
              <Image src="/globe.svg" alt="abstract" width={96} height={96} className="opacity-80 dark:invert" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-12 md:py-16 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 text-black/75 dark:text-white/70 max-w-3xl">{profile.bio}</p>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-12 md:py-16 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Work Experience</h2>
        <div className="mt-6 grid gap-4 sm:gap-6">
          {profile.experience.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-background/60">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold">
                  {item.role}{item.company ? ` · ${item.company}` : ""}
                </h3>
                <span className="shrink-0 text-xs text-black/60 dark:text-white/60">
                  {[item.start, item.end].filter(Boolean).join(" — ")}
                </span>
              </div>
              {item.bullets?.length ? (
                <ul className="mt-3 list-disc pl-5 text-sm text-black/75 dark:text-white/70 space-y-1">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mx-auto max-w-6xl px-6 py-12 md:py-16 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Certifications</h2>
        <p className="mt-2 text-sm text-black/70 dark:text-white/60">Selected certifications and credentials.</p>
        {Array.isArray((profile as any).certifications) && (profile as any).certifications.length ? (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(profile as any).certifications.map((c: any, i: number) => (
              <article key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-background/60 hover:bg-black/5 dark:hover:bg-white/5 transition">
                <h3 className="font-semibold">{c.title}</h3>
                <div className="mt-1 text-xs text-black/60 dark:text-white/60">{c.issuer}</div>
                {c.description ? (
                  <p className="mt-2 text-sm text-black/75 dark:text-white/70">{c.description}</p>
                ) : null}
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm underline underline-offset-4 opacity-90 hover:opacity-100"
                  >
                    View credential
                  </a>
                ) : (
                  <span className="mt-3 inline-block text-sm opacity-70">Credential details unavailable</span>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-black/70 dark:text-white/60">No certifications added yet.</p>
        )}
      </section>

      {/* Blogs */}
      <section id="blogs" className="mx-auto max-w-6xl px-6 py-12 md:py-16 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Blogs</h2>
        <p className="mt-2 text-sm text-black/70 dark:text-white/60">Writing on CDPs, automation, analytics, and AI for marketing.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Placeholder cards */}
          {[1, 2, 3].map((i) => (
            <article key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-background/60 hover:bg-black/5 dark:hover:bg-white/5 transition">
              <h3 className="font-semibold">Sample Post #{i}</h3>
              <p className="mt-2 text-sm text-black/75 dark:text-white/70">
                Quick thoughts on making marketing systems smarter and more data-driven.
              </p>
              <a href="#" className="mt-3 inline-block text-sm underline underline-offset-4 opacity-90 hover:opacity-100">
                Read more
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-12 md:py-16 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-4 text-black/75 dark:text-white/70 max-w-2xl">
          Want to collaborate or discuss marketing technology? I’m open to consulting,
          speaking, and interesting projects.
        </p>
        <div className="mt-6">
          <a
            href="mailto:ankbajpai1989.ab@gmail.com"
            className="inline-flex items-center rounded-full bg-foreground text-background px-6 py-3 text-sm shadow hover:opacity-90"
          >
            Email Ankit
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 border-t border-black/5 dark:border-white/10 text-sm flex items-center justify-between">
        <span>© {new Date().getFullYear()} Ankit Bajpai</span>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ankitbajpaimartech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/sfmc99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <span className="opacity-70">•</span>
          <a
            href="https://mypersonalwebsite-smoky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            aria-label="Live site"
            title="Live site"
          >
            Live at mypersonalwebsite-smoky.vercel.app
          </a>
          <a href="#home" className="hover:opacity-80">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
