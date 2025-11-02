import { CheckCircle2 } from 'lucide-react';

const phases = [
  { phase: 'Phase 1', desc: 'Result, Student, and Attendance modules (offline-first)', duration: '2 weeks' },
  { phase: 'Phase 2', desc: 'Parent Portal, Fees, and Cloud Sync', duration: '1 week' },
  { phase: 'Phase 3', desc: 'Training, Testing, and Go Live', duration: '3 days' },
];

const packages = [
  { name: 'Basic', desc: 'Result + Student Records (Offline only)', price: '₦250,000' },
  { name: 'Standard', desc: 'Result + Student + Attendance + Fees + Parent Portal (Hybrid Offline/Online)', price: '₦350,000', badge: 'Most Popular' },
  { name: 'Premium', desc: 'All Modules + SMS Alerts + 1-Year Support', price: '₦500,000' },
];

export default function DeploymentPricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Deployment Plan</h2>
          <p className="mt-2 max-w-prose text-gray-600">A clear path from setup to launch in three focused phases.</p>
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-100 bg-white">
            <div className="grid divide-y divide-gray-100">
              {phases.map((p) => (
                <div key={p.phase} className="grid grid-cols-1 items-center gap-3 p-4 md:grid-cols-12">
                  <div className="md:col-span-2 font-medium text-gray-900">{p.phase}</div>
                  <div className="md:col-span-8 text-sm text-gray-700">{p.desc}</div>
                  <div className="md:col-span-2 text-sm text-gray-500">{p.duration}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-4 text-sm text-gray-600">
              Total Implementation Time: <span className="font-medium text-gray-900">3 weeks</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Pricing Options</h2>
          <p className="mt-2 max-w-prose text-gray-600">Flexible packages with a simple payment plan — 60% upfront, 40% after delivery.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`relative rounded-2xl border bg-white p-6 shadow-sm ${pkg.badge ? 'border-indigo-300 ring-1 ring-indigo-200' : 'border-gray-100'}`}>
                {pkg.badge && (
                  <div className="absolute -top-2 right-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow">{pkg.badge}</div>
                )}
                <div className="text-sm text-gray-500">{pkg.name}</div>
                <div className="mt-1 text-2xl font-bold text-gray-900">{pkg.price}</div>
                <p className="mt-3 text-sm text-gray-700">{pkg.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />Lifetime access to selected modules</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />Cloud backups and data portability</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />Free staff onboarding</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
