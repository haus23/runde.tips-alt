import { NavLink, NavLinkProps } from 'react-router-dom';
import { forwardRef } from 'react';
import classNames from '@/lib/ui/helper/class-names';

export type SidenavLinkProps = NavLinkProps;

export const SidenavLink = forwardRef<HTMLAnchorElement, SidenavLinkProps>(
  ({ children, ...props }, ref) => (
    <NavLink
      ref={ref}
      {...props}
      className={({ isActive }) =>
        classNames(
          'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
          isActive
            ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
        )
      }
    >
      {children}
    </NavLink>
  )
);
SidenavLink.displayName = 'SidenavLink';
