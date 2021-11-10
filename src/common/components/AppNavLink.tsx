import { forwardRef } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface AppNavLinkProps extends NavLinkProps {
  activeClass: string;
  inactiveClass: string;
}

export const AppNavLink = forwardRef<HTMLAnchorElement, AppNavLinkProps>(
  (
    {
      children,
      activeClass,
      inactiveClass,
      className,
      ...props
    }: AppNavLinkProps,
    ref
  ) => (
    <NavLink
      ref={ref}
      end
      {...props}
      className={({ isActive }) =>
        isActive
          ? `${className} ${activeClass}`
          : `${className} ${inactiveClass}`
      }
    >
      {children}
    </NavLink>
  )
);
