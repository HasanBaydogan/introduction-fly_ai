"use client";
import { useLanguage } from "./LanguageProvider";
import { PEOPLE_URL } from "@/constants";


interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  // peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div className="relative w-full">
      {/* Text area positioned above image */}
      <div className="mb-4 lg:mb-0">
        <div className="flexCenter gap-4 rounded-xl bg-white/90 backdrop-blur-md p-3 pr-5 shadow-lg">
          <div className="rounded-full bg-blue-500 p-4">
            <img
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-16 sm:bold-18 text-black">{title}</h4>
            <p className="regular-12 sm:regular-14 text-black">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Background image */}
      <div className={`h-[200px] sm:h-[250px] md:h-[300px] lg:h-full w-full ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
        <div className="flex h-full flex-col items-start justify-end p-4 sm:p-6 lg:px-20 lg:py-10">
          <div className="flexCenter gap-6">
            {/* <span className="flex -space-x-4 overflow-hidden">
              {PEOPLE_URL.map((url) => (
                <img 
                  className="inline-block h-10 w-10 rounded-full"
                  src={url}
                  key={url}
                  alt="person"
                  width={52}
                  height={52}
                />
              ))}
            </span> */}
            {/* <p className="bold-14 sm:bold-16 md:bold-20 text-white">{peopleJoined}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  const { t, lang } = useLanguage();
  return (
    <section id="sorun-cozum" className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[400px] xl:h-[640px] w-full items-start justify-start gap-8 sm:gap-12 md:gap-16">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title={lang==='tr' ? t.problemSolution.problemTitle : t.problemSolution.problemTitle}
          subtitle={t.problemSolution.problemSubtitle}
          // peopleJoined={t.problemSolution.problemPeople}
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title={t.problemSolution.solutionTitle}
          subtitle={t.problemSolution.solutionSubtitle}
          // peopleJoined={t.problemSolution.solutionPeople}
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">{t.problemSolution.bannerTitle}</h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">{t.problemSolution.bannerText}</p>
          <img 
            src="/quote.svg"
            alt="decorative"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp