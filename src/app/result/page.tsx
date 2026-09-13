"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import ConfettiEffect from "@/components/ConfettiEffect";
import { RESULT_DATA, type FlamesLetter } from "@/lib/flames";

function ResultContent() {
    const params = useSearchParams();

    const name1 = params.get("name1") || "Name 1";
    const name2 = params.get("name2") || "Name 2";
    const resultLetter = (params.get("result") || "F") as FlamesLetter;
    const data = RESULT_DATA[resultLetter] || RESULT_DATA.F;

    return (
        <div className="min-h-screen flex flex-col relative">
            <Header variant="inner" />

            <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden celebration-gradient">
                {/* Background blobs */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />

                {/* Floating icons */}
                <span className="material-symbols-outlined absolute top-40 left-[15%] text-primary/20 text-6xl animate-float">
                    celebration
                </span>
                <span
                    className="material-symbols-outlined absolute bottom-40 right-[15%] text-secondary/20 text-6xl animate-float"
                    style={{ animationDelay: "1s" }}
                >
                    auto_awesome
                </span>

                <div className="max-w-lg w-full text-center z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-primary/20 mb-6">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                        </span>
                        <span className="text-primary text-xs font-black uppercase tracking-widest">
                            Destiny Decided
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-slate-900 text-5xl md:text-7xl font-black leading-none tracking-tighter mb-4">
                        The Universe Has <span className="text-primary italic">Spoken!</span>
                    </h1>
                    <p className="text-slate-600 text-xl font-medium mb-8">
                        The cosmic energy between{" "}
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg font-bold">
                            {name1}
                        </span>{" "}
                        and{" "}
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg font-bold">
                            {name2}
                        </span>{" "}
                        is...
                    </p>

                    {/* Result Card */}
                    <div className="result-glow inline-flex flex-col items-center justify-center bg-white rounded-3xl p-10 shadow-2xl border border-primary/10 mb-8">
                        <div className="mb-4">
                            <span
                                className="material-symbols-outlined text-6xl"
                                style={{ color: data.color }}
                            >
                                {data.icon}
                            </span>
                        </div>
                        <div
                            className="w-28 h-28 rounded-full flex items-center justify-center text-white text-6xl font-black mb-6 shadow-2xl"
                            style={{
                                background: `linear-gradient(135deg, ${data.color}, ${data.color}dd)`,
                            }}
                        >
                            {resultLetter}
                        </div>
                        <h2
                            className="text-4xl md:text-5xl font-black tracking-tight mb-3"
                            style={{ color: data.color }}
                        >
                            {data.label}
                        </h2>
                        <p className="text-lg font-semibold text-slate-500 mb-6">
                            {name1} {data.emoji} {name2}
                        </p>
                        <p className="text-slate-600 leading-relaxed text-base max-w-sm">
                            {data.description}
                        </p>
                    </div>

                    {/* Play Again */}
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 rounded-full border-2 border-primary/30 hover:border-primary px-10 py-4 text-sm font-extrabold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-primary/20"
                    >
                        <span className="material-symbols-outlined text-xl group-hover:rotate-180 transition-transform duration-500">
                            refresh
                        </span>
                        Play Again
                    </Link>

                </div>

                <ConfettiEffect accentColor={data.color} />
            </main>

            {/* Footer */}
            <footer className="py-12 border-t border-primary/5 bg-white/50 backdrop-blur-sm">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">
                            favorite
                        </span>
                        <p className="text-slate-500 text-sm font-medium">
                            &copy; {new Date().getFullYear()} FLAMES Calculator Online. Free Love Compatibility Test.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <a className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="https://flames143.vercel.app/">
                            Home
                        </a>
                        <a className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="https://flames143.vercel.app/#about">
                            About
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function ResultPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">Loading...</span>
                </div>
            }
        >
            <ResultContent />
        </Suspense>
    );
}
