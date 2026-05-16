"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../components/MapView"), { ssr: false });

export default function Home() {
  return (
    <main className="map-root">
      <MapView />
      <div className="overlay">
        <h1>🏖️ Beach World Map</h1>
        <p>Every beach on Earth, sourced live from OpenStreetMap. Zoom in and find your next stretch of sand — from tropical lagoons to wild northern coasts.</p>
        <span className="count" id="point-count">
          Loading beaches…
        </span>
      </div>
      <div className="footer-credit">
        Data &copy;{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
          OpenStreetMap
        </a>{" "}
        contributors
      </div>
    </main>
  );
}
