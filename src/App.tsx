import { Route, Routes } from 'react-router-dom';

import Layout from '@/front-of-house/Layout';
import Standings from '@/front-of-house/views/Standings';
import LogIn from '@/front-of-house/views/LogIn';
import BackyardApp from '@/BackyardApp';
import RequireAuth from '@/common/components/router/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Standings />} />
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
