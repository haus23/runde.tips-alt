import { forwardRef, ReactNode } from 'react';
import { AppNavLink } from '~/common/components';

type SidenavLinkProps = {
  children: ReactNode;
  to: string;
  onClick?: () => void;
};

const SidenavLink = forwardRef<HTMLAnchorElement, SidenavLinkProps>(
  ({ children, to, onClick = () => {} }: SidenavLinkProps, ref) => (
    <AppNavLink
      ref={ref}
      to={to}
      onClick={onClick}
      className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:px-3 dark:border-l-0 dark:rounded-md"
      activeClass="bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-gray-800 dark:text-white"
      inactiveClass="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:hover:bg-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
    >
      {children}
    </AppNavLink>
  )
);

export default SidenavLink;
