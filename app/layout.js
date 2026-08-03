import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import { brand } from "../brand";

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
  const headingFontFamily = brand.fonts.heading.replace(/ /g, '+');
  const bodyFontFamily = brand.fonts.body.replace(/ /g, '+');
  
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --brand-dark: ${brand.colors.dark};
            --brand-light: ${brand.colors.light};
            --brand-red: ${brand.colors.red};
            --brand-red-dark: ${brand.colors.redDark};
            --font-sans: "${brand.fonts.body}", sans-serif;
            --font-heading: "${brand.fonts.heading}", serif;
          }
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={`https://fonts.googleapis.com/css2?family=${headingFontFamily}:wght@400;500;600;700&family=${bodyFontFamily}:wght@400;500;600;700&display=swap`} rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen font-sans bg-brand-light text-brand-dark">
        <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
