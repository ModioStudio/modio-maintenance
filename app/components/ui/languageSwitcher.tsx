"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const toggleLanguage = () => {
    let newPath = pathname;

    if (pathname.includes("/maintenance")) {
      newPath = isEnglish ? "/de/maintenance" : "/en/maintenance";
    } else {
      newPath = isEnglish ? pathname.replace("/en", "/de") : pathname.replace("/de", "/en");
    }

    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed 
      bottom-6 
      right-6
    bg-gray-900 
    text-white
      px-4 
      py-2 
      rounded-full 
      shadow-lg 
      hover:cursor-pointer"
    >
      {isEnglish ? "DE" : "EN"}
    </button>
  );
}
