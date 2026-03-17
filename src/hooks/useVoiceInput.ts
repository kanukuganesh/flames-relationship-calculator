"use client";

import { useState, useCallback } from "react";

interface SpeechRecognitionEvent {
    results: { [index: number]: { [index: number]: { transcript: string } } };
}

interface SpeechRecognitionErrorEvent {
    error: string;
}

interface SpeechRecognitionInstance {
    lang: string;
    interimResults: boolean;
    maxAlternatives: number;
    onresult: ((e: SpeechRecognitionEvent) => void) | null;
    onerror: ((e: SpeechRecognitionErrorEvent) => void) | null;
    onend: (() => void) | null;
    start: () => void;
}

export function useVoiceInput(onResult: (transcript: string) => void) {
    const [isListening, setIsListening] = useState(false);

    const startListening = useCallback(() => {
        const SpeechRecognition =
            (window as unknown as Record<string, unknown>).SpeechRecognition ||
            (window as unknown as Record<string, unknown>).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Voice input is not supported in this browser.");
            return;
        }

        const recognition = new (SpeechRecognition as new () => SpeechRecognitionInstance)();
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        setIsListening(true);

        recognition.onresult = (e: SpeechRecognitionEvent) => {
            const transcript = e.results[0][0].transcript.trim();
            onResult(transcript);
            setIsListening(false);
        };

        recognition.onerror = (e: SpeechRecognitionErrorEvent) => {
            setIsListening(false);
            if (e.error === "no-speech") {
                alert("No speech detected. Please try again.");
            } else if (e.error === "not-allowed") {
                alert("Microphone permission denied. Please allow access.");
            } else {
                alert(`Voice error: ${e.error}`);
            }
        };

        recognition.onend = () => setIsListening(false);

        // Cancel any previous speech synthesis
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        recognition.start();
    }, [onResult]);

    return { startListening, isListening };
}
