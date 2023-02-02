import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import { YoutubeAPIProvider } from './contenxt/YoutubeAPIContext';
import NavBar from "./components/navBar/NavBar";

const queryclient = new QueryClient();

const App = () => {
  return (
    <>
      <NavBar />
      <QueryClientProvider client={queryclient} >
        <YoutubeAPIProvider>
          <Outlet />
        </YoutubeAPIProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;