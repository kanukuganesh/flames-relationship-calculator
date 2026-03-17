"use client";

import Link from "next/link";

interface HeaderProps {
    variant?: "home" | "inner";
}

export default function Header({ variant = "home" }: HeaderProps) {
    if (variant === "inner") {
        return (
            <header className="flex items-center justify-between border-b border-primary/10 px-6 py-4 lg:px-40 bg-white/50 backdrop-blur-md sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-2xl">favorite</span>
                    </div>
                    <h2 className="text-xl font-extrabold tracking-tight">
                        FLAMES <span className="text-primary">Master</span>
                    </h2>
                </Link>
            </header>
        );
    }

    return (
        <header className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white text-2xl">
                        local_fire_department
                    </span>
                </div>
                <h2 className="text-slate-900 text-2xl font-extrabold tracking-tight">
                    FLAMES
                </h2>
            </Link>
            <nav className="hidden md:flex items-center gap-10">
                <Link
                    className="text-slate-600 hover:text-primary transition-colors font-semibold"
                    href="/"
                >
                    Home
                </Link>
                <a
                    className="text-slate-600 hover:text-primary transition-colors font-semibold"
                    href="#"
                >
                    How to Play
                </a>
                <a
                    className="text-slate-600 hover:text-primary transition-colors font-semibold"
                    href="#"
                >
                    About
                </a>
            </nav>
            <button className="bg-primary/10 text-primary px-6 py-2.5 rounded-full font-bold hover:bg-primary/20 transition-all">
                Sign In
            </button>
        </header>
    );
}
