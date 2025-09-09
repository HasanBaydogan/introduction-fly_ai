"use client";
// ...existing code...
import Button from './Button'
import { useLanguage } from './LanguageProvider'

const Hero = () => {
  const { t } = useLanguage()
  return (
    <section className="relative max-container padding-container flex flex-col gap-12 py-10 pb-20 md:gap-16 lg:py-25 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">{t.hero.title}</h1>
        <p className="regular-16 mt-4 md:mt-6 text-gray-30 xl:max-w-[720px]">{t.hero.summary}</p>

        <div className="my-8 md:my-11 flex flex-wrap gap-3 md:gap-5">
          <p className="bold-16 lg:bold-20 text-blue-70">{t.hero.statuses}</p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title={t.hero.ctaPrimary}
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title={t.hero.ctaSecondary}
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start justify-center md:justify-start">
        <div className="relative z-20 flex w-full max-w-[360px] sm:max-w-[420px] flex-col gap-6 rounded-3xl bg-green-90 px-6 py-6 sm:px-7 sm:py-8">
          <div className="flexBetween">
            <p className="regular-16 text-gray-20">{t.hero.flowCard.header}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="bold-16 text-white">{t.hero.flowCard.line1}</p>
            <p className="bold-16 text-white">{t.hero.flowCard.line2}</p>
            <p className="bold-16 text-white">{t.hero.flowCard.line3}</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">{t.hero.flowCard.current}</p>
              <p className="bold-20 text-white">{t.hero.flowCard.currentsub}</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">{t.hero.flowCard.next}</p>
              <p className="bold-20 text-white">{t.hero.flowCard.nextsub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero