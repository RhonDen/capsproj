import DarkModeToggle from './DarkModeToggle.jsx';

function PublicDarkModeToggle() {
  return (
    <div className="fixed right-6 top-6 z-[60]">
      <DarkModeToggle className="bg-white/10 text-slate-100 border-white/20 hover:bg-white/15 dark:bg-slate-800/60 dark:text-slate-100 dark:border-white/10" />
    </div>
  );
}

export default PublicDarkModeToggle;


