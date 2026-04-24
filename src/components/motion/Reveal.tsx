'use client';

import {useEffect, useRef, useState} from 'react';

type RevealTag = 'div' | 'section' | 'article' | 'figure' | 'ul' | 'li' | 'span';

type RevealProps = {
  as?: RevealTag;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  variant?: 'up' | 'left' | 'right' | 'soft';
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

function joinClasses(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(' ');
}

export function Reveal({
  as = 'div',
  className,
  children,
  delay = 0,
  variant = 'up',
  once = true,
  threshold = 0.18,
  rootMargin = '0px 0px -8% 0px',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      const id = requestAnimationFrame(() => {
        setRevealed(true);
      });

      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setRevealed(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold, rootMargin]);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      data-revealed={revealed ? 'true' : 'false'}
      data-variant={variant}
      className={joinClasses('cn-reveal', className)}
      style={{transitionDelay: `${delay}ms`}}
    >
      {children}
    </Tag>
  );
}
