import { useEffect } from 'react';

export function useEffectDebounced(effect: () => void, deps: any[], delay: number) {
  useEffect(() => {
    const handler = setTimeout(() => {
      effect();
    }, delay);

    return () => clearTimeout(handler);
  }, [...deps, delay]);
}
