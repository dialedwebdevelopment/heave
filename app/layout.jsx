import "./globals.css";
import { Navigation } from "./Navigation";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Heave",
  description: "We elevate brands through viral marketing strategies we’ve mastered in the past.",
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
      <body className={poppins.className} >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
