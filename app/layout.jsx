import "./globals.css";
import { Navigation } from "./Navigation";

export const metadata = {
  title: "Heave",
  description: "We elevate brands through viral marketing strategies we’ve mastered in the past.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
