import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { UserMenuItem } from '@/lib/ui/components/user-menu/user-menu-item/UserMenuItem';

import UserProfile from '@/model/UserProfile';

export type UserMenuProps = {
  user: UserProfile;
};

export const UserMenu = ({ user }: UserMenuProps) => (
  <Menu as="div" className="ml-3 relative">
    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="sr-only">Open user menu</span>
      <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <UserMenuItem to="/hinterhof">Hinterhof</UserMenuItem>
        <UserMenuItem to="/einstellungen">Einstellungen</UserMenuItem>
        <UserMenuItem to="/logout">Logout</UserMenuItem>
      </Menu.Items>
    </Transition>
  </Menu>
);