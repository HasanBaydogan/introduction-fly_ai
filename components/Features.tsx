"use client";
// ...existing code...
import React from 'react'
import { useLanguage } from './LanguageProvider'
import Button from './Button';

const Features = () => {
  const { t } = useLanguage()
  return (
        <section className="relative max-container padding-container flex flex-col gap-12 py-10 pb-20 md:gap-16 lg:py-25 xl:flex-row">
      <div className="hero-map" />
      <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <h2 className="bold-40 lg:bold-64">{t.features.heading}</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {t.features.items.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-blue-500">
        <img src={icon} alt="map" width={28} height={28} style={{ width: 'auto', height: 'auto' }} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features