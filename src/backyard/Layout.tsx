import { Link, NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-gray-900 text-gray-50 h-screen">
      <header className="shadow p-4 flex items-center gap-4">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-semibold">runde.tips</h1>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <NavLink to=".">Dashboard</NavLink>
          <NavLink to="spiele">Spiele</NavLink>
        </nav>
      </header>
      <main className="container mt-4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
