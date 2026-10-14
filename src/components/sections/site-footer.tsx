import Link from "next/link";
import { Logo } from "@/src/components/ui/logo";
import { hubs, navLinks, site } from "@/src/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo tone="inverse" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Regular local drops across Yorkshire. Long-distance work across the UK, including depot-to-depot movements and fleet transfers.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-white" data-track="footer_phone">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white" data-track="footer_email">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapHref}
                className="hover:text-white"
                data-track="footer_address"
              >
                {site.address}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Coverage regions</p>
          <ul className="mt-4 space-y-2 text-sm">
            {hubs.map((hub) => (
              <li key={hub.id}>
                <Link href={`/coverage/${hub.id}`} className="hover:text-white">
                  {hub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-7xl px-5 py-5 text-xs text-slate-500 sm:px-6 lg:px-8">
          © {year} Shezuna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
