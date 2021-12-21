import { NavLink, NavLinkProps, useMatch } from 'react-router-dom';
import { ElementType, forwardRef } from 'react';
import classNames from '@/lib/ui/helper/class-names';

export type SidebarLinkProps = NavLinkProps & {
  icon: ElementType;
};

export const SidebarLink = forwardRef<HTMLAnchorElement, SidebarLinkProps>(
  ({ icon, to, children, ...props }, ref) => {
    const Icon = icon;
    const match = useMatch(typeof to === 'string' ? to : to.pathname!);
    return (
      <NavLink
        ref={ref}
        to={to}
        {...props}
        className={({ isActive }) =>
          classNames(
            'group flex items-center px-2 py-2 text-base font-medium rounded-md',
            isActive
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          )
        }
      >
        <Icon
          className={classNames(
            match ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
            'mr-4 flex-shrink-0 h-6 w-6'
          )}
        />
        {children}
      </NavLink>
    );
  }
);

SidebarLink.displayName = 'SidebarLink';
