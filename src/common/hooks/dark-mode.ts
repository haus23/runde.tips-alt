import { atom, useRecoilState } from 'recoil';

const setColorTheme = (scheme: string, updateStorage = true) => {
  // set document class
  if (scheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  if (updateStorage) {
    localStorage.setItem('colorTheme', scheme);
  }
};

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const themeSettings = localStorage.colorTheme;

const darkModeEnabled = themeSettings !== 'light' && darkModeQuery.matches;
setColorTheme(darkModeEnabled ? 'dark' : 'light', false);

const darkModeState = atom({
  key: 'darkMode',
  default: darkModeEnabled,
});

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const toggleMode = () => {
    setColorTheme(darkMode ? 'light' : 'dark');
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleMode };
};

export default useDarkMode;
