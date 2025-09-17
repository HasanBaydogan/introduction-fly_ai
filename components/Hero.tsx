"use client";
// ...existing code...
import Button from './Button'
import { useLanguage } from './LanguageProvider'
import { generateDemoRequestMailto } from '@/utils/mailto'

const Hero = () => {
  const { t } = useLanguage()
  return (
<section id="ozellikler" className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex lg:flex-1 lg:min-h-[900px]">
          <img
            src="/Services.png"
            alt="screens"
            className="feature-airplane"
          />
        </div>
         <div className="relative z-20 flex lg:flex-1 flex-col">
        <h1 className="bold-52 lg:bold-88 text-blue-600">{t.hero.title}</h1>
        <p className="regular-16 mt-4 md:mt-6 xl:max-w-[720px]">{t.hero.summary}</p>
        <div className="flex flex-col w-full gap-3 sm:flex-row my-8">
          <Button 
            type="button" 
            title={t.hero.ctaPrimary}
            variant="btn_green"
            href={generateDemoRequestMailto(t.demoRequest.subject, t.demoRequest.body)}
          />
          {/* <Button 
            type="button" 
            title={t.hero.ctaSecondary}
            icon="/play.svg"
            variant="btn_white_text" 
          /> */}
        </div>
      </div>
      </div>
    </section>
    
  )
}

export default Hero