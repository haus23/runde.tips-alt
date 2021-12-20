import { Outlet } from 'react-router-dom';
import { Navbar } from '@/front-of-house/components/navbar/Navbar';
import useAuth from '@/common/hooks/use-auth';

const Layout = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar user={user} />
      <Outlet />
    </>
  );
};

export default Layout;
