import { Dialog, Transition } from '@headlessui/react';
import {
  ClipboardListIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppNavButton, Logo, ThemeToggler } from '~/common/components';
import BackyardNavLink from './components/BackyardNavLink';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={closeSidebar}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-white dark:bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-3">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={closeSidebar}
                  >
                    <XIcon className="h-6 w-6 text-white" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4 h-16">
                <Link to="/" className="flex items-center">
                  <Logo />
                  <span className="text-xl ml-2 font-semibold">runde.tips</span>
                </Link>
              </div>
              <div className="mt-2 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  <BackyardNavLink
                    to="."
                    icon={HomeIcon}
                    onClick={closeSidebar}
                  >
                    Dashboard
                  </BackyardNavLink>
                  <BackyardNavLink
                    to="./turniere"
                    icon={ClipboardListIcon}
                    onClick={closeSidebar}
                  >
                    Turniere
                  </BackyardNavLink>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static content */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 h-16 ">
            <Link to="/" className="flex items-center">
              <Logo />
              <span className="text-xl ml-2 font-semibold">runde.tips</span>
            </Link>
          </div>
          <div className="mt-2 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              <BackyardNavLink to="." icon={HomeIcon}>
                Dashboard
              </BackyardNavLink>
              <BackyardNavLink to="./turniere" icon={ClipboardListIcon}>
                Turniere
              </BackyardNavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-800 shadow">
          <div className="md:hidden flex items-center border-r border-gray-200 dark:border-gray-700 px-2">
            <AppNavButton onClick={openSidebar}>
              <MenuIcon className="h-6 w-6" />
            </AppNavButton>
          </div>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h2 className="text-xl">Aktuelles Turnier</h2>
            </div>
            <div
              className={`ml-4 flex items-center md:ml-6 transition-opacity ${
                sidebarOpen ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <ThemeToggler />
            </div>
          </div>
        </div>
        <main className="flex-1 text-gray-900 dark:text-gray-100">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
