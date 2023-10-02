import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/routes/Home';
import { Detail } from '@/routes/Detail';
import { Layout } from '@/routes/Layout';
import { ROUTE_PATH } from '@/router/routePath';
import { NotFound } from '@/routes/NotFound';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Loading } from '@/components/Loading';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: ROUTE_PATH.ROOT,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: ROUTE_PATH.DETAIL,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>
              <Detail />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
