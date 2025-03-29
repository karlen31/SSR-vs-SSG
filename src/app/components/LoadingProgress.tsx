'use client';

import { useEffect, useState } from 'react';

export default function LoadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 3000; // Match the delay in ServerComponent

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
      }
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div className="text-center mt-2 text-sm text-gray-400">
        Loading... {Math.round(progress)}%
      </div>
    </div>
  );
} 