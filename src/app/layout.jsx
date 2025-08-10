import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Heave",
  description: "We elevate brands through viral marketing strategies we’ve mastered in the past.",
  keywords: [
    "organic marketing",
    "Gen Z marketing",
    "Millennial marketing",
    "authentic brand storytelling",
    "cultural relevance marketing",
    "brand alignment strategies",
    "audience engagement",
    "brand growth strategies",
    "digital brand building",
    "social-first campaigns",
    "community-driven marketing",
    "brand storytelling agency",
    "authentic content creation",
    "purpose-driven branding",
    "creative brand strategy",
    "modern brand marketing",
    "organic growth strategies",
    "audience-first marketing",
    "content-led marketing",
    "branding for Gen Z"
  ],  
  applicationName: 'Heave',
  openGraph: {
    title: "Heave",
    description: "We elevate brands through viral marketing strategies we’ve mastered in the past.",
    url: "https://www.heavecorp.com/",
    siteName: "Heave",
    images: ["/brand/heavecorp_logo.jpeg"],
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
