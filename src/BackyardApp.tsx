import { Route, Routes } from 'react-router-dom';
import Layout from './backyard/Layout';
import Dashboard from './backyard/views/Dashboard';

const BackyardApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default BackyardApp;
