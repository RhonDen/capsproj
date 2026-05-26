import { useDarkMode } from '../context/DarkModeContext.jsx';
import { Moon, Sun } from 'lucide-react';

function DarkModeToggle({ className = '' }) {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className={
        `inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/5 transition hover:bg-white/10 ${className}`
      }
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-slate-100" />
      ) : (
        <Moon className="h-5 w-5 text-slate-800 dark:text-slate-100" />
      )}
    </button>
  );
}

export default DarkModeToggle;

