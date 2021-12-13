import { Route, Routes } from 'react-router-dom';
import Layout from './backyard/Layout';
import Dashboard from './backyard/views/Dashboard';
import Matches from '@/backyard/views/Matches';

const BackyardApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="spiele" element={<Matches />} />
      </Route>
    </Routes>
  );
};

export default BackyardApp;
