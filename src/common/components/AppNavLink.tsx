import { NavLink, NavLinkProps } from 'react-router-dom';

export interface AppNavLinkProps extends NavLinkProps {
  activeClass: string;
  inactiveClass: string;
}

export function AppNavLink({
  to,
  children,
  activeClass,
  inactiveClass,
  className,
  onClick,
}: AppNavLinkProps) {
  return (
    <NavLink
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
  );
}
