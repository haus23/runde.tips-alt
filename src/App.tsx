import { Route, Routes } from 'react-router-dom';
import { Layout, LogIn, Matches, Players, Standings } from '~/front-of-house';
import Backyard from '~/backyard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Standings />} />
        <Route path="spieler" element={<Players />} />
        <Route path="spiele" element={<Matches />} />
        <Route path="login" element={<LogIn />} />
      </Route>
      <Route path="hinterhof/*" element={<Backyard />} />
    </Routes>
  );
}
