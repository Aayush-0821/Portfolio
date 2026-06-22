"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import BootLoader from "./BootLoader";

export default function Portfolio({
  started = false,
  musicEnabled = false,
  setStarted,
  setMusicEnabled,
}: {
  started?: boolean;
  musicEnabled?: boolean;
  setStarted: (v: boolean) => void;
  setMusicEnabled: (v: boolean) => void;
}) {
  return (
    <main className="min-h-screen bg-[#fff7b3]">
      <BootLoader setStarted={setStarted} setMusicEnabled={setMusicEnabled} />

      <Navbar started={started} musicEnabled={musicEnabled} />

      <Hero started={started} musicEnabled={musicEnabled} />
    </main>
  );
}
