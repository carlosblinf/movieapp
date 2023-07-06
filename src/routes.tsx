import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Error404 } from './pages';
import Layout from './components/Layout';

const FeedPage = lazy(() => import('./pages/FeedPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));
const SearchPage = lazy(() => import('./pages/SerachPage'));

const routes = createBrowserRouter([
  {
    path: '/error-404',
    element: <Error404 />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <FeedPage />,
      },
      {
        path: '/videos/:id',
        element: <DetailPage />,
      },
      {
        path: '/search/:term',
        element: <SearchPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/error-404" />,
  },
]);

export default routes;
