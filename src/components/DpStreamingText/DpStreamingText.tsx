import { useEffect, useRef, useState } from 'react';
import './DpStreamingText.less';

interface DpStreamingTextProps {
  children?: string;
  replayKey?: number;
  className?: string;
  autoplay?: boolean;
}

export function DpStreamingText({
  replayKey = 0,
  autoplay = true,
  className = '',
  children = '',
}: DpStreamingTextProps) {
  const words = (children || '').trim().split(/\s+/);
  const [visibleCount, setVisibleCount] = useState(0);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = undefined;

    if (!autoplay || words.length === 0) {
      setVisibleCount(0);
      return;
    }

    setVisibleCount(0);

    // Даём React применить начальное состояние до старта анимации.
    let index = 0;
    let cancelled = false;

    const getGap = () => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--stream-gap");

      return Number.parseFloat(value) || 60;
    };

    const revealNext = () => {
      if (cancelled || index >= words.length) return;

      index += 1;
      setVisibleCount(index);

      if (index < words.length) {
        timerRef.current = setTimeout(revealNext, getGap());
      }
    };

    // Первый интервал позволяет браузеру отрисовать скрытые слова.
    timerRef.current = setTimeout(revealNext, 20);

    return () => {
      cancelled = true;
      clearTimeout(timerRef.current);
    };
  }, [children, replayKey, autoplay]);

  return (
    <span
      className={`dp-steaming-text ${className}`.trim()}
      aria-label={children}
    >
      {words.map((word, index) => (
        <span
          key={`${replayKey}-${index}`}
          className={`dp-steaming-text__word ${
            index < visibleCount ? "is-visible" : ""
          }`}
          aria-hidden="true"
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}