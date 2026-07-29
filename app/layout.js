import { Montserrat, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bodoni.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen font-sans bg-[#F9F7F4] text-[#113122]">
        <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
