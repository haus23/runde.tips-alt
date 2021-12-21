import { useEffect } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const darkModeDisabledState = atom({
  key: 'modeSwitch',
  default: false,
});

const setColorTheme = (theme: string) => {
  console.log(theme);
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

  useEffect(() => {
    if (typeof enable !== 'undefined') {
      setDisabled(!enable);
    }
  }, []);

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(disabled);
    const systemTheme = !disabled && darkModeQuery.matches ? 'dark' : 'light';
    setColorTheme(systemTheme);

    return darkModeQuery.addEventListener('change', (ev) => {
      const systemTheme = !disabled && ev.matches ? 'dark' : 'light';
      setColorTheme(systemTheme);
    });
  }, [disabled]);

  return { disabled };
}

export default useDarkMode;
