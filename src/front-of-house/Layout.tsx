import { Link, Outlet } from 'react-router-dom';
import { Logo } from '~/common/components';

export default function Layout() {
  return (
    <>
      <header className="flex items-center h-16 px-4 gap-4 border-b">
        <div>
          <Link to="/" className="flex items-center">
            <Logo />
            <h1 className="ml-2 text-2xl font-semibold">runde.tips</h1>
          </Link>
        </div>
        <nav className="flex flex-1 justify-between">
          <ul className="flex">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/hinterhof">Hinterhof</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}
