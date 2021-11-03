import { atom, useRecoilState } from 'recoil';

const setColorScheme = (scheme: string, updateStorage = true) => {
  // set document class
  if (scheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  if (updateStorage) {
    localStorage.setItem('colorScheme', scheme);
  }
};

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const themeSettings = localStorage.colorScheme;

const darkModeEnabled = themeSettings !== 'light' && darkModeQuery.matches;
setColorScheme(darkModeEnabled ? 'dark' : 'light', false);

const darkModeState = atom({
  key: 'darkMode',
  default: darkModeEnabled,
});

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const toggleMode = () => {
    setColorScheme(darkMode ? 'light' : 'dark');
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleMode };
};

export default useDarkMode;
