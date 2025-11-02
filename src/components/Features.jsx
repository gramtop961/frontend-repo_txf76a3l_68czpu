import { BarChart3, Users, Wallet, ShieldCheck, Smartphone, Cloud, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Result Management',
    icon: BarChart3,
    points: [
      'Automatic calculation of grades and averages',
      'Custom report sheet with your logo and grading format',
      'Easy upload, print, and export of results',
      'Parent access via secure login'
    ],
  },
  {
    title: 'Teacher & Class Management',
    icon: Users,
    points: [
      'Assign subjects and classes to teachers',
      'Daily attendance and performance tracking',
      'Generate and monitor class reports',
    ],
  },
  {
    title: 'Fees & Payments',
    icon: Wallet,
    points: [
      'Record payments, balances, and generate receipts',
      'Monitor collection per class or term',
      'Notify parents of pending payments',
    ],
  },
];

const pwaBenefits = [
  { icon: Smartphone, text: 'Install on phones, tablets, and computers' },
  { icon: Cloud, text: 'Works offline and syncs when the network is back' },
  { icon: ShieldCheck, text: 'Secure, role-based access with cloud backups' },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Core Features</h2>
          <p className="mt-2 max-w-prose text-gray-600">Everything you need to manage academics and administration in one place.</p>
          <div className="mt-8 grid gap-6">
            {features.map(({ title, icon: Icon, points }) => (
              <div key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                      <span className="text-sm leading-6">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Offline–First Advantage</h2>
          <p className="mt-2 max-w-prose text-gray-600">Built as a Progressive Web App so learning never stops — even without internet.</p>
          <div className="mt-8 space-y-4">
            {pwaBenefits.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 rounded-xl bg-gradient-to-r from-indigo-50 to-sky-50 p-4 ring-1 ring-indigo-100">
                <div className="rounded-md bg-white p-2 text-indigo-700 shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-6 text-gray-800">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-emerald-900">
            <p className="font-medium">Perfect for areas with limited or unstable connectivity.</p>
            <p className="mt-1 text-sm">Use offline in classrooms and sync automatically to the cloud later.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
