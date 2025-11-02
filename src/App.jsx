import HeroBrief from './components/HeroBrief';
import Features from './components/Features';
import DeploymentPricing from './components/DeploymentPricing';
import TechSupport from './components/TechSupport';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600" />
            <span className="text-sm font-semibold tracking-tight">Akube8 Media</span>
          </div>
          <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
            <a href="#" className="hover:text-gray-900">Overview</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#proposal" className="hover:text-gray-900">Proposal</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroBrief />
        <section id="features">
          <Features />
        </section>
        <DeploymentPricing />
        <TechSupport />
      </main>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Akube8 Media — Software & Media Solutions for Schools and Businesses
      </footer>
    </div>
  );
}

export default App;
