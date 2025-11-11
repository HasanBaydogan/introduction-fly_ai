"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const morphRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 250);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!open) return;
      const target = event.target as Node;
      if (morphRef.current && !morphRef.current.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/">
          <img src="/FLY_AI_logo_new.png" alt="FLY AI" className="h-14 w-auto" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-slate-900"
            >
              {t.nav[link.key as "home" | "features" | "flow" | "faq" | "contact"] ?? link.label}
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center text-sm text-slate-500">
            <button
              className={`regular-14 ${lang === "en" ? "font-bold text-slate-900" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="text-slate-500 mx-2">/</span>
            <button
              className={`regular-14 ${lang === "tr" ? "font-bold text-slate-900" : ""}`}
              onClick={() => setLang("tr")}
            >
              TR
            </button>
          </div>

          {/* Login morphing area */}
          <div
            className="relative"
            ref={morphRef}
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
          >
            <div
              className={`flex items-center overflow-hidden rounded-full border border-blue-600/40 bg-blue-500 text-white shadow-md transition-all duration-500 ease-out`}
              style={{ width: open ? 260 : 120 }}
            >
              {!open ? (
                <button
                  className="w-full px-6 py-3 regular-14 hover:bg-white/10 transition-colors"
                  onClick={() => setOpen(true)}
                >
                  {t.nav.login}
                </button>
              ) : (
                <div className="flex w-full items-stretch">
                  <button className="flex-1 px-5 py-3 regular-14 hover:bg-white/10 transition-colors">
                    {t.nav.user}
                  </button>
                  <div className="w-px self-center h-5 bg-white/30" />
                  <button className="flex-1 px-5 py-3 regular-14 hover:bg-white/10 transition-colors">
                    {t.nav.client}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <img
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          style={{ width: "auto", height: "auto" }}
          onClick={() => setMobileOpen(true)}
        />

        {mobileOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setMobileOpen(false)} />
            <div className="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <img src="/FLY_AI_logo_new.png" alt="FLY AI" width={120} height={24} />
                <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                  <img src="/close.svg" alt="close" width={24} height={24} />
                </button>
              </div>
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="regular-16 text-gray-90 py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.nav[link.key as "home" | "features" | "flow" | "faq" | "contact"] ??
                      link.label}
                  </Link>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2">
                <button
                  className={`regular-14 ${lang === "en" ? "font-bold" : ""}`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
                <span className="text-gray-30">/</span>
                <button
                  className={`regular-14 ${lang === "tr" ? "font-bold" : ""}`}
                  onClick={() => setLang("tr")}
                >
                  TR
                </button>
              </div>
              <div className="mt-auto pt-6">
                <div className="space-y-2">
                  <button
                    className="w-full px-6 py-3 regular-14 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors"
                    // onClick={() => { setMobileOpen(false); router.push('/login/user'); }}
                  >
                    {t.nav.user} {t.nav.login}
                  </button>
                  <button className="w-full px-6 py-3 regular-14 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors">
                    {t.nav.client} {t.nav.login}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
