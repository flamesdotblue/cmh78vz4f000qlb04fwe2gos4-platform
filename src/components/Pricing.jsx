import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For prototypes and MVPs',
    features: [
      'Shared nodes • 3 chains',
      'Up to 5M requests/mo',
      'Basic indexing & logs',
      'Email support',
    ],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$99/mo',
    desc: 'For growing products',
    features: [
      'Dedicated nodes • 10 chains',
      'Up to 100M requests/mo',
      'Realtime indexing & webhooks',
      'SLA + priority support',
    ],
    cta: 'Upgrade to Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For mission‑critical apps',
    features: [
      'Private clusters & HSMs',
      'Unlimited requests',
      'SOC 2 Type II, SSO/SAML',
      '24/7 support & onboarding',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative z-10 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Scale when you’re ready. Cancel anytime.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={[
                'relative rounded-2xl border p-6 transition',
                tier.highlighted
                  ? 'border-transparent bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl'
                  : 'border-gray-200 bg-white shadow-sm',
              ].join(' ')}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                  Most popular
                </div>
              )}
              <div className="mb-4">
                <h3 className={['text-lg font-semibold', tier.highlighted ? 'text-white' : 'text-gray-900'].join(' ')}>{tier.name}</h3>
                <p className={['mt-1 text-3xl font-extrabold tracking-tight', tier.highlighted ? 'text-white' : 'text-gray-900'].join(' ')}>{tier.price}</p>
                <p className={['mt-1 text-sm', tier.highlighted ? 'text-gray-300' : 'text-gray-600'].join(' ')}>{tier.desc}</p>
              </div>
              <ul className="space-y-3">
                {tier.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={['mt-0.5 h-4 w-4', tier.highlighted ? 'text-emerald-400' : 'text-emerald-600'].join(' ')} />
                    <span className={tier.highlighted ? 'text-gray-100' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className={[
                    'inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold',
                    tier.highlighted
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-black',
                  ].join(' ')}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
