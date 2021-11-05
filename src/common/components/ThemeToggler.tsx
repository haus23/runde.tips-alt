import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useDarkMode } from '~/common/hooks';
import AppNavButton from './AppNavButton';

export default function ThemeToggler() {
  const { darkMode, toggleMode } = useDarkMode();

  return (
    <AppNavButton onClick={toggleMode}>
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-300" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </AppNavButton>
  );
}
