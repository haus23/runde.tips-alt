import { ElementType, ReactNode } from 'react';
import { useMatch } from 'react-router-dom';
import { AppNavLink } from '~/common/components';

type BackyardNavLinkProps = {
  children: ReactNode;
  to: string;
  icon: ElementType;
  onClick?: () => void;
};

export default function BackyardNavLink({
  children,
  to,
  icon,
  onClick = () => {},
}: BackyardNavLinkProps) {
  const Icon = icon;
  const match = useMatch(to);
  return (
    <AppNavLink
      to={to}
      className="group flex items-center px-2 py-2 text-base font-medium rounded-md"
      activeClass="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
      inactiveClass="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
      onClick={onClick}
    >
      <Icon
        className={[
          'mr-3 flex-shrink-0 h-6 w-6',
          match
            ? 'text-gray-500 dark:text-gray-300'
            : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300',
        ].join(' ')}
      />
      {children}
    </AppNavLink>
  );
}
