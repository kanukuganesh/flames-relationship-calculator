"use client";

import { FLAMES } from "@/lib/flames";
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

const LABELS = ["Friends", "Love", "Affection", "Marriage", "Enemies", "Siblings"];

export interface FlamesWheelHandle {
    highlightLetter: (letter: string) => void;
    eliminateLetter: (letter: string) => void;
    setWinner: (letter: string) => void;
}

const FlamesWheel = forwardRef<FlamesWheelHandle>(function FlamesWheel(_props, ref) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        buildWheel();
    }, []);

    function buildWheel() {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = "";

        FLAMES.forEach((letter, i) => {
            const angle = i * 60 - 90; // start from top
            const rad = (angle * Math.PI) / 180;
            const radius = 42;
            const x = 50 + radius * Math.cos(rad);
            const y = 50 + radius * Math.sin(rad);

            const el = document.createElement("div");
            el.className = "flame-letter absolute flex flex-col items-center";
            el.style.left = `${x}%`;
            el.style.top = `${y}%`;
            el.style.transform = "translate(-50%, -50%)";
            el.id = `flame-${letter}`;
            el.innerHTML = `
        <div class="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 text-2xl font-black shadow-lg transition-all duration-300">
          ${letter}
        </div>
        <span class="text-[10px] font-bold uppercase tracking-widest mt-2 text-slate-400">${LABELS[i]}</span>
      `;
            containerRef.current!.appendChild(el);
        });
    }

    useImperativeHandle(ref, () => ({
        highlightLetter(letter: string) {
            const el = document.getElementById(`flame-${letter}`);
            if (el) {
                const inner = el.querySelector("div");
                if (inner) {
                    inner.classList.add("border-primary", "text-primary");
                }
                el.classList.add("highlight");
            }
        },
        eliminateLetter(letter: string) {
            const el = document.getElementById(`flame-${letter}`);
            if (el) {
                el.classList.remove("highlight");
                el.classList.add("eliminated");
            }
        },
        setWinner(letter: string) {
            const el = document.getElementById(`flame-${letter}`);
            if (el) {
                el.classList.add("winner");
            }
        },
    }));

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-sm mx-auto aspect-square mb-6"
        />
    );
});

export default FlamesWheel;
