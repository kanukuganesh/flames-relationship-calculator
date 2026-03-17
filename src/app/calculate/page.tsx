"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import FlamesWheel, { FlamesWheelHandle } from "@/components/FlamesWheel";
import { cancelLetters, eliminateFlames } from "@/lib/flames";

function sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
}

function CalculateContent() {
    const params = useSearchParams();
    const router = useRouter();
    const wheelRef = useRef<FlamesWheelHandle>(null);
    const [count, setCount] = useState<number | null>(null);
    const [statusText, setStatusText] = useState("Discovering");
    const hasRun = useRef(false);

    const name1 = params.get("name1") || "Name 1";
    const name2 = params.get("name2") || "Name 2";

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        async function runAnimation() {
            await sleep(800);

            const { count: n } = cancelLetters(name1, name2);
            const { result, steps } = eliminateFlames(n);

            await sleep(800);

            // Show count
            setCount(n);
            setStatusText(`Stepping through FLAMES with count ${n}`);
            await sleep(1200);

            // Animate eliminations
            for (let i = 0; i < steps.length; i++) {
                const step = steps[i];
                wheelRef.current?.highlightLetter(step.eliminated);
                setStatusText(`Eliminating "${step.eliminated}"...`);
                await sleep(700);
                wheelRef.current?.eliminateLetter(step.eliminated);
                await sleep(400);
            }

            // Show winner
            wheelRef.current?.setWinner(result);
            setStatusText("Result found!");
            await sleep(1200);

            // Navigate to result
            router.push(
                `/result?name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}&result=${result}`
            );
        }

        runAnimation();
    }, [name1, name2, router]);

    return (
        <div className="min-h-screen flex flex-col relative">
            <Header variant="inner" />

            <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-4xl mx-auto w-full">
                {/* Title */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                        Analyzing Your <span className="text-primary">Destiny</span>
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Finding the connection between your souls...
                    </p>
                </div>

                {/* Name Cards */}
                <div className="grid grid-cols-2 gap-8 w-full max-w-md mb-8">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-white shadow-xl mb-3">
                            <span className="material-symbols-outlined text-primary text-4xl">
                                person
                            </span>
                        </div>
                        <h3 className="text-2xl font-black tracking-tight truncate max-w-[160px]">
                            {name1}
                        </h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-white shadow-xl mb-3">
                            <span className="material-symbols-outlined text-primary text-4xl">
                                favorite_border
                            </span>
                        </div>
                        <h3 className="text-2xl font-black tracking-tight truncate max-w-[160px]">
                            {name2}
                        </h3>
                    </div>
                </div>

                {/* Count Badge */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                        Letter Count:
                    </span>
                    <span
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-black text-lg ${count !== null ? "animate-count-tick" : ""
                            }`}
                    >
                        {count !== null ? count : "—"}
                    </span>
                </div>

                {/* FLAMES Wheel */}
                <FlamesWheel ref={wheelRef} />

                {/* Status */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-white p-4 rounded-full shadow-lg border border-primary/10 animate-heartbeat">
                        <span className="material-symbols-outlined text-5xl text-primary">
                            favorite
                        </span>
                    </div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-primary dot-anim">
                        {statusText}
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </p>
                </div>
            </main>

            <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
        </div>
    );
}

export default function CalculatePage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">Loading...</span>
                </div>
            }
        >
            <CalculateContent />
        </Suspense>
    );
}
