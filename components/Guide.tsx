"use client";
// ...existing code...
import React from "react";
import { useLanguage } from "./LanguageProvider";

const Guide = () => {
  const { t } = useLanguage();
  return (
    <section id="akis" className="flexCenter flex-col py-5 pb-32 ">
      <div className="padding-container max-container w-full ">
        <img
          src="/folded-map.svg"
          alt="flow"
          width={50}
          height={50}
          style={{ width: "auto", height: "auto" }}
        />
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
          className="w-full object-cover object-center 2xl:rounded-5xl mt-[180px] md:mt-48 md:ml-[450px]"
          style={{ width: "63%", height: "auto" }}
        />

        <div className="absolute left-3 right-3 top-3 md:left-[5%] md:right-auto md:top-10 lg:top-20 flex bg-white py-6 md:py-8 pl-4 md:pl-5 pr-5 md:pr-7 gap-3 rounded-3xl border shadow-md">
          <img
            src="/meter.svg"
            alt="meter"
            width={16}
            height={250}
            className="h-full w-auto"
            style={{ width: "auto", height: "auto" }}
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="bold-20 ">{t.guide.step1}</p>
                <p className="bold-16 text-blue-500 ml-2">{t.guide.currentNote}</p>
              </div>
              <p className="regular-16 text-gray-20">{t.guide.status1}</p>
              <p className="regular-16 text-gray-20">{t.guide.status2}</p>
              <p className="regular-16 text-gray-20">{t.guide.status3}</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="bold-20 mt-2">{t.guide.step2}</p>

                {/* <p className="bold-16 text-blue-500">{t.guide.secondCurrent}</p> */}
              </div>
              <p className="regular-16 text-gray-20">{t.guide.status4}</p>
              <p className="regular-16 text-gray-20">{t.guide.status5}</p>
              <p className="regular-16 text-gray-20">{t.guide.status6}</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                {/* <p className="bold-16 text-blue-500">{t.guide.currentNote}</p> */}
              </div>
              <p className="bold-20 mt-2">{t.guide.step3}</p>
              <p className="regular-16 text-gray-20">{t.guide.status7}</p>
              <p className="regular-16 text-gray-20">{t.guide.status8}</p>
              <p className="regular-16 text-gray-20">{t.guide.status9}</p>
            </div>
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="bold-20 mt-2">{t.guide.step4}</p>
                {/* <p className="bold-16 text-blue-500">{t.guide.currentNote}</p> */}
              </div>
              <p className="regular-16 text-gray-20">{t.guide.status10}</p>
              <p className="regular-16 text-gray-20">{t.guide.status11}</p>
              <p className="regular-16 text-gray-20">{t.guide.status12}</p>
            </div>

            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <h4 className="bold-20  whitespace-nowrap">{t.guide.step5}</h4>
                <p className="bold-16 text-blue-500 ml-2 mt-1">{t.guide.finalNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
