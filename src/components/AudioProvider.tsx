"use client";

import { useEffect } from "react";
import { preLoadSounds } from "../utils/sound";

export default function AudioProvider(){
    useEffect(()=>{
        preLoadSounds();
    },[]);

    return null;
}