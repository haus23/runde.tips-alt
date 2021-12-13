import { Link, NavLink, Outlet } from 'react-router-dom';
import useAuth from '@/common/hooks/use-auth';

const Layout = () => {
  const { authenticated } = useAuth();

  return (
    <div>
      <header className="shadow p-4 flex items-center gap-4">
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
      <main className="container mt-4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
