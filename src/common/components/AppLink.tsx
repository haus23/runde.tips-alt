import { NavLink, NavLinkProps } from 'react-router-dom';

interface AppLinkProps extends NavLinkProps {
  activeClass: string;
  inactiveClass: string;
}

export default function AppLink({
  to,
  children,
  activeClass,
  inactiveClass,
}: AppLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
    >
      {children}
    </NavLink>
  );
}
