import { createBrowserRouter } from 'react-router-dom';
import App from './App';
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

export default router;