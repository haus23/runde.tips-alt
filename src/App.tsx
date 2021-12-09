import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import {
  Layout,
  LogIn,
  Matches,
  Players,
  Settings,
  Standings,
} from '~/front-of-house';
import Backyard from '~/backyard';
import { useAuth } from './common/hooks';
import { useRecoilValue } from 'recoil';
import { authQuery } from './api/state';

function RequireAuth({ children }: { children: JSX.Element }) {
  let { authenticated } = useAuth();
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default function App() {
  const firebaseUser = useRecoilValue(authQuery);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Standings />} />
        <Route path="spieler" element={<Players />} />
        <Route path="spiele" element={<Matches />} />
        <Route path="login" element={<LogIn />} />
        <Route
          path="einstellungen"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
      </Route>
      <Route
        path="hinterhof/*"
        element={
          <RequireAuth>
            <Backyard />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
