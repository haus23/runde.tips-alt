import { Menu } from '@headlessui/react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classNames from '@/common/lib/class-names';

export type TopnavProfileMenuItemProps = NavLinkProps;

export const TopnavProfileMenuItem = ({
  to,
  children,
  ...props
}: TopnavProfileMenuItemProps) => (
  <Menu.Item>
    {({ active }) => (
      <NavLink
        to={to}
        {...props}
        className={({ isActive }) =>
          classNames(
            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-600',
            isActive
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
              : active
              ? 'bg-gray-50 border-gray-300 text-gray-800'
              : 'border-transparent '
          )
        }
      >
        {children}
      </NavLink>
    )}
  </Menu.Item>
);
