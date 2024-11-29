import "./globals.css";
import { Navigation } from "./Navigation";

export const metadata = {
  title: "Heave",
  description: "We elevate brands through viral marketing strategies we’ve mastered in the past.",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
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
