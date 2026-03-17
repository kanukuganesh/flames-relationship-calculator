"use client";

import { useEffect } from "react";

interface ConfettiEffectProps {
    accentColor: string;
}

export default function ConfettiEffect({ accentColor }: ConfettiEffectProps) {
    useEffect(() => {
        const colors = [accentColor, "#f4258c", "#ff6eb4", "#fbbf24", "#34d399", "#818cf8"];

        for (let i = 0; i < 60; i++) {
            const piece = document.createElement("div");
            piece.className = "confetti-piece";
            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.setProperty("--d", `${2 + Math.random() * 3}s`);
            piece.style.setProperty("--delay", `${Math.random() * 1.5}s`);
            piece.style.width = `${6 + Math.random() * 8}px`;
            piece.style.height = `${6 + Math.random() * 8}px`;
            piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
            document.body.appendChild(piece);

            setTimeout(() => piece.remove(), 5500);
        }
    }, [accentColor]);

    return null;
}
