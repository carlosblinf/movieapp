/* eslint-disable react/jsx-no-constructed-context-values */
import { PaletteMode, Theme, ThemeProvider, createTheme } from '@mui/material';
import { createContext, ReactNode, useContext, useState, useMemo, useEffect } from 'react';
import { themeSettings } from './theme';

export type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  colorMode: {
    toggleColorMode: () => void;
  };
};

const ThemeContext = createContext({} as ThemeContextType);

export function useTheme() {
  return useContext(ThemeContext);
}

const THEME_MODE = 'movie_theme_mode';

// Detecting the default theme
const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const getDefaultTheme = (): string => {
  const localStorageTheme = localStorage.getItem(THEME_MODE);
  const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
  return localStorageTheme || browserDefault;
};

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>(getDefaultTheme() as PaletteMode);

  useEffect(() => {
    localStorage.setItem(THEME_MODE, mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ theme, colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
