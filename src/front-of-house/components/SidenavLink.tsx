import { ReactNode } from 'react';
import { AppNavLink } from '~/common/components';

type SidenavLinkProps = {
  children: ReactNode;
  to: string;
  onClick?: () => void;
};

export default function SidenavLink({
  children,
  to,
  onClick = () => {},
}: SidenavLinkProps) {
  return (
    <AppNavLink
      to={to}
      onClick={onClick}
      className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
      activeClass="bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900 dark:text-white"
      inactiveClass="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:bg-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
    >
      {children}
    </AppNavLink>
  );
}
