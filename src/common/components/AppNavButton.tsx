import { forwardRef, ReactNode } from 'react';

type AppNavButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const AppNavButton = forwardRef<HTMLButtonElement, AppNavButtonProps>(
  ({ onClick, children }: AppNavButtonProps, ref) => (
    <button
      ref={ref}
      type="button"
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2
        bg-white hover:bg-gray-100  hover:text-gray-500 focus:ring-indigo-500
        dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white  dark:focus:ring-offset-gray-800 dark:focus:ring-white
      "
      onClick={onClick}
    >
      {children}
    </button>
  )
);

export default AppNavButton;
