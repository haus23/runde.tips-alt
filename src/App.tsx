import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@/front-of-house/Layout';
import Standings from '@/front-of-house/views/Standings';
import LogIn from '@/front-of-house/views/LogIn';
import RequireAuth from '@/common/components/router/RequireAuth';
import Matches from '@/front-of-house/views/Matches';
import Players from '@/front-of-house/views/Players';

const backyardAppPromise = import('./BackyardApp');
const BackyardApp = lazy(() => backyardAppPromise);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Standings />} />
        <Route path="spieler" element={<Matches />} />;
        <Route path="spiele" element={<Players />} />;
        <Route path="login" element={<LogIn />} />;
      </Route>
      <Route
        path="hinterhof/*"
        element={
          <RequireAuth>
            <BackyardApp />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
