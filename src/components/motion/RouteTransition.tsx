'use client';

import {useEffect, useState} from 'react';

type RouteTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

function joinClasses(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(' ');
}

export function RouteTransition({
  children,
  className,
}: RouteTransitionProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setReady(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      data-ready={ready ? 'true' : 'false'}
      className={joinClasses('cn-route-enter', className)}
    >
      {children}
    </div>
  );
}
