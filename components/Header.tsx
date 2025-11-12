export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 border-b border-slate-200/80 bg-white/80 backdrop-blur-md shadow-sm z-50 h-20 pl-8 pr-8">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-5xl">⛵</span>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Catamaran
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              An interactive explorer of category theory
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

