import { RocketLaunch, PaperPlaneTilt } from "phosphor-react";

export function uebergabeBox() {
  return (
    <div className="mt-20 flex flex-col bg-gradient-to-bl from-slate-50 to-zinc-200 items-center rounded-xl w-95 border border-neutral-400">
      <div className="relative flex flex-col mb-6">
        <div className="absolute -top-8 -ml-12 flex flex-col items-center justify-center w-12 h-17 bg-neutral-900 rounded-sm shadow-lg shadow-black/36">
          <div className="w-3 h-3 bg-[#FBFBFB] rounded-full border border-dashed border-black"></div>
          <RocketLaunch size={24} color="#FBFBFB" className="mt-3" />
        </div>

        <div className="text-left mt-12">
          <h2 className="text-2xl font-semibold -ml-12">Übergabe</h2>
          <p className="text-gray-500 mt-1 text-xs -ml-12">
            Bereit für den Start? Hier beginnt dein fertiges Projekt. 🚀
          </p>
        </div>
      </div>

      <div className="w-80 overflow-hidden mb-10 flex flex-col gap-3">
        <div className="p-2 rounded-xl cursor-pointer transition-all border border-dashed border-neutral-500 rounded-t-xl h-60 relative overflow-hidden bg-gradient-to-br from-white to-zinc-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-52 h-1 bg-neutral-300 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FF9D00] via-[#FFB733] to-[#FFD580] animate-[slide_2s_ease-in-out_infinite]" />
            </div>
            <PaperPlaneTilt
              size={24}
              weight="fill"
              className="text-[#FF9D00] ml-2 animate-[fly_2s_ease-in-out_infinite]"
            />
          </div>

          <style jsx>{`
            @keyframes slide {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
            @keyframes fly {
              0% {
                transform: translateX(-10px) translateY(0);
                opacity: 0.8;
              }
              50% {
                transform: translateX(10px) translateY(-5px);
                opacity: 1;
              }
              100% {
                transform: translateX(-10px) translateY(0);
                opacity: 0.8;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
