import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} HoloChain Labs, Inc. All rights reserved.</p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Status</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Docs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
