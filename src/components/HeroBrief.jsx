import { School, Rocket, FileText } from 'lucide-react';

export default function HeroBrief() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-14">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 ring-1 ring-indigo-200">
              <School className="h-4 w-4" />
              <span className="text-sm font-medium">Smart School Management System (PWA)</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Run your school smoothly — online or offline
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              A modern, offline‑first platform for results, attendance, fees, and parent communication. Built as a Progressive Web App so it works on any device — even with poor connectivity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700"
              >
                <Rocket className="h-5 w-5" />
                <span>See Packages</span>
              </a>
              <a
                href="#proposal"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50"
              >
                <FileText className="h-5 w-5" />
                <span>Get a 1–2 page PDF proposal</span>
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              Prepared by Akube8 Media • Developer: Your Name • Date: {new Date().toLocaleDateString()}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-500">Offline‑First</p>
                    <p className="mt-1 text-sm text-gray-800">Use anywhere. Syncs when connected.</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">For Every Role</p>
                    <p className="mt-1 text-sm text-gray-800">Teachers, Admin, and Parents.</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-500">Installable</p>
                    <p className="mt-1 text-sm text-gray-800">Works like an app on phone or PC.</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Secure</p>
                    <p className="mt-1 text-sm text-gray-800">Role‑based access & cloud backup.</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-emerald-500/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
