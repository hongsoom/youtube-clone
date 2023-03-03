import { Helmet } from 'react-helmet-async';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import { YoutubeAPIProvider } from './contenxt/YoutubeAPIContext';

const queryclient = new QueryClient();

const App = () => {
  return (
    <>
      <Helmet>
        <title>Youtube</title>
      </Helmet>
      <QueryClientProvider client={queryclient} >
        <YoutubeAPIProvider>
          <Outlet />
        </YoutubeAPIProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
