import { useEffect } from 'react';
import {
  atom,
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

type ColorTheme = 'system' | 'light' | 'dark';

const darkModeDisabledState = atom({
  key: 'modeSwitch',
  default: false,
});

const darkModeState = atom({
  key: 'darkMode',
  default: false,
});

const colorThemeState = atom({
  key: 'theme',
  default: (localStorage.getItem('theme') ?? 'system') as ColorTheme,
});

const setDOMClass = (darkMode: boolean) => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

/**
 *
 * @param enable explicitly enable/disable dark mode
 */
function useDarkMode(enable?: boolean) {
  const [disabled, setDisabled] = useRecoilState(darkModeDisabledState);

  const darkMode = useRecoilValue(darkModeState);
  const theme = useRecoilValue(colorThemeState);

  const setTheme = useRecoilCallback(({ set }) => (theme: ColorTheme) => {
    let dark: boolean;

    if (theme === 'system') {
      dark = darkModeQuery.matches;
      localStorage.removeItem('theme');
    } else {
      dark = theme === 'dark';
      localStorage.setItem('theme', theme);
    }

    setDOMClass(dark);
    set(darkModeState, dark);
    set(colorThemeState, theme);
  });

  useEffect(() => {
    if (typeof enable !== 'undefined') {
      setDisabled(!enable);
    }
  }, []);

  useEffect(() => {
    if (disabled) {
      setDOMClass(false);
      return;
    }

    setTheme(theme);

    return darkModeQuery.addEventListener('change', () => {
      if (disabled) return;
      setTheme('system');
    });
  }, [disabled]);

  return { disabled, darkMode, theme, setTheme };
}

export default useDarkMode;
