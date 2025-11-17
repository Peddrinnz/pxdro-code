'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
}

export default function Typewriter({ words, speed = 120, delay = 1500 }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, delay]);

  return (
    <span className="min-h-8 inline-block">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}