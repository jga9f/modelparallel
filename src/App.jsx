import React, { useState, useEffect } from 'react';
import {
  Users, Search, Map, Shield, ChevronRight, BarChart3,
  Zap, Lock, Menu, X, CheckCircle2, Globe, Building2,
  MapPin, Car, Wifi, Wallet, Heart, Briefcase, GraduationCap,
  Plane, Smartphone, Leaf, ChevronDown, Radio, Home, Key, Clock, Languages, Image as ImageIcon
} from 'lucide-react';

// --- Constants & Data ---

// Rebrand: Swapped Video for Map Screenshot
const HERO_VISUAL = "/TwynPopFound.png";

const CASE_STUDIES = [
  {
    id: 1,
    type: "Retail Strategy",
    title: "The Hidden Chili Alley",
    metric: "New Market",
    challenge: "A major food co. planned 2026 ad spend in a known 'Chili Alley' but was blind to identical markets hiding in plain sight.",
    solution: "We found a 'Hidden Chili Alley' in Boston by overlaying grocery store maps. Enabled a targeted in-store marketing campaign.",
    tags: ["Retail", "Geo-Spatial"]
  },
  {
    id: 2,
    type: "Pharma Logistics",
    title: "Solved: The Privacy Paradox",
    metric: "100% Compliant",
    challenge: "Pharma logistics couldn't target by health condition due to HIPAA. Standard models failed to separate risk from identity.",
    solution: "Parallel modeled the probability of conditions based on purchase signals, enabling 100% compliant targeting without PII.",
    tags: ["Pharma", "Privacy"]
  },
  {
    id: 3,
    type: "Public Health",
    title: "Public Health Precision",
    metric: "70% Risk Risk Found",
    challenge: "Standard data assumes [Many Kids] + [Many Old Homes] = Risk. This 'Naïve' approach missed 70% of high-risk children.",
    solution: "Parallel modeled the intersection of housing age and family composition to pinpoint risk without PII.",
    tags: ["Origin Story", "Public Health"]
  },
  {
    id: 4,
    type: "Insurance Risk",
    title: "The Probability Trap",
    metric: "+40% Accuracy",
    challenge: "Insurer targeting anti-smoking campaigns used 'Naïve' census data, missing the true intersection of risk factors.",
    solution: "Parallel calculated joint probabilities of risk at the individual level. We found the status quo missed 40% of true high-risk census tracts.",
    tags: ["Insurance", "Predictive"]
  },
  {
    id: 5,
    type: "Hardware Sales",
    title: "The Resolution Gap",
    metric: "Granular Risk",
    challenge: "A smoke alarm giant needed to identify fire risk, but standard housing data lacked the necessary spatial resolution.",
    solution: "We brought in individual housing risk factors—specifically Space Heater usage—to pinpoint high-risk homes the spatial data missed.",
    tags: ["Hardware", "Risk"]
  }
];

const SIGNALS_LIST = [
  { id: 'ins_level', name: 'Level of Insurance', icon: Shield },
  { id: 'ins_type', name: 'Type of Insurance', icon: Shield },
  { id: 'dwelling', name: 'Dwelling (Home/Apt)', icon: Home },
  { id: 'own_rent', name: 'Own vs Rent', icon: Key },
  { id: 'home_age', name: 'Age of Home', icon: Clock },
  { id: 'ppl_home', name: 'People in Home', icon: Users },
  { id: 'house_comp', name: 'Household Comp.', icon: Users },
  { id: 'vehicles', name: 'Vehicle(s)', icon: Car },
  { id: 'commute', name: 'Commute Time', icon: MapPin },
  { id: 'language', name: 'Language Spoken', icon: Languages },
  { id: 'energy', name: 'Energy Use', icon: Zap },
  { id: 'marital', name: 'Marital Status', icon: Heart },
  { id: 'employ', name: 'Employment Status', icon: Briefcase },
  { id: 'job', name: 'Job Type', icon: Briefcase }
];

// --- Components ---

