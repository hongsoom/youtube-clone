import { createBrowserRouter } from 'react-router-dom';
import { lazyLoadRoutes } from './lazyLoadRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: lazyLoadRoutes('App'),
        children: [
            {
                index: true,
                element: lazyLoadRoutes('Home')
            },
            {
                path: 'videos',
                element: lazyLoadRoutes('Home')
            },
            {
                path: 'videos/:keyword',
                element: lazyLoadRoutes('Home')
            },
            {
                path: 'videos/watch/:videoId',
                element: lazyLoadRoutes('VideoDetail')
            },
            {
                path: 'subscribe',
                element: lazyLoadRoutes('Subscribe')
            },
            {
                path: 'finder',
                element: lazyLoadRoutes('Finder')
            },
            {
                path: 'history',
                element: lazyLoadRoutes('History')
            },
            {
                path: 'storage',
                element: lazyLoadRoutes('Storage')
            },
            {
                path: 'channel',
                element: lazyLoadRoutes('Channel')
            },
            {
                path: 'playlist',
                element: lazyLoadRoutes('PlayList')
            },
            {
                path: 'like',
                element: lazyLoadRoutes('Like')
            }
        ],
    },
    {
        path: '/oauth/callback/google',
        element: lazyLoadRoutes('Login')
    }
]);

export default router;