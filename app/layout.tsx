import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { metadata as siteMetadata } from "./metadata";
import ProgressBar from "@/components/progress-bar";

const montserrat = Nunito({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {Array.isArray(siteMetadata.keywords) && (
          <meta name="keywords" content={siteMetadata.keywords.join(", ")} />
        )}
      </head>

      <body className={`${montserrat.className} bg-black text-white`}>
        <Analytics />
        <ProgressBar
          height="2px"
          color="#ffffff"
          options={{ showSpinner: false }}
          shallowRouting
        />
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
