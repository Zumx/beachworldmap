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
      <a className="blog-link" href="/blog" style={{ position: "absolute", top: 16, right: 16, zIndex: 1000, background: "rgba(255,255,255,0.94)", padding: "7px 12px", borderRadius: 8, boxShadow: "0 2px 10px rgba(0,0,0,0.18)", marginLeft: 0 }}>📖 Blog</a>
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
