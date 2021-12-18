import { Link, NavLink, Outlet } from 'react-router-dom';
import useAuth from '@/common/hooks/use-auth';
import { Brand } from '@/lib/ui/layout/brand/Brand';

const Layout = () => {
  const { authenticated } = useAuth();

  return (
    <div>
      <header className="shadow p-4 flex items-center gap-4">
        <Brand />
        <div>
          <Link to="/">
            <h1 className="text-2xl font-semibold">runde.tips</h1>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <NavLink to="/">Tabelle</NavLink>
          {authenticated ? (
            <NavLink to="/hinterhof">Hinterhof</NavLink>
          ) : (
            <NavLink to="/login">Log In</NavLink>
          )}
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
