import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

/**
 * Custom hook to consume active ThemeContext
 * Provides: { theme, resolvedTheme, isDark, toggleTheme, setTheme }
 */
export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
