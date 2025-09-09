"use client";
// ...existing code...
import React from 'react'
import { useLanguage } from './LanguageProvider'

const Guide = () => {
  const { t } = useLanguage()
  return (
    <section id="akis" className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <img src="/folded-map.svg" alt="flow" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-500">{t.guide.kicker}</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[520px]">{t.guide.heading}</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[620px]">{t.guide.sub}</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <img 
          src="/logistic.jpg"
          alt="flow-visual"
          width={1080}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl md:ml-0"
          style={{ width: '100%', height: 'auto' }}
        />

        <div className="absolute left-3 right-3 top-3 md:left-[5%] md:right-auto md:top-10 lg:top-20 flex bg-white py-6 md:py-8 pl-4 md:pl-5 pr-5 md:pr-7 gap-3 rounded-3xl border shadow-md">
          <img 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
            style={{ width: 'auto', height: 'auto' }}
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">{t.guide.current}</p>
                <p className="bold-16 text-blue-500">{t.guide.currentNote}</p>
              </div>
              <p className="bold-20 mt-2">{t.guide.currentValue}</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">{t.guide.next}</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">{t.guide.nextValue}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide