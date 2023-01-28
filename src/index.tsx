import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import Subscribe from './pages/Subscribe';
import Finder from './pages/Finder';
import History from './pages/History';
import Storage from './pages/Storage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Videos /> },
      { path: 'videos', element: <Videos /> },
      { path: 'videos/:keyword', element: <Videos /> },
      { path: 'videos/watch/:videoId', element: <VideoDetail /> },
      { path: 'subscribe', element: <Subscribe /> },
      { path: 'finder', element: <Finder /> },
      { path: 'history', element: <History /> },
      { path: 'storage', element: <Storage /> }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);