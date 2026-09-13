"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import FlamesLegend from "@/components/FlamesLegend";
import { useVoiceInput } from "@/hooks/useVoiceInput";

export default function HomePage() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const router = useRouter();

  const voice1 = useVoiceInput(
    useCallback((t: string) => setName1(t), [])
  );
  const voice2 = useVoiceInput(
    useCallback((t: string) => setName2(t), [])
  );

  function handleCalculate() {
    const clean1 = name1.trim().replace(/[^a-zA-Z\s]/g, "");
    const clean2 = name2.trim().replace(/[^a-zA-Z\s]/g, "");

    let hasError = false;
    if (!clean1) {
      setError1(true);
      setTimeout(() => setError1(false), 1500);
      hasError = true;
    }
    if (!clean2) {
      setError2(true);
      setTimeout(() => setError2(false), 1500);
      hasError = true;
    }
    if (hasError) return;

    router.push(
      `/calculate?name1=${encodeURIComponent(clean1)}&name2=${encodeURIComponent(clean2)}`
    );
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleCalculate();
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundDecorations />
      <Header variant="home" />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            DISCOVER YOUR DESTINY
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            FLAMES <span className="text-primary italic">Calculator</span> Online
          </h1>

          <p className="text-lg text-slate-600 max-w-md mx-auto mb-12">
            Free love compatibility test by name. Enter two names and let the
            classic FLAMES game reveal your relationship — Friends, Love,
            Affection, Marriage, Enemies, or Siblings!
          </p>

          {/* Input Form */}
          <div className="space-y-6 w-full max-w-lg mx-auto">
            {/* Name 1 */}
            <div className="relative group">
              <div className="absolute -left-3 -top-3 w-10 h-10 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center shadow-sm z-10">
                <span className="material-symbols-outlined text-primary text-xl">
                  person
                </span>
              </div>
              <label className="block text-left text-sm font-bold text-slate-500 mb-2 ml-10 uppercase tracking-wider">
                First Name
              </label>
              <div className="relative flex items-center">
                <input
                  id="name1"
                  type="text"
                  placeholder="Enter Name 1"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`input-glow w-full h-16 pl-10 pr-16 rounded-2xl border-2 ${error1
                      ? "border-red-400 animate-pulse"
                      : "border-primary/10"
                    } bg-white text-slate-900 text-xl font-medium focus:outline-none focus:border-primary transition-all placeholder:text-slate-300 shadow-sm`}
                />
                <button
                  type="button"
                  title="Voice Input"
                  onClick={voice1.startListening}
                  className={`absolute right-3 w-10 h-10 flex items-center justify-center rounded-full transition-all ${voice1.isListening
                      ? "mic-listening"
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                    }`}
                >
                  <span className="material-symbols-outlined text-xl">mic</span>
                </button>
              </div>
            </div>

            {/* Heart Divider */}
            <div className="flex justify-center -my-3 relative z-20">
              <div className="animate-heartbeat bg-primary text-white p-3 rounded-full shadow-xl shadow-primary/30 border-4 border-background-light">
                <span className="material-symbols-outlined text-2xl">
                  favorite
                </span>
              </div>
            </div>

            {/* Name 2 */}
            <div className="relative group">
              <div className="absolute -left-3 -top-3 w-10 h-10 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center shadow-sm z-10">
                <span className="material-symbols-outlined text-primary text-xl">
                  favorite_border
                </span>
              </div>
              <label className="block text-left text-sm font-bold text-slate-500 mb-2 ml-10 uppercase tracking-wider">
                Second Name
              </label>
              <div className="relative flex items-center">
                <input
                  id="name2"
                  type="text"
                  placeholder="Enter Name 2"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`input-glow w-full h-16 pl-10 pr-16 rounded-2xl border-2 ${error2
                      ? "border-red-400 animate-pulse"
                      : "border-primary/10"
                    } bg-white text-slate-900 text-xl font-medium focus:outline-none focus:border-primary transition-all placeholder:text-slate-300 shadow-sm`}
                />
                <button
                  type="button"
                  title="Voice Input"
                  onClick={voice2.startListening}
                  className={`absolute right-3 w-10 h-10 flex items-center justify-center rounded-full transition-all ${voice2.isListening
                      ? "mic-listening"
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                    }`}
                >
                  <span className="material-symbols-outlined text-xl">mic</span>
                </button>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              id="calc-btn"
              onClick={handleCalculate}
              className="btn-shimmer w-full h-16 mt-8 text-white rounded-2xl font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 cursor-pointer"
            >
              Calculate Relationship
              <span className="material-symbols-outlined">magic_button</span>
            </button>
          </div>

          {/* Legend */}
          <FlamesLegend />
        </div>
      </main>

      {/* SEO Content Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-12">
          What is the <span className="text-primary">FLAMES</span> Calculator?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">How to Play FLAMES Online</h3>
            <p className="text-slate-600 leading-relaxed">
              Enter your name and your crush&apos;s name in the fields above, then
              click <strong>&quot;Calculate Relationship&quot;</strong>. The FLAMES
              calculator removes common letters, counts the remaining ones, and
              uses that count to eliminate letters from <strong>F-L-A-M-E-S</strong> until
              one survives — revealing your relationship type!
            </p>
            <h3 className="text-xl font-bold text-slate-800">What Does FLAMES Stand For?</h3>
            <ul className="text-slate-600 space-y-1">
              <li><strong>F</strong> — Friends: A strong platonic bond</li>
              <li><strong>L</strong> — Love: A romantic connection</li>
              <li><strong>A</strong> — Affection: Warm feelings and care</li>
              <li><strong>M</strong> — Marriage: Long-term commitment</li>
              <li><strong>E</strong> — Enemies: A fiery rivalry</li>
              <li><strong>S</strong> — Siblings: A family-like bond</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">Why Use Our FLAMES Calculator?</h3>
            <p className="text-slate-600 leading-relaxed">
              Our <strong>free FLAMES calculator online</strong> is fast, accurate,
              and works on any device. No sign-ups required — just enter two names
              and get instant results with a beautiful animated reveal. It&apos;s the
              classic <strong>love compatibility test</strong> that millions have
              played since the 1990s, now available as a modern web app.
            </p>
            <h3 className="text-xl font-bold text-slate-800">Is FLAMES Accurate?</h3>
            <p className="text-slate-600 leading-relaxed">
              FLAMES is a <strong>traditional name game</strong> designed for fun
              and entertainment. While it can&apos;t scientifically predict real
              relationships, it&apos;s a nostalgic and playful way to explore your
              connection with someone special. Real relationships are built on
              trust, communication, and shared experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Side Card */}
      <div className="hidden lg:block fixed bottom-12 right-12 w-48 h-64 bg-white rounded-3xl shadow-2xl p-4 rotate-6 border border-primary/10">
        <div className="w-full h-full rounded-2xl bg-primary/5 flex flex-col items-center justify-center gap-4 text-primary">
          <span className="material-symbols-outlined text-4xl">celebration</span>
          <p className="font-bold text-center px-4 text-sm leading-snug">
            Millions have found their match!
          </p>
        </div>
      </div>
    </div>
  );
}
