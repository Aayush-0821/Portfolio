"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import BootLoader from "./BootLoader";
import About from "./About";
import { useEffect } from "react";
import Skills from "./Skills";
import Projects from "./Project";
import Experience from "./Experience";
import Resume from "./Resume/Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import toast, {Toaster} from "react-hot-toast";

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
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(
      "%cHold Up!",
      "color: #ca2a30; font-size: 60px; font-weight:bold; text-shadow: 2px 2px 0 #000; font-family: sans-serif;",
    );
    console.log(
      "%cIf someone told you to copy/paste something here, there is a 11/10 chance you're being scammed.",
      "color: #fff; font-size: 18px; font-weight: bold; padding: 10px; font-family: sans-serif;",
    );
    console.log(
      "%cBut since you're a dev checking out my source code... Welcome to the Matrix! Drop me a message in the contact section if you like what you see.",
      "color: #00ff00; font-size: 14px; font-family: monospace; padding-top: 10px;",
    );

    let devToolsAttempts = 0;

    const handleContextMenu = (e: MouseEvent) => {
      devToolsAttempts++;
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      let blocked = false;

      if (e.key === "F12") {
        blocked = true;
      }

      if (
        (e.ctrlKey &&
          e.shiftKey &&
          (e.key.toLowerCase() === "i" || e.key.toLowerCase() === "j")) ||
        (e.metaKey &&
          e.altKey &&
          (e.key.toLowerCase() === "i" || e.key.toLowerCase() === "j"))
      ) {
        blocked = true;
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") blocked = true;

      if(blocked){
        e.preventDefault();
        toast.dismiss();
        devToolsAttempts++;

        if(devToolsAttempts === 1){
          toast.error("Hey! No peeking at the source code!");
        }
        else if(devToolsAttempts === 3){
          toast.error("Seriously? I said no peeking!");
        }
        else if(devToolsAttempts === 5){
          toast.error("Okay, you're persistent. Still blocked though.");
        }
        else if(devToolsAttempts > 7){
          toast.error("Alright, I respect the grind. You win nothing.");
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <main className="min-h-screen bg-[#fff7b3] select-none">

    <Toaster 
      position="bottom-right"
      toastOptions={{
        style:{
          border: "4px solid #222",
          borderRadius: "12px",
          background: "#fff",
          color: "#111",
          fontWeight: "900",
          boxShadow: "4px 4px 0px #222",
        }
      }}
    />

      <BootLoader setStarted={setStarted} setMusicEnabled={setMusicEnabled} />

      <Navbar started={started} musicEnabled={musicEnabled} />

      <Hero started={started} musicEnabled={musicEnabled} />

      <About musicEnabled={musicEnabled} />

      <Skills musicEnabled={musicEnabled} />

      <Projects musicEnabled={musicEnabled} />

      <Experience />

      <Resume musicEnabled={musicEnabled} />

      <Contact musicEnabled={musicEnabled} />

      <Footer musicEnabled={musicEnabled} />
    </main>
  );
}
