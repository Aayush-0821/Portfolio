"use client";

import Portfolio from "../components/Portfolio";
import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);

  return (
    <Portfolio
      started={started}
      musicEnabled={musicEnabled}
      setStarted={setStarted}
      setMusicEnabled={setMusicEnabled}
    />
  );
}