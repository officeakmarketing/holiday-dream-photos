import { Fraunces, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { brand } from "../brand";

const fraunces = Fraunces({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: {
    default: "Holiday Dream Photos | Premium Santa Experiences",
    template: "%s | Holiday Dream Photos",
  },
  description: "Book an unhurried, magical holiday photo experience with our authentic Traditional and Black Santas. Perfect for families, corporate events, and private parties.",
  keywords: ["Santa photos", "Black Santa", "Traditional Santa", "Holiday photos", "Private Santa events"],
  openGraph: {
    title: "Holiday Dream Photos | Premium Santa Experiences",
    description: "Book an unhurried, magical holiday photo experience with our authentic Traditional and Black Santas.",
    type: "website",
    locale: "en_US",
    siteName: "Holiday Dream Photos",
  },
};

import AnimationProvider from "../components/animations/AnimationProvider";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`antialiased ${montserrat.variable} ${fraunces.variable}`}
    >
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --brand-dark: ${brand.colors.dark};
            --brand-light: ${brand.colors.light};
            --brand-red: ${brand.colors.red};
            --brand-red-dark: ${brand.colors.redDark};
          }
        `}} />
      </head>
      <body suppressHydrationWarning className="flex flex-col min-h-screen font-sans bg-brand-light text-brand-dark">
        <AnimationProvider>
          <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        </AnimationProvider>
      </body>
    </html>
  );
}
