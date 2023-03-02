import React, { memo } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import { YoutubeAPIProvider } from './contenxt/YoutubeAPIContext';

const queryclient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryclient} >
      <YoutubeAPIProvider>
        <Outlet />
      </YoutubeAPIProvider>
    </QueryClientProvider>
  );
}

export default memo(App);
