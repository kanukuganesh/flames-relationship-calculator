import { FLAMES } from "@/lib/flames";

const LABELS = ["FRIENDS", "LOVE", "AFFECTION", "MARRIAGE", "ENEMIES", "SIBLINGS"];

export default function FlamesLegend() {
    return (
        <div className="mt-16 flex justify-center gap-6 opacity-60 flex-wrap">
            {FLAMES.map((letter, i) => (
                <div key={letter} className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {letter}
                    </div>
                    <span className="text-[10px] font-bold">{LABELS[i]}</span>
                </div>
            ))}
        </div>
    );
}
