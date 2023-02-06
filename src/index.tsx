import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Videos from './pages/Main';
import VideoDetail from './pages/VideoDetail';
import Subscribe from './pages/Subscribe';
import Finder from './pages/Finder';
import History from './pages/History';
import Storage from './pages/storage';
import Channel from './pages/Channel';
import PlayList from './pages/PlayList';
import Like from './pages/Like';
import Login from './pages/Login';

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
      { path: 'storage', element: <Storage /> },
      { path: 'channel', element: <Channel /> },
      { path: 'playlist', element: <PlayList /> },
      { path: 'like', element: <Like /> }
    ],
  },
  {
    path: '/oauth/callback/google',
    element: <Login />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);