"use client";
import { useLanguage } from "./LanguageProvider";
import { PEOPLE_URL } from "@/constants";
import { useEffect, useRef, useState } from "react";


interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  // peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div className="relative w-full h-full">
      {/* Text area positioned above image on mobile, inside on desktop */}
      <div className="mb-4 lg:mb-0">
        <div className="flexCenter gap-4 rounded-xl bg-white/90 backdrop-blur-md p-3 pr-5 shadow-lg mx-4 lg:mx-0">
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
      <div className={`h-[200px] sm:h-[250px] md:h-[300px] lg:h-full w-full ${backgroundImage} bg-cover bg-no-repeat bg-center lg:rounded-r-5xl 2xl:rounded-5xl`}>
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(false);
  const [horizontalScrollProgress, setHorizontalScrollProgress] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;
    
    if (!scrollContainer || !section) return;

    let isHorizontalScrollComplete = false;
    let isSectionActive = false;

    // Use Intersection Observer for better detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isSectionActive = entry.isIntersecting && entry.intersectionRatio >= 0.8;
          if (!isSectionActive) {
            isHorizontalScrollComplete = false;
            setIsHorizontalScrolling(false);
          }
        });
      },
      { threshold: [0.8, 1.0] }
    );

    observer.observe(section);

    const handleWheel = (e: WheelEvent) => {
      if (!isSectionActive) return;

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;
      const scrollDelta = e.deltaY > 0 ? 200 : -200;
      const newScrollLeft = Math.max(0, Math.min(maxScroll, currentScroll + scrollDelta));
      
      // Check if we can scroll horizontally
      const canScrollHorizontally = (e.deltaY > 0 && currentScroll < maxScroll) || 
                                  (e.deltaY < 0 && currentScroll > 0);
      
      if (canScrollHorizontally && !isHorizontalScrollComplete) {
        e.preventDefault();
        e.stopPropagation();
        
        scrollContainer.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
        
        const progress = maxScroll > 0 ? newScrollLeft / maxScroll : 0;
        setHorizontalScrollProgress(progress);
        setIsHorizontalScrolling(true);
        
        // Check if horizontal scroll is complete
        if (progress >= 0.95) {
          isHorizontalScrollComplete = true;
          setTimeout(() => {
            setIsHorizontalScrolling(false);
          }, 1000);
        }
      } else if (isHorizontalScrollComplete) {
        // Allow vertical scroll to continue
        setIsHorizontalScrolling(false);
      }
    };

    const handleScroll = () => {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
      setHorizontalScrollProgress(progress);
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="sorun-cozum" className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* Mobile version */}
      <div className="flex flex-col lg:hidden h-auto w-full items-start justify-start gap-8 sm:gap-12 md:gap-16">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title={lang==='tr' ? t.problemSolution.problemTitle : t.problemSolution.problemTitle}
          subtitle={t.problemSolution.problemSubtitle}
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title={t.problemSolution.solutionTitle}
          subtitle={t.problemSolution.solutionSubtitle}
        />
      </div>

      {/* Desktop version - horizontally scrollable with scroll hijacking */}
      <div className="hidden lg:block relative h-[500px] xl:h-[700px] w-full">
        {/* Scroll progress indicator */}
        {/* <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          Scroll: {Math.round(horizontalScrollProgress * 100)}% | Active: {isHorizontalScrolling ? 'Yes' : 'No'}
        </div> */}
        
        <div 
          ref={scrollContainerRef}
          className="hide-scrollbar flex h-full w-full items-start justify-start gap-8 overflow-x-auto overflow-y-hidden"
        >
          <div className="flex-shrink-0 w-[1200px] h-full">
            <CampSite 
              backgroundImage="bg-bg-img-1"
              title={lang==='tr' ? t.problemSolution.problemTitle : t.problemSolution.problemTitle}
              subtitle={t.problemSolution.problemSubtitle}
            />
          </div>
          <div className="flex-shrink-0 w-[1200px] h-full">
            <CampSite 
              backgroundImage="bg-bg-img-2"
              title={t.problemSolution.solutionTitle}
              subtitle={t.problemSolution.solutionSubtitle}
            />
          </div>
        </div>
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-44 lg:mr-6">
        <div className="bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-52 capitalize text-white">{t.problemSolution.bannerTitle}</h2>
          <p className="regular-14 xl:regular-16 mt-2 text-white">{t.problemSolution.bannerText}</p>
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