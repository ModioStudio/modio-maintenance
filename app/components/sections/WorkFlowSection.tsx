"use client"

import Image from "next/image"
import { useState } from "react"
import { Envelope, Package, PaperPlaneTilt, Handshake, CheckCircle } from "phosphor-react"

import TEXT from "@/lib/workflow"

export default function Workflow() {
  const [selectedPackage, setSelectedPackage] = useState(1)
  const [isHoveredSend, setIsHoveredSend] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSend = () => {
    setIsSent(true)
    setTimeout(() => setIsSent(false), 2000)
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 text-center relative px-5 sm:px-8 lg:px-12">


      <h1 className="mb-4 text-balance text-4xl font-normal leading-tight tracking-tight text-foreground md:text-5xl">
        <span>{TEXT.title.part1}</span>{" "}
        <span className="relative inline-block">
          <span className="relative z-10 font-kaushan">{TEXT.title.part2}</span>
          <Image
            src="/assets/underline_one.svg"
            alt="underline"
            fill
            className="absolute bottom-0 left-0 w-full h-[0.5em] object-contain z-0 pointer-events-none translate-y-1/2"
          />
        </span>{" "}
        <span>{TEXT.title.combined}</span>
        <span className="sm:hidden"> </span>
        {" " + TEXT.title.end}
      </h1>


      <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 lg:gap-6 max-w-[360px] sm:max-w-2xl lg:max-w-6xl mx-auto">
        <div className="relative pt-12 sm:pt-10 flex flex-col bg-gradient-to-bl from-slate-50 to-zinc-200 rounded-2xl border border-neutral-300 overflow-visible shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1">

          <div className="absolute -top-7 left-5 sm:left-6 flex flex-col items-center justify-center w-14 h-[4.5rem] sm:w-12 sm:h-16 bg-neutral-900 rounded-lg sm:rounded-sm shadow-lg shadow-black/30">
            <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-neutral-600"></div>
            <Package size={26} color="#FBFBFB" className="mt-2" weight="duotone" />
          </div>

          <div className="px-5 sm:px-6 pt-4 pb-6 flex flex-col flex-1">
            <div className="text-left mb-5">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900">{TEXT.packageBox.title}</h2>
              <p className="text-neutral-500 mt-1 text-xs sm:text-sm leading-relaxed">{TEXT.packageBox.description}</p>
            </div>

            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-left">
              {TEXT.packageBox.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPackage(i)}
                  className={`p-3.5 sm:p-3 rounded-xl cursor-pointer transition-all duration-200 text-left ${
                    i === selectedPackage
                      ? "bg-neutral-900 scale-[1.02] shadow-md"
                      : "border border-dashed border-neutral-400 hover:bg-white/60 hover:border-neutral-500 active:scale-[0.98]"
                  }`}
                >
                  <span
                    className={`flex items-center gap-2 ${i === selectedPackage ? "text-[#FBFBFB]" : "text-neutral-600"}`}
                  >
                    {i === selectedPackage && (
                      <CheckCircle size={16} weight="fill" className="text-[#FF9D00] shrink-0" />
                    )}
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative pt-12 sm:pt-10 flex flex-col bg-gradient-to-bl from-slate-50 to-zinc-200 rounded-2xl border border-neutral-300 overflow-visible shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute -top-7 left-5 sm:left-6 flex flex-col items-center justify-center w-14 h-[4.5rem] sm:w-12 sm:h-16 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg sm:rounded-sm shadow-lg shadow-black/30">
            <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-neutral-600"></div>
            <Envelope size={26} color="#FBFBFB" className="mt-2" weight="duotone" />
          </div>

          <div className="px-5 sm:px-6 pt-4 pb-6 flex flex-col flex-1">
            <div className="text-left mb-5">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900">{TEXT.briefingBox.title}</h2>
              <p className="text-neutral-500 mt-1 text-xs sm:text-sm leading-relaxed">{TEXT.briefingBox.description}</p>
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <div className="p-3 rounded-2xl border border-neutral-700 bg-neutral-950 shadow-lg">
                <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 w-full h-9 rounded-lg flex items-center px-3.5 border border-neutral-700/50">
                  <p className="text-neutral-200 text-xs sm:text-sm font-medium truncate">
                    {TEXT.briefingBox.messageTitle}
                  </p>
                </div>

                <div className="mt-3 bg-gradient-to-br from-neutral-900 to-neutral-950 w-full rounded-lg p-4 border border-neutral-800/50">
                  <p className="text-neutral-300 text-xs sm:text-sm mb-4 text-left leading-relaxed">
                    {TEXT.briefingBox.messageBody}
                  </p>

                  <button
                    onClick={handleSend}
                    onMouseEnter={() => setIsHoveredSend(true)}
                    onMouseLeave={() => setIsHoveredSend(false)}
                    className={`w-full py-2.5 text-sm font-medium rounded-lg shadow-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.97] ${
                      isSent
                        ? "bg-green-500 text-white"
                        : "bg-[#FF9D00] text-white hover:bg-[#ffb23c] hover:shadow-lg hover:shadow-orange-500/20"
                    }`}
                  >
                    {isSent ? (
                      <>
                        <CheckCircle size={18} weight="bold" />
                        <span>Sent!</span>
                      </>
                    ) : (
                      <PaperPlaneTilt
                        size={18}
                        weight="fill"
                        className={`transition-transform duration-200 ${isHoveredSend ? "translate-x-0.5 -translate-y-0.5" : ""}`}
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-12 sm:pt-10 flex flex-col bg-gradient-to-bl from-slate-50 to-zinc-200 rounded-2xl border border-neutral-300 overflow-visible md:col-span-2 lg:col-span-1 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute -top-7 left-5 sm:left-6 flex flex-col items-center justify-center w-14 h-[4.5rem] sm:w-12 sm:h-16 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg sm:rounded-sm shadow-lg shadow-black/30">
            <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-neutral-600"></div>
            <Handshake size={26} color="#FBFBFB" className="mt-2" weight="duotone" />
          </div>

          <div className="px-5 sm:px-6 pt-4 pb-6 flex flex-col flex-1">
            <div className="text-left mb-5">
              <h2 className="text-lg sm:text-xl font-semibold text-neutral-900">{TEXT.handoverBox.title}</h2>
              <p className="text-neutral-500 mt-1 text-xs sm:text-sm leading-relaxed">{TEXT.handoverBox.description}</p>
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <div className="p-3 rounded-2xl border border-neutral-700 bg-neutral-950 shadow-lg flex-1">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 w-full h-full min-h-[120px] sm:min-h-[140px] rounded-lg p-4 flex items-center justify-center border border-neutral-800/50 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF9D00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <Package
                      size={80}
                      weight="duotone"
                      className="text-neutral-300 group-hover:text-[#FF9D00] transition-colors duration-300 group-hover:scale-105 transform"
                    />
                    <div className="absolute -inset-4 border border-dashed border-neutral-700 rounded-full opacity-50 group-hover:border-[#FF9D00]/30 group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
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
          maskImage: "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
          WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0) 90%)",
        }}
      />
    </section>
  )
}
