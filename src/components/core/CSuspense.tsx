/**
 * Suspense wrapper for `router.ts`
 * @see src/composition/router.ts
 */
import ProgressFS from '@local/components/ProgressFS';
import { useLoaderData } from 'react-router-dom';

function CSuspense({ children }: { children: React.ReactNode }) {
  const d = useLoaderData();
  return !d ? <ProgressFS /> : children;
}

export default CSuspense;
