import { Mail } from "lucide-react";
import Link from "next/link";
import { DiscordLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#fbfbfb] py-12 px-6 border-t border-neutral-800 mt-60 rounded-t-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">

        <div className="flex flex-col gap-4 md:w-1/3">
          <h2 className="text-lg font-semibold tracking-tight">Modio Studio</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Wir entwickeln hochwertige Websites, Apps und digitale Produkte – mit Fokus auf Design, Performance & Identität.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="mailto:hello@modio.studio" aria-label="Email">
              <Mail size={20} className="hover:text-white text-neutral-400 transition" />
            </Link>
            <Link href="https://www.instagram.com/" aria-label="Instagram">
              <TwitterLogo size={20} className="hover:text-white text-neutral-400 transition" />
            </Link>
            <Link href="https://www.linkedin.com/" aria-label="LinkedIn">
              <DiscordLogo size={20} className="hover:text-white text-neutral-400 transition" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:w-1/3 gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
            Rechtliches
          </h3>
          <Link href="/impressum" className="text-sm text-neutral-400 hover:text-white transition">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-sm text-neutral-400 hover:text-white transition">
            Datenschutz
          </Link>
          <Link href="/agb" className="text-sm text-neutral-400 hover:text-white transition">
            AGB
          </Link>
        </div>

        <div className="flex flex-col md:w-1/3 gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
            Kontakt
          </h3>
          <p className="text-sm text-neutral-400">
            Modio Studio <br />
            Jaron Gehrt <br />
            Schalksmühle, Deutschland
          </p>
          <Link
            href="mailto:hello@modio.studio"
            className="text-sm text-neutral-400 hover:text-white transition"
          >
            hello@modio.studio
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Modio Studio. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
