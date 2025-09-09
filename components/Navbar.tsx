"use client";
import { NAV_LINKS } from "@/constants"
// ...existing code...
import Link from "next/link"
import Button from "./Button"
import { useLanguage } from "./LanguageProvider"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const morphRef = useRef<HTMLDivElement | null>(null)
  const closeTimerRef = useRef<number | null>(null)

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 250)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!open) return
      const target = event.target as Node
      if (morphRef.current && !morphRef.current.contains(target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  useEffect(() => {
    return () => clearCloseTimer()
  }, [])
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <img src="/fly_ai_logo.png" alt="FLY AI" width={150} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {t.nav[link.key as 'home' | 'features' | 'flow' | 'faq' | 'contact'] ?? link.label}
          </Link>
        ))}
      </ul>

      {/* <div className="hidden lg:flex items-center gap-2">
        <button className={`regular-14 ${lang==='en'?'font-bold':''}`} onClick={() => setLang('en')}>EN</button>
        <span className="text-gray-30">/</span>
        <button className={`regular-14 ${lang==='tr'?'font-bold':''}`} onClick={() => setLang('tr')}>TR</button>
      </div> */}

      <div className="lg:flexCenter hidden">

        <div className="hidden lg:flex items-center gap-2 p-4">
        <button className={`regular-14 ${lang==='en'?'font-bold':''}`} onClick={() => setLang('en')}>EN</button>
        <span className="text-gray-30">/</span>
        <button className={`regular-14 ${lang==='tr'?'font-bold':''}`} onClick={() => setLang('tr')}>TR</button>
      </div>

      {/* Login morphing area */}
      <div className="relative mr-3" ref={morphRef} onMouseEnter={clearCloseTimer} onMouseLeave={scheduleClose}>
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
              <button
                className="flex-1 px-5 py-3 regular-14 hover:bg-white/10 transition-colors"
                onClick={() => { setOpen(false); router.push('/login/user'); }}
              >
                {t.nav.user}
              </button>
              <div className="w-px self-center h-5 bg-white/30" />
              <button
                className="flex-1 px-5 py-3 regular-14 hover:bg-white/10 transition-colors"
                onClick={() => { setOpen(false); router.push('/login/client'); }}
              >
                {t.nav.client}
              </button>
            </div>
          )}
        </div>
      </div>

      <Button 
          type="button"
          title={t.nav.demo}
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <img 
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        style={{ width: 'auto', height: 'auto' }}
      />
    </nav>
  )
}

export default Navbar