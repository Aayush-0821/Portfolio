"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import type { ReactNode, ElementType } from "react";

export type Mode = "scattered" | "slow" | "fast";

function randomWaypoint(limitX = 70, limitY = 50) {
  return {
    x: Math.random() * limitX*2 - limitX,
    y: Math.random() * limitY*2 - limitY,
    rotate: Math.random() * 30 - 15,
  };
}

export function Piece({
  as = "div",
  limitX,
  limitY,
  mode,
  speed = 0.9, // multiplier: >1 = faster wander, <1 = slower wander
  className,
  children,
}: {
  as?: ElementType;
  limitX?: number;
  limitY?: number;
  mode: Mode;
  speed?: number;
  className?: string;
  children?: ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const cancelledRef = useRef(false);

  useEffect(() => {
    cancelledRef.current = false;

    if (mode === "scattered") {
      let active = true;

      const wander = async () => {
        while (active && !cancelledRef.current) {
          const target = randomWaypoint(limitX,limitY);
          const duration = (2 + Math.random() * 2) / speed; // 2-4s per leg
          try {
            await animate(
              scope.current,
              { x: target.x, y: target.y, rotate: target.rotate, opacity: 0.9 },
              { duration, ease: "easeInOut" },
            );
          } catch {
            break;
          }
        }
      };

      wander();

      return () => {
        active = false;
        cancelledRef.current = true;
      };
    }

    cancelledRef.current = true;
    const duration = mode === "slow" ? 2 : 0.35;
    const ease =
      mode === "slow"
        ? ([0.22, 1, 0.36, 1] as const)
        : ([0.4, 0, 0.2, 1] as const);

    animate(
      scope.current,
      { x: 0, y: 0, rotate: 0, opacity: 1 },
      { duration, ease },
    );

    return () => {
      cancelledRef.current = true;
    };
  }, [mode]);

  const Component = motion[as as keyof typeof motion] ?? motion.div;

  return (
    //@ts-expect-error
    <Component ref={scope} className={className}>
      {children}
    </Component>
  );
}
