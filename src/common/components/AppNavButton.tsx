import { ReactNode } from 'react';

type AppNavButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export default function AppNavButton({ onClick, children }: AppNavButtonProps) {
  return (
    <button
      type="button"
      className="p-1 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2
        bg-white hover:bg-gray-100  hover:text-gray-500 focus:ring-indigo-500
        dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white  dark:focus:ring-offset-gray-800 dark:focus:ring-white
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
