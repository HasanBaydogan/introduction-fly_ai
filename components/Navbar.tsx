"use client";
import { NAV_LINKS } from "@/constants"
// ...existing code...
import Link from "next/link"
import Button from "./Button"
import { useLanguage } from "./LanguageProvider"
import { useState } from "react"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <img src="/FlyAI-Logo.png" alt="FLY AI" width={120} height={29} />
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
      
        <Button 
          type="button"
          title={t.nav.demo}
          icon="/user.svg"
          variant="btn_dark_green"
          onClick={() => setOpen((v) => !v)}
        />

        {open && (
          <div className="absolute right-6 top-16 z-40 rounded-2xl border bg-white shadow-lg">
            <button
              className="w-full text-left px-4 py-3 hover:bg-gray-10 regular-14"
              onClick={() => { setOpen(false); router.push('/login/client'); }}
            >Client</button>
            <div className="border bg-gray-10" />
            <button
              className="w-full text-left px-4 py-3 hover:bg-gray-10 regular-14"
              onClick={() => { setOpen(false); router.push('/login/user'); }}
            >User</button>
          </div>
        )}
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