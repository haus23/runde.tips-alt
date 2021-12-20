import { Disclosure } from '@headlessui/react';
import { Topnav } from '@/front-of-house/components/navbar/topnav/Topnav';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import UserProfile from '@/model/UserProfile';
import { Sidenav } from '@/front-of-house/components/navbar/sidenav/Sidenav';

export type NavbarProps = {
  user: UserProfile | null;
};

export const Navbar = ({ user }: NavbarProps) => {
  return (
    <div className="min-h-full">
      <Disclosure
        as="nav"
        className="bg-white border-b border-gray-200 shadow-lg"
      >
        {({ open, close }) => (
          <>
            <div className="flex justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Topnav user={user} />
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <Sidenav user={user} onClose={close} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
