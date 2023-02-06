import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet, useLocation } from 'react-router';
import styled from 'styled-components';
import { YoutubeAPIProvider } from './contenxt/YoutubeAPIContext';
import NavBar from "./components/navBar/NavBar";
import Sidebar from './components/navBar/SideBar';

const queryclient = new QueryClient();

const App = () => {
  const location = useLocation();
  const pathname = location.pathname

  return (
    <>
      <NavBar />
      <VideoMain pathname={pathname}>
        <QueryClientProvider client={queryclient} >
          <YoutubeAPIProvider>
            {pathname.includes('watch') === false &&
              <Sidebar />}
            <Outlet />
          </YoutubeAPIProvider>
        </QueryClientProvider>
      </VideoMain>
    </>
  );
}

export default App;

const VideoMain = styled.div< { pathname: string }>`
  width: 100%;
  height: 100%;
  display: flex;

  @media all and (max-width: 1024px) {
    flex-wrap : ${(props) => (props.pathname === '/' && 'wrap')};
  }
`;