const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 relative overflow-hidden rounded">
              <img
                src="/parallel_icon.jpg"
                alt="Parallel Logo"
                className="object-contain h-full w-full"
              />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">PARALLEL</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

          <div className="lg:col-span-5 text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Synthetic Population Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              The Parallel World. <br />
              <span className="text-sky-400">The Perfect Prediction.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Run your strategy against 330 million synthetic agents before you launch in the real world. The statistical precision of the census, with zero privacy risk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]">
                Request Demo <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900/30 border border-slate-800">
              <img
                src={HERO_VISUAL}
                alt="Parallel Synthetic Map"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/10"></div>

              <div className="absolute inset-0 p-8 z-10 pointer-events-none">
                <div className="absolute top-4 right-4 text-xs font-mono text-indigo-400 bg-slate-950/80 backdrop-blur px-3 py-1 rounded border border-indigo-500/30">
                  AGENTS_ACTIVE: 331,449,281
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrustAnchor = () => {
  return (
    <div className="py-12 bg-slate-950 border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Born from <span className="text-indigo-400">Harvard Research</span>. Enterprise Scale.
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
          Built on architecture developed at Harvard University’s supercomputing clusters. We model 330 million synthetic agents—statistically identical to the US population, but born from code, not surveillance.
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 uppercase tracking-widest font-bold">
          <span className="flex items-center gap-2"><Lock size={16} className="text-indigo-500" /> GDPR Compliant</span>
          <span className="flex items-center gap-2"><Lock size={16} className="text-indigo-500" /> CCPA Safe</span>
          <span className="flex items-center gap-2"><Lock size={16} className="text-indigo-500" /> PII-Free</span>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ number, title, problem, solution, result, icon: Icon }) => (
  <div className="bg-slate-900 rounded-2xl p-8 border border-white/5 hover:border-indigo-500/30 transition-all group relative overflow-hidden h-full">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className="text-indigo-500 font-mono text-sm mb-4">0{number} // {title.toUpperCase()}</div>
      <h3 className="text-xl font-bold text-white mb-6 group-hover:text-sky-400 transition-colors">
        {title}
      </h3>

      <div className="space-y-4 text-sm">
        <div className="pl-4 border-l-2 border-slate-700">
          {/* REBRAND: Removed "The Problem" label for cleaner enterprise look, or kept it? Plan implies text updates only. Keeping labels for structure. */}
          <p className="text-slate-300 italic">"{problem}"</p>
        </div>
        <div className="pl-4 border-l-2 border-indigo-500/50">
          <p className="text-slate-200">{solution}</p>
        </div>
        <div className="pl-4 border-l-2 border-sky-500/50 bg-sky-500/5 py-2 pr-2 rounded-r">
          <span className="text-sky-500 block text-xs uppercase mb-1">Impact</span>
          <p className="text-white font-medium">{result}</p>
        </div>
      </div>
    </div>
  </div>
);

const LogicSection = () => {
  return (
    <div className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The <span className="text-indigo-400">Parallel</span> Engine</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From raw data to high-resolution density.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            number={1}
            title="Signal Extraction"
            icon={Search}
            problem="We need to find the behavioral DNA that drives purchase."
            solution="We ingest your customer data to isolate 'Hidden Signals'—the behavioral DNA that drives purchase, beyond basic demographics."
            result="Identify the core behavioral pattern."
          />
          <FeatureCard
            number={2}
            title="Parallel Projection"
            icon={Users}
            problem="Who else matches this exact DNA?"
            solution="We project those signals onto our synthetic US population to identify every agent who shares that behavioral DNA."
            result="A complete cohort of lookalike agents."
          />
          <FeatureCard
            number={3}
            title="High-Resolution Density"
            icon={Map}
            problem="Where are they located?"
            solution="We map the density of these agents down to the block level. Prove that Nashville has higher conversion potential than Austin."
            result="Precise geographic targeting."
          />
        </div>
      </div>
    </div>
  );
};

