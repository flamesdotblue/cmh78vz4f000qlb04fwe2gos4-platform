import React from 'react';
import { Zap, Shield, Wallet, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-fuchsia-600" />,
    title: 'Real‑time Indexing',
    desc: 'Stream on‑chain data to your app with sub‑second freshness and powerful querying.',
  },
  {
    icon: <Shield className="h-6 w-6 text-emerald-600" />,
    title: 'Secure by Default',
    desc: 'Encrypted keys, hardware HSMs, and role‑based access controls keep your apps safe.',
  },
  {
    icon: <Wallet className="h-6 w-6 text-cyan-600" />,
    title: 'Wallet APIs',
    desc: 'Unified APIs for custody, signing, and transactions across major chains.',
  },
  {
    icon: <Rocket className="h-6 w-6 text-violet-600" />,
    title: 'One‑click Scale',
    desc: 'Autoscale nodes and indexers globally with built‑in observability and alerts.',
  },
];

function Features() {
  return (
    <section id="features" className="relative z-10 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to build Web3 apps</h2>
          <p className="mt-3 text-gray-600">A single platform for nodes, indexing, wallets, and security—designed for speed and reliability.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-200">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
              <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 opacity-0 transition group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
