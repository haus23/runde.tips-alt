import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { MouseEvent } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppNavButton, Logo, ThemeToggler } from '~/common/components';
import { SidenavLink, TopnavLink } from './components';

export default function Layout() {
  return (
    <>
      <div className="min-h-full bg-white dark:bg-gray-800">
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
                    <div className="hidden sm:-my-px sm:flex sm:items-stretch">
                      <TopnavLink to="/login">Log In</TopnavLink>
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
                className="fixed inset-0 p-2 transition transform origin-top-right bg-gray-200 dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75"
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
                    <Logo />
                    <Disclosure.Button as={AppNavButton}>
                      <XIcon className="block h-6 w-6" />
                    </Disclosure.Button>
                  </div>
                  <div className="pt-2 space-y-1">
                    <Disclosure.Button as={SidenavLink} to="/">
                      Tabelle
                    </Disclosure.Button>
                    <Disclosure.Button as={SidenavLink} to="/spieler">
                      Spieler
                    </Disclosure.Button>
                    <Disclosure.Button as={SidenavLink} to="/spiele">
                      Spiele
                    </Disclosure.Button>
                    <Disclosure.Button
                      as={Link}
                      to="/login"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Log in
                    </Disclosure.Button>
                  </div>
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
