import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { DPThemeProvider } from '@components/DPThemeProvider';

import './index.css';
import './index.less';

import { router } from './router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DPThemeProvider defaultTheme="system">
        <RouterProvider router={router} />
      </DPThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);