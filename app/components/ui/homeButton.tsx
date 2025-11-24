import Link from "next/link";

export default function BackToHomeButton() {
  return (
    <Link href="/" className="
      inline-block
      px-5 py-3
      mt-8
      bg-[#0a0a0a] dark:bg-gray-100
      text-[#FBFBFB] dark:text-[#0a0a0a]
      font-medium
      rounded-lg
      shadow
      hover:bg-zinc-700 dark:hover:bg-gray-200
      transition-colors
      duration-200
    ">
      Zur Startseite
    </Link>
  );
}