const SignalBuilder = () => {
  const [signals, setSignals] = useState(['Core Census']);
  const [region, setRegion] = useState('US');

  const toggleSignal = (signalId) => {
    if (signals.includes(signalId)) {
      setSignals(signals.filter(s => s !== signalId));
    } else {
      setSignals([...signals, signalId]);
    }
  };

  return (
    <div className="py-24 bg-slate-900 border-y border-white/5" id="build-cohort">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE: BUILDER CONTROLS */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Precision <span className="text-sky-400">Interface.</span></h2>
            <p className="text-slate-400 text-lg mb-8">
              Select hidden signals to sharpen your view, then choose your target geography.
            </p>

            <div className="space-y-6">
              {/* CORE PARALLEL BLOCK */}
              <div className="flex items-center justify-between bg-slate-800/50 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-700 flex items-center justify-center text-slate-400">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold">The Core Parallel</div>
                    <div className="text-xs text-slate-400">Age, Gender, Race/Ethnicity, Income, Education</div>
                  </div>
                </div>
                <div className="text-indigo-400 text-sm font-bold">INCLUDED</div>
              </div>

              {/* HIDDEN SIGNALS BLOCK */}
              <div className="p-5 rounded-lg border border-dashed border-slate-600 bg-slate-950/50">
                <div className="text-sm text-indigo-500 mb-4 uppercase tracking-wider font-bold font-mono"> // ADD HIDDEN SIGNALS</div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {SIGNALS_LIST.map((signal) => (
                    <button
                      key={signal.id}
                      onClick={() => toggleSignal(signal.id)}
                      className={`flex items-center gap-3 p-3 rounded transition-all text-sm font-medium border text-left ${signals.includes(signal.id)
                        ? 'bg-indigo-500/20 border-indigo-500 text-indigo-400'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-transparent hover:border-slate-600'
                        }`}
                    >
                      {signals.includes(signal.id) ? (
                        <CheckCircle2 size={18} className="flex-shrink-0 text-indigo-400" />
                      ) : (
                        <div className="w-[18px] h-[18px] rounded-full border border-slate-500 flex-shrink-0" />
                      )}
                      <span className="truncate">{signal.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* GEOGRAPHY BLOCK */}
              <div className="p-5 rounded-lg border border-slate-700 bg-slate-800/30">
                <div className="text-sm text-sky-500 mb-4 uppercase tracking-wider font-bold font-mono"> // SELECT REGION</div>
                <div className="grid grid-cols-3 gap-3">
                  {['US', 'State', 'DMA'].map((r) => (
                    <button
                      key={r}
                      onClick={() => setRegion(r)}
                      className={`py-2 px-3 rounded text-sm font-bold transition-all border ${region === r
                        ? 'bg-sky-500 text-slate-900 border-sky-500'
                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500'
                        }`}
                    >
                      {r === 'US' ? 'National' : r}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: VISUALIZATION (STATIC RESULT) */}
          <div className="mt-12 lg:mt-0 relative sticky top-24">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl relative overflow-hidden h-[600px] flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>

              {/* STATIC Stats Header */}
              <div className="flex flex-col items-center justify-center text-center mb-8 relative z-10 pt-4">
                <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Total Parallel Population</div>
                <div className="text-5xl lg:text-6xl font-mono font-bold text-white tracking-tighter">
                  2,368,347
                </div>
                <div className="text-indigo-400 text-sm font-bold mt-2">Identified in Market</div>
              </div>

              {/* VISUAL IMAGE PLACEHOLDER */}
              <div className="flex-1 relative flex items-center justify-center bg-slate-900/50 rounded-lg border-2 border-dashed border-slate-800 overflow-hidden mb-6 mx-4">
                <img
                  src="/TwynPopFound.png"
                  alt="Population Map"
                  className="w-full h-full object-contain opacity-80"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GridCaseStudies = () => {
  return (
    <div className="py-24 bg-slate-950 border-t border-slate-800" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Strategic <span className="text-sky-400">Impact</span></h2>
          <p className="text-slate-400">Validated results from the Parallel engine.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all group flex flex-col h-full">
              <div className="mb-6">
                <div className="inline-block px-2 py-1 rounded bg-slate-950 border border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {study.type}
                </div>
                <div className="text-3xl font-bold text-sky-400 font-mono tracking-tight mb-1">{study.metric}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">{study.title}</h3>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Challenge</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <div className="text-xs text-indigo-400 font-bold uppercase mb-1">Parallel Solution</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{study.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          The market is invisible to standard data.<br />
          <span className="text-indigo-400">Parallel makes it visible.</span>
        </h2>
        <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] mb-16">
          Enter the Parallel World
        </button>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm border-t border-white/5 pt-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 relative opacity-70">
              <img
                src="/parallel_icon.jpg"
                alt="Parallel"
                className="object-contain h-full w-full"
              />
            </div>
            <span>© 2025 Parallel Data Inc. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-100 font-sans selection:bg-indigo-500/30">
      <Navigation />
      <HeroSection />
      <TrustAnchor />
      <LogicSection />
      <SignalBuilder />
      <GridCaseStudies />
      <Footer />
    </div>
  );
};

export default App;
