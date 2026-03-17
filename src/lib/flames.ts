/* ===== FLAMES — Algorithm & Data ===== */

export const FLAMES = ["F", "L", "A", "M", "E", "S"] as const;
export type FlamesLetter = (typeof FLAMES)[number];

export interface ResultData {
    label: string;
    icon: string;
    emoji: string;
    color: string;
    gradient: string;
    description: string;
}

export const RESULT_DATA: Record<FlamesLetter, ResultData> = {
    F: {
        label: "Friends",
        icon: "diversity_3",
        emoji: "🤝",
        color: "#3b82f6",
        gradient: "from-blue-500 to-cyan-400",
        description:
            "A bond built on trust and shared interests. You're destined to be great friends — always there for each other through thick and thin!",
    },
    L: {
        label: "Love",
        icon: "favorite",
        emoji: "❤️",
        color: "#ef4444",
        gradient: "from-red-500 to-pink-500",
        description:
            "A deep, passionate connection! You two are head-over-heels for each other. This is a love story waiting to unfold!",
    },
    A: {
        label: "Affection",
        icon: "sentiment_very_satisfied",
        emoji: "🥰",
        color: "#f59e0b",
        gradient: "from-amber-400 to-orange-500",
        description:
            "A warm and tender feeling of care. It's lighter than love but deeper than friendship — a beautiful crush blooming!",
    },
    M: {
        label: "Marriage",
        icon: "diamond",
        emoji: "💍",
        color: "#8b5cf6",
        gradient: "from-violet-500 to-purple-600",
        description:
            "The ultimate endgame! Your stars are aligned for a lifelong partnership full of love, laughter, and commitment!",
    },
    E: {
        label: "Enemies",
        icon: "flash_on",
        emoji: "⚡",
        color: "#64748b",
        gradient: "from-slate-500 to-slate-700",
        description:
            "Natural rivals! You might clash often or simply be polar opposites. But hey — some of the best stories start this way!",
    },
    S: {
        label: "Siblings",
        icon: "group",
        emoji: "👫",
        color: "#10b981",
        gradient: "from-emerald-400 to-teal-500",
        description:
            "A platonic, protective bond just like family. You'd go to the ends of the earth for each other — no questions asked!",
    },
};

export interface EliminationStep {
    eliminated: string;
    remaining: string[];
    index: number;
}

/** Cancel matching letters between two names, return remaining count */
export function cancelLetters(name1: string, name2: string) {
    const a = name1.toLowerCase().replace(/\s+/g, "").split("");
    const b = name2.toLowerCase().replace(/\s+/g, "").split("");

    const remaining1 = [...a];
    const remaining2 = [...b];

    for (let i = remaining1.length - 1; i >= 0; i--) {
        const idx = remaining2.indexOf(remaining1[i]);
        if (idx !== -1) {
            remaining1.splice(i, 1);
            remaining2.splice(idx, 1);
        }
    }

    return {
        remaining1,
        remaining2,
        count: remaining1.length + remaining2.length,
    };
}

/** Circular FLAMES elimination. Returns final letter + each step for animation */
export function eliminateFlames(n: number) {
    const letters = [...FLAMES] as string[];
    const steps: EliminationStep[] = [];
    let idx = 0;

    while (letters.length > 1) {
        idx = (idx + n - 1) % letters.length;
        steps.push({
            eliminated: letters[idx],
            remaining: [...letters],
            index: idx,
        });
        letters.splice(idx, 1);
        if (idx >= letters.length) idx = 0;
    }

    return { result: letters[0] as FlamesLetter, steps };
}
