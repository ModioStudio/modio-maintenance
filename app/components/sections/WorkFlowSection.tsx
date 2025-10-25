import { useTranslations } from "next-intl";
import Image from "next/image";
import { Package } from "phosphor-react";

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
            <div className="absolute -top-8 flex ml-4  flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/36">
              {" "}
              <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>{" "}
              <Package size={24} color="#FBFBFB" className="mt-3" />{" "}
            </div>{" "}
            <div className="text-left mt-12">
              {" "}
              <h2 className="text-2xl">Wähle dein Paket</h2>{" "}
              <p className="text-gray-500 mt-1">
                {" "}
                Finde das passende Angebot für dein Projekt.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3">
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

        <div className="mt-20 flex flex-col bg-gradient-to-bl from-slate-50 to-zinc-200 items-center rounded-xl w-95 border border-neutral-400">
          {" "}
          <div className="relative flex flex-col mb-6">
            {" "}
            <div className="absolute  ml-4 -top-8 flex flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/36">
              {" "}
              <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>{" "}
              <Package size={24} color="#FBFBFB" className="mt-3" />{" "}
            </div>{" "}
            <div className="text-left mt-12">
              {" "}
              <h2 className="text-2xl">Wähle dein Paket</h2>{" "}
              <p className="text-gray-500 mt-1">
                {" "}
                Finde das passende Angebot für dein Projekt.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3">
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

        <div className="mt-20 flex flex-col bg-gradient-to-bl from-slate-50 to-zinc-200 items-center rounded-xl w-95 border border-neutral-400">
          {" "}
          <div className="relative flex flex-col mb-6">
            {" "}
            <div className="absolute -top-8  ml-4 flex flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/36">
              {" "}
              <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>{" "}
              <Package size={24} color="#FBFBFB" className="mt-3" />{" "}
            </div>{" "}
            <div className="text-left mt-12">
              {" "}
              <h2 className="text-2xl">Wähle dein Paket</h2>{" "}
              <p className="text-gray-500 mt-1">
                {" "}
                Finde das passende Angebot für dein Projekt.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3">
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
