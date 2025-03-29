'use client';

import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';

interface CodeDisplayProps {
  code: string;
  title: string;
}

export default function CodeDisplay({ code, title }: CodeDisplayProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
        <h4 className="text-sm font-mono text-gray-300">{title}</h4>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code ref={codeRef} className="language-typescript">
          {code}
        </code>
      </pre>
    </div>
  );
} 