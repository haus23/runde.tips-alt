import { Route, Routes } from 'react-router-dom';

import Layout from '@/front-of-house/Layout';
import Standings from '@/front-of-house/views/Standings';
import LogIn from '@/front-of-house/views/LogIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Standings />} />
        <Route path="login" element={<LogIn />} />;
      </Route>
    </Routes>
  );
}

export default App;
