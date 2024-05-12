import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from '../loading/Loading';
import GlobalError from '../error/GlobalError';

interface RequestBoundaryProps {
  children?: React.ReactNode;
}

function RequestBoundary({ children }: RequestBoundaryProps) {
  const location = useLocation();

  return (
    <ErrorBoundary FallbackComponent={GlobalError} resetKeys={[location.pathname]}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default RequestBoundary;
