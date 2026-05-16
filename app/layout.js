import "./globals.css";

export const metadata = {
  title: "Beach World Map — Every beach on Earth",
  description: "An interactive world map of every beach from OpenStreetMap. Find sandy shores, hidden coves and coastlines anywhere on the planet.",
  openGraph: {
    title: "Beach World Map",
    description: "An interactive world map of every beach from OpenStreetMap. Find sandy shores, hidden coves and coastlines anywhere on the planet.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
