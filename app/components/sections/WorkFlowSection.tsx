import Image from "next/image";
import {
  Envelope,
  Package,
  PaperPlaneTilt,
} from "phosphor-react";

import TEXT from "@/lib/workflow";

export default function Workflow() {
  return (
    <div className="py-8 lg:py-16 text-center relative">
      <h1 className="text-2xl md:text-4xl font-semibold inline-block relative">
        <span>{TEXT.title.part1}</span>{" "}
        <span className="relative inline-block mb-2 md:mb-3">
          <span className="relative z-10 font-kaushan">{TEXT.title.part2}</span>
          <Image
            src="/assets/underline_one.svg"
            alt="underline"
            fill
            className="absolute mt-4 md:mt-6 bottom-0 left-0 w-full h-[0.6em] object-contain z-0 pointer-events-none"
          />
        </span>{" "}
        <span>{TEXT.title.combined}</span>
        <br />
        {TEXT.title.end}
      </h1>

      <div className="mt-10 flex flex-col items-center md:flex-row md:justify-center md:items-stretch gap-6 px-4">

        <div className="mt-20 flex flex-col bg-gradient-to-bl from-slate-50 to-zinc-200 items-center rounded-xl w-95 border border-neutral-400">
          <div className="relative flex flex-col mb-6">
            <div className="absolute -top-8 flex -ml-12 flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/36">
              <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>
              <Package size={24} color="#FBFBFB" className="mt-3" />
            </div>
            <div className="text-left mt-12">
              <h2 className="text-2xl -ml-12 font-semibold">
                {TEXT.packageBox.title}
              </h2>
              <p className="text-gray-500 mt-1 text-xs -ml-12">
                {TEXT.packageBox.description}
              </p>
            </div>
          </div>

          <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3 text-xs text-left">
            {TEXT.packageBox.items.map((item, i) => (
              <div
                key={i}
                className={
                  i === 1
                    ? "p-3 rounded-xl bg-black cursor-pointer transition-colors"
                    : "p-2 rounded-xl cursor-pointer transition-colors border border-dashed border-neutral-500"
                }
              >
                <span className={i === 1 ? "text-[#FBFBFB]" : ""}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center rounded-xl w-95 border-1 border-neutral-400 bg-gradient-to-bl from-slate-50 to-zinc-200 shadow-sm">
          <div className="relative flex flex-col mb-6">
            <div className="absolute -ml-12 -top-8 flex flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/40">
              <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>
              <Envelope size={24} color="#FBFBFB" className="mt-3" />
            </div>

            <div className="text-left mt-12 -ml-12">
              <h2 className="text-2xl font-semibold text-neutral-900">
                {TEXT.briefingBox.title}
              </h2>
              <p className="text-gray-500 mt-1 text-xs">
                {TEXT.briefingBox.description}
              </p>
            </div>
          </div>

          <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3">
            <div className="p-3 rounded-xl border border-zinc-700 bg-[#0a0a0a] shadow-md">
              <div className="bg-gradient-to-bl from-[#3a3a3a] to-[#0000005b] w-full h-7 rounded-md flex items-center px-3">
                <p className="text-[#FBFBFB] text-sm font-medium">
                  {TEXT.briefingBox.messageTitle}
                </p>
              </div>

              <div className="mt-3 bg-gradient-to-bl from-[#1d1d1d] to-[#0000005b] w-full rounded-md p-4 flex flex-col items-center text-center">
                <p className="text-[#FBFBFB] text-sm mb-5 text-left">
                  {TEXT.briefingBox.messageBody}
                </p>

                <button className="px-6 py-1 text-sm font-medium bg-[#FF9D00] text-[#FBFBFB] rounded-md shadow-sm hover:bg-[#ffb23c] transition-colors">
                  <PaperPlaneTilt size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center rounded-xl w-95 border-1 border-neutral-400 bg-gradient-to-bl from-slate-50 to-zinc-200 shadow-sm">
          <div className="relative flex flex-col mb-6">
            <div className="absolute -ml-12 -top-8 flex flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/40">
              <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>
              <Envelope size={24} color="#FBFBFB" className="mt-3" />
            </div>

            <div className="text-left mt-12 -ml-12">
              <h2 className="text-2xl font-semibold text-neutral-900">
                {TEXT.handoverBox.title}
              </h2>
              <p className="text-gray-500 mt-1 text-xs">
                {TEXT.handoverBox.description}
              </p>
            </div>
          </div>

          <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3">
            <div className="p-3 rounded-xl border border-zinc-700 bg-[#0a0a0a] shadow-md">
              <div className="mt-3 bg-gradient-to-bl from-[#1d1d1d] to-[#0000005b] w-full rounded-md p-4 flex flex-col items-center justify-center text-center">
                <Package size={155} weight="thin" color="#FBFBFB" />
              </div>
            </div>
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
      />
    </div>
  );
}
