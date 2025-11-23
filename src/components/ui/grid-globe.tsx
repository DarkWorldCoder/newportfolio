"use client";
import React from "react";
import { Globe } from "./globe";

export function GridGlobe() {
  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden rounded-lg bg-transparent">
      <Globe className="top-0" config={{
        width: 800,
        height: 800,
        onRender: () => { },
        devicePixelRatio: 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 12,
        baseColor: [0.2, 0.2, 0.25],
        markerColor: [0.3, 0.8, 1],
        glowColor: [0.3, 0.3, 0.5],
        markers: [
          { location: [27.7172, 85.3240], size: 0.15 }, // Nepal (Kathmandu) - largest marker
          { location: [40.7128, -74.0060], size: 0.12 }, // USA (New York)
          { location: [43.6532, -79.3832], size: 0.1 }, // Canada (Toronto)
          { location: [51.5074, -0.1278], size: 0.1 }, // UK (London)
          { location: [-33.8688, 151.2093], size: 0.08 }, // Australia (Sydney)
          { location: [35.6762, 139.6503], size: 0.07 }, // Japan (Tokyo)
          { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
          { location: [25.2048, 55.2708], size: 0.07 }, // UAE (Dubai)
          { location: [52.5200, 13.4050], size: 0.06 }, // Germany (Berlin)
          { location: [-23.5505, -46.6333], size: 0.06 }, // Brazil (São Paulo)
        ],
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-20" />
    </div>
  );
}
