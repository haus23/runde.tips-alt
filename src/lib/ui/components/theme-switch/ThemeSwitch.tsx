import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { UserMenuItem } from '@/lib/ui/components/user-menu/user-menu-item/UserMenuItem';
import useDarkMode from '@/common/hooks/use-dark-mode';
import {
  DesktopComputerIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline';
import classNames from '@/common/lib/class-names';

export const ThemeSwitch = () => {
  const { theme, darkMode, setTheme } = useDarkMode();

  const CurrentModeIcon = darkMode ? MoonIcon : SunIcon;

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className="bg-white dark:bg-gray-800 p-1 rounded-full
        text-yellow-500 dark:text-gray-400 dark:hover:text-white
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        dark:focus:ring-offset-gray-800 dark:focus:ring-white"
      >
        <CurrentModeIcon className="h-6 w-6 rounded-full" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col gap-y-1 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 px-2 bg-white dark:bg-gray-800  ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme('light')}
                className={classNames(
                  theme === 'light'
                    ? 'bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-300'
                    : 'text-gray-600 dark:text-gray-300',
                  active
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                    : '',
                  'flex items-center text-base font-medium rounded-md w-full px-4 py-2'
                )}
              >
                <SunIcon className="h-6 w-6" />
                <span className="ml-2">Light</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme('dark')}
                className={classNames(
                  theme === 'dark'
                    ? 'bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-300'
                    : 'text-gray-600 dark:text-gray-300',
                  active
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                    : '',
                  'flex items-center text-base font-medium rounded-md w-full px-4 py-2'
                )}
              >
                <MoonIcon className="h-6 w-6" />
                <span className="ml-2">Dark</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme('system')}
                className={classNames(
                  theme === 'system'
                    ? 'bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-300'
                    : 'text-gray-600 dark:text-gray-300',
                  active
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                    : '',
                  'flex items-center text-base font-medium rounded-md w-full px-4 py-2'
                )}
              >
                <DesktopComputerIcon className="h-6 w-6" />
                <span className="ml-2">System</span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
