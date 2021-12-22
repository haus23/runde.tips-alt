import { Link, NavLink, Outlet } from 'react-router-dom';
import useDarkMode from '@/common/hooks/use-dark-mode';
import { Sidebar } from '@/backyard/components/sidebar/Sidebar';
import useAuth from '@/common/hooks/use-auth';
import { UserMenu } from '@/lib/ui/components/user-menu/UserMenu';
import { ThemeSwitch } from '@/lib/ui/components/theme-switch/ThemeSwitch';

const Layout = () => {
  useDarkMode(true);
  const { user } = useAuth();

  return (
    <>
      {user && (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 h-screen">
          <Sidebar />
          <main className="md:pl-64">
            <div className="flex flex-col ">
              <div className="sticky top-0 z-10 flex-shrink-0 h-16 px-4 border-b bg-white dark:bg-transparent border-gray-200 dark:border-gray-700 flex">
                <div className="grow flex items-center">
                  <h2 className="text-xl">Aktuelles Turnier</h2>
                </div>
                <div className="shrink-0 flex items-center">
                  <ThemeSwitch />
                </div>
              </div>
              <main className="flex-1 max-w-4xl px-4 md:px-8 py-4">
                <Outlet />
              </main>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Layout;
