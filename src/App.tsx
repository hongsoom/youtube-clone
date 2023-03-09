import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { YoutubeAPIProvider } from './contenxt/YoutubeAPIContext';
import { RouteState } from './types/types';

const queryclient = new QueryClient();

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation() as RouteState;
  const pathname: string = location.pathname;
  return (
    <>
      <Helmet>
        <title>Youtube TEST</title>
      </Helmet>
      <QueryClientProvider client={queryclient}>
        <YoutubeAPIProvider>
          <NavBar setOpen={setOpen} open={open} />
          <VideoMain pathname={pathname}>
            <SideBar open={open} />
            <Outlet />
          </VideoMain>
        </YoutubeAPIProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;

const VideoMain = styled.div<{ pathname: string }>`
  width: 100%;
  height: 100%;
  display: flex;

  @media all and (max-width: 1024px) {
    flex-wrap: ${props => props.pathname.includes('watch') && 'wrap'};
  }
`;
