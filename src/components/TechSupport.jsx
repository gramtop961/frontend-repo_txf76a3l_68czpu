import { ShieldCheck, Mail, Phone, Cloud } from 'lucide-react';

export default function TechSupport() {
  return (
    <section id="proposal" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Technical Stack</h2>
          <div className="mt-6 grid gap-4">
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Frontend</p>
              <p className="text-gray-900">React PWA (Offline-ready)</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Backend</p>
              <p className="text-gray-900">Secure REST API (Laravel or similar)</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Database</p>
              <p className="text-gray-900">MySQL / IndexedDB (Offline Cache)</p>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 p-5 text-emerald-900 ring-1 ring-emerald-200">
              <Cloud className="h-5 w-5" />
              <div>
                <p className="font-medium">Cloud hosting with automated backups</p>
                <p className="text-sm">Your data is safe and recoverable at any time.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Support & Next Steps</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3 rounded-xl bg-indigo-50 p-4 text-indigo-900 ring-1 ring-indigo-200">
              <ShieldCheck className="mt-0.5 h-5 w-5" />
              <div>
                <p className="font-medium">Free training and onboarding</p>
                <p className="text-sm">We train your staff and provide 6 months of technical support.</p>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Want a printable brief?</p>
              <p className="mt-1 text-gray-900">We can format this into a clean, branded 1–2 page PDF with your logo and colors.</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-700">
                  Request PDF Proposal
                </a>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <a href="mailto:you@example.com" className="inline-flex items-center gap-2 hover:text-gray-900">
                    <Mail className="h-4 w-4" /> you@example.com
                  </a>
                  <a href="tel:+2348000000000" className="inline-flex items-center gap-2 hover:text-gray-900">
                    <Phone className="h-4 w-4" /> +234 800 000 0000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
