import "../app/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className="bg-[#FBFBFB] text-[#0A0A0A]">{children}</body>
    </html>
  );
}