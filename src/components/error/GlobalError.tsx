import { FallbackProps } from 'react-error-boundary';

function GlobalError({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      <p>{error?.message}</p>
      <button onClick={resetErrorBoundary}>재시도</button>
    </div>
  );
}

export default GlobalError;
