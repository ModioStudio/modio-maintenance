import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Envelope,
  Package,
  PaperPlaneTilt,
  RocketLaunch,
} from "phosphor-react";

export default function Workflow() {
  const t = useTranslations("workflowSection");

  return (
    <div className="py-8 lg:py-16 text-center relative">
      <h1 className="text-2xl md:text-4xl font-semibold inline-block relative">
        <span>{t("title.part1")}</span>{" "}
        <span className="relative inline-block mb-2 md:mb-3">
          <span className="relative z-10 font-kaushan">{t("title.part2")}</span>
          <Image
            src="/assets/underline_one.svg"
            alt="underline"
            fill
            className="absolute mt-4 md:mt-6 bottom-0 left-0 w-full h-[0.6em] object-contain z-0 pointer-events-none"
          />
        </span>{" "}
        <span>{t("title.combined")}</span>
        <br />
        {t("title.end")}
      </h1>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 px-4">
        <div className="mt-20 flex flex-col bg-gradient-to-bl from-slate-50 to-zinc-200 items-center rounded-xl w-95 border border-neutral-400">
          {" "}
          <div className="relative flex flex-col mb-6">
            {" "}
            <div className="absolute -top-8 flex -ml-12  flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/36">
              {" "}
              <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>{" "}
              <Package size={24} color="#FBFBFB" className="mt-3" />{" "}
            </div>{" "}
            <div className="text-left mt-12">
              {" "}
              <h2 className="text-2xl -ml-12 font-semibold">
                {t("boxes.package.title")}
              </h2>{" "}
              <p className="text-gray-500 mt-1 text-xs -ml-12">
                {" "}
                 {t("boxes.package.description")}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3 text-xs text-left">
            {" "}
            <div className="p-2 rounded-xl cursor-pointer transition-colors border border-dashed border-neutral-500 rounded-t-xl">
              {" "}
              <span>{t("boxes.package.item1")}</span>{" "}
            </div>{" "}
            <div className="p-3 rounded-xl bg-black cursor-pointer transition-colors">
              {" "}
              <span className="text-[#FBFBFB]">{t("boxes.package.item2")}</span>{" "}
            </div>{" "}
            <div className="p-2 rounded-xl ursor-pointer transition-colors border border-dashed border-neutral-500">
              {" "}
              <span>{t("boxes.package.item3")}</span>{" "}
            </div>{" "}
            <div className="p-2 rounded-xl cursor-pointer transition-colors border border-dashed border-neutral-500 rounded-b-xl">
              {" "}
              <span>{t("boxes.package.item4")}</span>{" "}
            </div>{" "}
          </div>{" "}
        </div>

        <div className="mt-20 flex flex-col items-center rounded-xl w-95 border-1 border-neutral-400 bg-gradient-to-bl from-slate-50 to-zinc-200 shadow-sm">
          <div className="relative flex flex-col mb-6">
            <div className="absolute -ml-12 -top-8 flex flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/40">
              <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>
              <Envelope size={24} color="#FBFBFB" className="mt-3" />
            </div>

            <div className="text-left mt-12 -ml-12">
              <h2 className="text-2xl font-semibold text-neutral-900">
                {t("boxes.briefing.title")}
              </h2>
              <p className="text-gray-500 mt-1 text-xs">
                {t("boxes.briefing.description")}
              </p>
            </div>
          </div>

          <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3">
            <div className="p-3 rounded-xl border border-zinc-700 bg-[#0a0a0a] shadow-md">
              <div className=" bg-gradient-to-bl from-[#3a3a3a] to-[#0000005b] w-full h-7 rounded-md flex items-center px-3 shadow-neutral-80 shadow-xs">
                <p className="text-[#FBFBFB] text-sm font-medium">
                  {t("boxes.briefing.messageTitle")}
                </p>
              </div>

              <div className="mt-3 bg-gradient-to-bl from-[#1d1d1d] to-[#0000005b] w-full rounded-md p-4 flex flex-col items-center justify-center text-center">
                <p className="text-[#FBFBFB] text-sm mb-5 text-left">
                    {t("boxes.briefing.messageBody")}
                </p>

                <button className="px-6 py-1 text-sm font-medium bg-[#FF9D00] text-[#FBFBFB] rounded-md shadow-sm hover:bg-[#ffb23c] transition-colors">
                  <PaperPlaneTilt size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col bg-gradient-to-bl from-slate-50 to-zinc-200 items-center rounded-xl w-95 border border-neutral-400">
          {" "}
          <div className="relative flex flex-col mb-6">
            {" "}
            <div className="absolute -top-8 -ml-12 flex flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/36">
              {" "}
              <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>{" "}
              <RocketLaunch size={24} color="#FBFBFB" className="mt-3" />{" "}
            </div>{" "}
            <div className="text-left mt-12">
              {" "}
              <h2 className="text-2xl font-semibold -ml-12">{t("boxes.handover.title")}</h2>{" "}
              <p className="text-gray-500 mt-1 text-xs -ml-12">
                {" "}
                {t("boxes.handover.description")}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3">
            {" "}
            <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3 text-xs">
              {" "}
              <div className="p-2 rounded-xl cursor-pointer transition-colors border border-dashed border-neutral-500 rounded-t-xl">
                {" "}
                <span>Template Website</span>{" "}
              </div>{" "}
              <div className="p-3 rounded-xl bg-black cursor-pointer transition-colors">
                {" "}
                <span className="text-[#FBFBFB]">Custom Website</span>{" "}
              </div>{" "}
              <div className="p-2 rounded-xl ursor-pointer transition-colors border border-dashed border-neutral-500">
                {" "}
                <span>Webdesign</span>{" "}
              </div>{" "}
              <div className="p-2 rounded-xl cursor-pointer transition-colors border border-dashed border-neutral-500 rounded-b-xl">
                {" "}
                 <span>Brandguidelines</span>{" "}
              </div>{" "}
            </div>{" "}

          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `
      repeating-radial-gradient(circle at 0 0, #0a0a0a 0, #0a0a0a 1px, transparent 1px, transparent 100%),
      repeating-radial-gradient(circle at 100% 100%, #0a0a0a 0, #FF9D00 0.5px, transparent 0.5px, transparent 100%)
    `,
          backgroundSize: "3px 3px",
          opacity: 0.15,
          zIndex: -1,
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
        }}
      ></div>
    </div>
  );
}
