"use client";
import { useLanguage } from "./LanguageProvider";
import { PEOPLE_URL } from "@/constants";


interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4 rounded-xl bg-white/50 backdrop-blur-md p-3 pr-5 shadow-sm">
        <div className="rounded-full bg-green-50 p-4">
          <img
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-black">{title}</h4>
          <p className="regular-14 text-black">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
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
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  const { t, lang } = useLanguage();
  return (
    <section id="sorun-cozum" className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title={lang==='tr' ? t.problemSolution.problemTitle : t.problemSolution.problemTitle}
          subtitle={t.problemSolution.problemSubtitle}
          peopleJoined={t.problemSolution.problemPeople}
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title={t.problemSolution.solutionTitle}
          subtitle={t.problemSolution.solutionSubtitle}
          peopleJoined={t.problemSolution.solutionPeople}
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
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