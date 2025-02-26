"use client";

import { useState, useEffect, useCallback } from "react";

export default function TextToSpeechToggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );

  useEffect(() => {
    const newUtterance = new SpeechSynthesisUtterance();
    setUtterance(newUtterance);

    return () => {
      speechSynthesis.cancel();
      setUtterance(null);
    };
  }, []);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!isEnabled || !utterance) return;

      const clickedElement = e.target as HTMLElement;
      const textToRead = clickedElement.textContent || "";

      speechSynthesis.cancel();
      utterance.text = textToRead;
      speechSynthesis.speak(utterance);
    },
    [isEnabled, utterance]
  );

  useEffect(() => {
    if (isEnabled) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
      speechSynthesis.cancel();
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isEnabled, handleClick]);

  const toggleTextToSpeech = useCallback(() => {
    setIsEnabled((prev) => !prev);
  }, []);

  return (
    <button
      onClick={toggleTextToSpeech}
      className={`px-4 py-2 rounded-md transition-colors mb-4 ${
        isEnabled
          ? "bg-green-500 text-white"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
    >
      {isEnabled ? "Disable Text-to-Speech" : "Enable Text-to-Speech"}
    </button>
  );
}
