import { forwardRef } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface AppNavLinkProps extends NavLinkProps {
  activeClass: string;
  inactiveClass: string;
}

export const AppNavLink = forwardRef<HTMLAnchorElement, AppNavLinkProps>(
  (
    {
      to,
      children,
      activeClass,
      inactiveClass,
      className,
      onClick,
    }: AppNavLinkProps,
    ref
  ) => (
    <NavLink
      ref={ref}
      onClick={onClick}
      end
      to={to}
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
