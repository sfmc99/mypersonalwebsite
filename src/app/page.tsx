import Image from "next/image";
import { profile } from "@/content/profile";

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
            <li><a className="hover:opacity-80" href="#blogs">Blogs</a></li>
            <li><a className="hover:opacity-80" href="#contact">Contact</a></li>
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
        <a href="#home" className="hover:opacity-80">Back to top ↑</a>
      </footer>
    </div>
  );
}
