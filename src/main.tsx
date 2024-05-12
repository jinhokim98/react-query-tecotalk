import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import worker from './mocks/browser.ts';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
    },
  },
});

async function deferRender() {
  if (import.meta.env.DEV) return await worker.start();
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
