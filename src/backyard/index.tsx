import { Routes, Route } from 'react-router-dom';
import Championships from './championships';
import Dashboard from './dashboard';
import Layout from './Layout';

export default function Backyard() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="turniere" element={<Championships />} />
      </Route>
    </Routes>
  );
}
