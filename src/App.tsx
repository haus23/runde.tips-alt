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
import { SplashScreen } from './common/components';

function RequireAuth({ children }: { children: JSX.Element }) {
  let { authenticated } = useAuth();
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export default function App() {
  let { isAuthenticating } = useAuth();
  return (
    <>
      <SplashScreen showWhile={isAuthenticating}></SplashScreen>
      {!isAuthenticating && (
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
          <Route path="hinterhof/*" element={<Backyard />} />
        </Routes>
      )}
    </>
  );
}
