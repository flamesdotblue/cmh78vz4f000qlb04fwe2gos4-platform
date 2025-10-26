import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Zap } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(147,51,234,0.20),transparent)]"></div>
      </div>
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs text-gray-700 backdrop-blur">
          <Zap className="h-3.5 w-3.5 text-fuchsia-500" />
          Next‑gen blockchain infrastructure
        </span>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Launch Web3 apps faster with a modern blockchain SaaS
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Scalable nodes, real‑time indexing, and secure wallets—delivered as a fully managed platform so your team can ship in days, not months.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 hover:bg-black">
            <Rocket className="h-4 w-4" />
            Get Started
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            <Shield className="h-4 w-4 text-emerald-600" />
            Explore Features
          </a>
        </div>
        <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-4 text-left">
          <div className="rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur">
            <p className="text-xs font-medium text-gray-500">Latency</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">Sub‑100ms global</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur">
            <p className="text-xs font-medium text-gray-500">Uptime</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">99.99% SLA</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white/80 p-4 backdrop-blur">
            <p className="text-xs font-medium text-gray-500">Security</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">SOC 2 Type II</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
