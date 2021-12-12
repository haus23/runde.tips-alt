import { Link, NavLink, Outlet } from 'react-router-dom';

export default () => {
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
          <NavLink to="/login">Log In</NavLink>
        </nav>
      </header>
      <main className="container mt-4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
