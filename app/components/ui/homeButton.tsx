import Link from "next/link";

export default function BackToHomeButton() {
  return (
    <Link href="/" className="
      inline-block
      px-5 py-3
      mt-8
      bg-gray-900 dark:bg-gray-100
      text-white dark:text-gray-900
      font-medium
      rounded-lg
      shadow
      hover:bg-gray-700 dark:hover:bg-gray-200
      transition-colors
      duration-200
    ">
      Zur Startseite
    </Link>
  );
}
