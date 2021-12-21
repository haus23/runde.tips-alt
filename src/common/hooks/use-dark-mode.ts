import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const darkModeDisabledState = atom({
  key: 'modeSwitch',
  default: false,
});

const darkModeState = atom({
  key: 'darkMode',
  default: false,
});

const themeState = atom({
  key: 'theme',
  default: localStorage.getItem('theme') ?? 'system',
});

const setColorTheme = (theme: string) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

/**
 *
 * @param enable explicitly enable/disable dark mode
 */
function useDarkMode(enable?: boolean) {
  const [disabled, setDisabled] = useRecoilState(darkModeDisabledState);
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    if (typeof enable !== 'undefined') {
      setDisabled(!enable);
    }
  }, []);

  useEffect(() => {
    if (disabled) {
      setColorTheme('light');
      return;
    }

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const currentDarkMode =
      theme === 'system' ? darkModeQuery.matches : theme === 'dark';
    const currentTheme = currentDarkMode ? 'dark' : 'light';
    setDarkMode(currentDarkMode);

    setColorTheme(currentTheme);

    return darkModeQuery.addEventListener('change', (ev) => {
      if (disabled) return;
      setDarkMode(ev.matches);
      setColorTheme(ev.matches ? 'dark' : 'light');
      setTheme('system');
    });
  }, [disabled]);

  return { disabled, darkMode, theme };
}

export default useDarkMode;
