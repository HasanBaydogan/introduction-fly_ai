"use client";
// ...existing code...
import Button from './Button'
import { useLanguage } from './LanguageProvider'

const Hero = () => {
  const { t } = useLanguage()
  return (
<section id="ozellikler" className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <img
            src="/Services.png"
            alt="screens"
            className="feature-airplane"
          />
        </div>

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
      </div>
    </section>
    
  )
}

export default Hero