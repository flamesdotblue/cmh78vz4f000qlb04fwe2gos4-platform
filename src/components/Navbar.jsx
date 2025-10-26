import React from 'react';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400"></div>
              <span className="font-semibold tracking-tight">HoloChain Labs</span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-sm text-gray-700 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Docs</a>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Status</a>
            </nav>
            <div className="hidden md:block">
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-black">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
