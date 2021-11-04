import { ReactNode } from 'react';
import { AppNavLink } from '~/common/components';

type TopnavLinkProps = {
  children: ReactNode;
  to: string;
};

export default function TopnavLink({ children, to }: TopnavLinkProps) {
  return (
    <AppNavLink
      to={to}
      className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      activeClass="border-indigo-500 text-gray-900 dark:bg-gray-900 dark:text-white"
      inactiveClass="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
    >
      {children}
    </AppNavLink>
  );
}
