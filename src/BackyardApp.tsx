import { Route, Routes } from 'react-router-dom';
import Layout from './backyard/Layout';
import Dashboard from './backyard/views/Dashboard';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
