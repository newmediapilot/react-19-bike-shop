import CProgressBar from '@local/components/core/CProgressBar';

/**
 * Generic FS(full-screen) progress bar
 */
function ProgressFS() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CProgressBar />
    </div>
  );
}

export default ProgressFS;
