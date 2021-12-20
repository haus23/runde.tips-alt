import { NavLink, NavLinkProps } from 'react-router-dom';
import { forwardRef } from 'react';
import classNames from '@/lib/ui/helper/class-names';

export type TopnavLinkProps = NavLinkProps;

export const TopnavLink = forwardRef<HTMLAnchorElement, TopnavLinkProps>(
  ({ children, ...props }, ref) => (
    <NavLink
      ref={ref}
      {...props}
      className={({ isActive }) =>
        classNames(
          'inline-flex items-center px-2 pt-1 border-b-2 text-base font-medium',
          isActive
            ? 'border-indigo-500 text-gray-900'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400'
        )
      }
    >
      {children}
    </NavLink>
  )
);
TopnavLink.displayName = 'TopnavLink';
