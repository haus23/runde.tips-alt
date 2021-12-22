import { Route, Routes } from 'react-router-dom';
import Layout from './backyard/Layout';
import Dashboard from './backyard/views/Dashboard';
import Matches from '@/backyard/views/Matches';
import { Rulesets } from '@/backyard/views/Rulesets';

const BackyardApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="spiele" element={<Matches />} />
        <Route path="regeln" element={<Rulesets />} />
      </Route>
    </Routes>
  );
};

export default BackyardApp;
