import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berke Kanber | Software Developer",
  icons: {
    icon: "/chefberke.png",
  },
  description:
    "I'm Berke Kanber, a software developer specializing in Next.js, React, and modern web technologies. Explore my projects, skills, and experience.",
  keywords: [
    "Berke Kanber",
    "Frontend Developer",
    "Software Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
    "UI/UX",
    "JavaScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {Array.isArray(metadata.keywords) && (
          <meta name="keywords" content={metadata.keywords.join(", ")} />
        )}
      </head>

      <body className={`${poppins.className} bg-black text-white`}>
        <Analytics />
        <div className="flex items-center justify-center w-full h-screen px-4 md:px-8">
          <div className="flex flex-col items-start justify-start max-w-2xl w-full h-screen pt-16">
            <Navbar />
            <div className="mt-20">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
