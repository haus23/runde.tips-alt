import { Link, NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header className="shadow p-4 flex items-center gap-4">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-semibold">runde.tips</h1>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <NavLink to=".">Dashboard</NavLink>
        </nav>
      </header>
      <main className="container mt-4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
