import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, UserIcon, XIcon } from '@heroicons/react/outline';
import { Fragment, MouseEvent, useRef } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AppNavButton, Logo, ThemeToggler } from '~/common/components';
import { useAuth } from '~/common/hooks';
import { SidenavLink, TopnavLink } from './components';

export default function Layout() {
  const { authenticated, user, logOut } = useAuth();

  const handleLogOut = (event: { preventDefault: Function }) => {
    event.preventDefault();
    logOut();
  };

  return (
    <>
      <div className="min-h-full bg-gray-50 dark:text-white dark:bg-gray-700">
        <Disclosure
          as="nav"
          className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
        >
          {({ close }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <Link to="/" className="flex items-center">
                        <Logo />
                        <h1 className="hidden lg:block ml-2 text-xl font-semibold">
                          runde.tips
                        </h1>
                      </Link>
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      <TopnavLink to="/">Tabelle</TopnavLink>
                      <TopnavLink to="/spieler">Spieler</TopnavLink>
                      <TopnavLink to="/spiele">Spiele</TopnavLink>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="ml-6 flex items-center">
                      <ThemeToggler />
                    </div>
                    <div className="hidden sm:flex items-center">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative">
                        <div>
                          <Menu.Button as={AppNavButton}>
                            {user !== null && user.imageUrl ? (
                              <img
                                className="h-6 w-6 rounded-full"
                                src={user.imageUrl}
                                alt="..."
                              />
                            ) : (
                              <UserIcon className="h-6 w-6" />
                            )}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-12 w-48 sm:mr-0 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-2 ring-black dark:ring-white ring-opacity-5 focus:outline-none">
                            {authenticated ? (
                              <>
                                <Menu.Item
                                  as={NavLink}
                                  to="/hinterhof"
                                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100  hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                  Hinterhof
                                </Menu.Item>
                                <Menu.Item
                                  as={NavLink}
                                  to="/einstellungen"
                                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100  hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                  Einstellungen
                                </Menu.Item>
                                <Menu.Item
                                  as={NavLink}
                                  to="/logout"
                                  onClick={handleLogOut}
                                  className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100  hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                  Log out
                                </Menu.Item>
                              </>
                            ) : (
                              <Menu.Item
                                as={NavLink}
                                to="/login"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white"
                              >
                                Log in
                              </Menu.Item>
                            )}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                      <Disclosure.Button as={AppNavButton}>
                        <MenuIcon className="block h-6 w-6" />
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>

              <Transition
                onClick={() => close()}
                className="sm:hidden fixed inset-0 p-2 transition transform origin-top-right bg-gray-200 dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75"
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Disclosure.Panel
                  onClick={(event: MouseEvent<HTMLElement>) =>
                    event.stopPropagation()
                  }
                  className="sm:hidden rounded-lg shadow-md bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div className="px-2 pt-2 flex items-center justify-between">
                    <Disclosure.Button as={NavLink} to="/">
                      <Logo />
                    </Disclosure.Button>
                    <Disclosure.Button as={AppNavButton}>
                      <XIcon className="block h-6 w-6" />
                    </Disclosure.Button>
                  </div>
                  <div className="pt-2 mt-2 space-y-1 dark:px-2 dark:py-3 border-t border-gray-200 dark:border-gray-500">
                    <Disclosure.Button as={SidenavLink} to="/">
                      Tabelle
                    </Disclosure.Button>
                    <Disclosure.Button as={SidenavLink} to="/spieler">
                      Spieler
                    </Disclosure.Button>
                    <Disclosure.Button as={SidenavLink} to="/spiele">
                      Spiele
                    </Disclosure.Button>
                  </div>
                  {authenticated && user !== null ? (
                    <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-500">
                      <div className="flex items-center px-4">
                        <div className="flex-shrink-0">
                          {user.imageUrl !== '' ? (
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          ) : (
                            <UserIcon className="h-8 w-8 text-gray-500" />
                          )}
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium text-gray-800 dark:text-gray-50">
                            {user.name || user.email}
                          </div>
                          {user.name !== null && (
                            <div className="text-sm font-medium text-gray-500">
                              {user.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mt-3 space-y-1 dark:px-2">
                        <Disclosure.Button as={SidenavLink} to="/hinterhof">
                          Hinterhof
                        </Disclosure.Button>
                        <Disclosure.Button as={SidenavLink} to="/einstellungen">
                          Einstellungen
                        </Disclosure.Button>
                        <SidenavLink
                          onClick={(event) => {
                            close();
                            handleLogOut(event);
                          }}
                          to="/logout"
                        >
                          Log out
                        </SidenavLink>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Disclosure.Button
                        as={Link}
                        to="/login"
                        className="block w-full px-5 py-3 text-center font-medium text-indigo-500 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Log in
                      </Disclosure.Button>
                    </div>
                  )}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
