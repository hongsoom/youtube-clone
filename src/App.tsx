import React from 'react';
import styled from 'styled-components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import { YoutubeAPIProvider } from './contenxt/YoutubeAPIContext';
import NavBar from "./components/navBar/NavBar";
import Sidebar from './components/navBar/SideBar';

const queryclient = new QueryClient();

const App = () => {
  return (
    <>
      <NavBar />
      <Body>
        <Sidebar />
        <QueryClientProvider client={queryclient} >
          <YoutubeAPIProvider>
            <Outlet />
          </YoutubeAPIProvider>
        </QueryClientProvider>
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;