import { Outlet } from 'react-router-dom';
import { Navbar } from '@/front-of-house/components/navbar/Navbar';
import useAuth from '@/common/hooks/use-auth';
import useDarkMode from '@/common/hooks/use-dark-mode';

const Layout = () => {
  const { user } = useAuth();
  useDarkMode(false);

  return (
    <>
      <Navbar user={user} />
      <Outlet />
    </>
  );
};

export default Layout;
