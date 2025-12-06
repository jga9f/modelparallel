import React, { useState, useEffect } from 'react';
import {
  Users, Search, Map, Shield, ChevronRight, BarChart3,
  Zap, Lock, Menu, X, CheckCircle2, Globe, Building2,
  MapPin, Car, Wifi, Wallet, Heart, Briefcase, GraduationCap,
  Plane, Smartphone, Leaf, ChevronDown, Radio, Home, Key, Clock, Languages, Image as ImageIcon
} from 'lucide-react';

// --- Constants & Data ---

// PRESERVED: Using local video file version 2
const VIDEO_SOURCE = "/HiddenSignals2.mp4";

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
    title: "The HIPAA Barrier",
    metric: "Service Expanded",
    challenge: "Delivery service knew what was bought, but due to privacy/HIPAA, they didn't collect data on 'who' the customers were.",
    solution: "We overlaid purchase data to reveal the 'Hidden Signal' variables of current buyers, then found underserved lookalike areas to expand service.",
    tags: ["Pharma", "Privacy"]
  },
  {
    id: 3,
    type: "Public Health",
    title: "The Origin Story: Lead",
    metric: "70% Risk Missed",
    challenge: "Standard data assumes [Many Kids] + [Many Old Homes] = Risk. This 'Naïve' approach ignores if kids actually *live* in those homes.",
    solution: "Twyn modeled the joint probability of Kids *living in* Old Homes. We proved the naïve approach missed 70% of high-risk children.",
    tags: ["Origin Story", "Public Health"]
  },
  {
    id: 4,
    type: "Insurance Risk",
    title: "The Probability Trap",
    metric: "+40% Accuracy",
    challenge: "Insurer targeting anti-smoking campaigns used 'Naïve' census data, missing the true intersection of risk factors.",
    solution: "Twyn calculated joint probabilities of risk at the individual level. We found the status quo missed 40% of true high-risk census tracts.",
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
  // Removed state for mobile menu as requested
  const menuItems = ['The Logic', 'Case Studies', 'Build Cohort', 'Login'];

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 relative overflow-hidden rounded">
              <img
                src="/logo.png"
                alt="Twyn Logo"
                className="object-contain h-full w-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden w-full h-full">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-cyan-500">
                  <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" fill="#0f172a" stroke="currentColor" strokeWidth="4" />
                  <path d="M50 0 L50 50 L93.3 25" fill="#0891b2" opacity="0.8" />
                  <path d="M50 50 L50 100 L6.7 75" fill="#22d3ee" opacity="0.6" />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">Twyn</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              ))}
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                Start Simulation
              </button>
            </div>
          </div>

          {/* Removed Hamburger Mobile Menu */}
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Synthetic Population Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Find Your <span className="text-amber-400">Best Customers.</span><br />
              Then Find <span className="text-cyan-400">Their Twyns.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              You have a profile of your ideal buyer. We have a synthetic simulation of all 330 million Americans. Twyn matches them to find your "Hidden Market"—the people who look, act, and buy exactly like your best customers.
            </p>

            {/* UPDATED BUTTON STRATEGY: Reverted to previous preferred layout */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#the-logic" className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                Get Started <ChevronRight size={20} />
              </a>
              <a href="#build-cohort" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all">
                Find Your Twyns Now
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900/30">
              <div className="absolute inset-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-90 mix-blend-screen"
                >
                  <source src={VIDEO_SOURCE} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/10"></div>
              </div>

              <div className="absolute inset-0 p-8 z-10 pointer-events-none">
                <div className="absolute top-4 right-4 text-xs font-mono text-cyan-500 bg-slate-950/50 backdrop-blur px-2 py-1 rounded border border-cyan-500/30">
                  MATCH_COUNT: 52,401
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ number, title, problem, solution, result, icon: Icon }) => (
  <div className="bg-slate-900 rounded-2xl p-8 border border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden h-full">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className="text-cyan-500 font-mono text-sm mb-4">0{number} // {title.toUpperCase()}</div>
      <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
        {number === 1 ? "You think you know your customer. You don't." :
          number === 2 ? "Take that profile. Scan the country." :
            "Expand without the guesswork."}
      </h3>

      <div className="space-y-4 text-sm">
        <div className="pl-4 border-l-2 border-slate-700">
          <span className="text-slate-500 block text-xs uppercase mb-1">The Problem</span>
          <p className="text-slate-300">{problem}</p>
        </div>
        <div className="pl-4 border-l-2 border-cyan-500/50">
          <span className="text-cyan-500 block text-xs uppercase mb-1">The Twyn</span>
          <p className="text-slate-200">{solution}</p>
        </div>
        <div className="pl-4 border-l-2 border-amber-500/50 bg-amber-500/5 py-2 pr-2 rounded-r">
          <span className="text-amber-500 block text-xs uppercase mb-1">The Result</span>
          <p className="text-white font-medium">{result}</p>
        </div>
      </div>
    </div>
  </div>
);

const SolutionsSection = () => {
  return (
    <div className="py-24 bg-slate-950" id="the-logic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Logic of <span className="text-cyan-400">Twyn</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Stop targeting generic census buckets. Start cloning your specific success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            number={1}
            title="Reverse Engineer"
            icon={Search}
            problem="You know they are 'Females, 35-45, in Boston.' That is generic census data."
            solution="We overlay your customer data to reveal Hidden Signals."
            result="You discover your best buyer is actually 'Female, 35-45, who rents home, commutes >45 mins, and has a space heater.' DNA, not demographics."
          />
          <FeatureCard
            number={2}
            title="The Lookalike"
            icon={Users}
            problem="You want to know where you should ad spend."
            solution="We feed that 'Hidden Signal' profile into our US simulation."
            result="We find 'Twyns' of your best customer in markets you haven't even touched yet."
          />
          <FeatureCard
            number={3}
            title="The Expansion"
            icon={Map}
            problem="'We're crushing it in Boston. Should we go to Austin or Nashville?'"
            solution="Don't guess. We calculate the density of 'Twyns' in every city in America."
            result="The data proves Nashville has significantly higher density of your specific customers than Austin, even if cities look same on paper."
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Build Your <span className="text-cyan-400">Cohort.</span></h2>
            <p className="text-slate-400 text-lg mb-8">
              Precision requires more than just age and income. Select hidden signals to sharpen your view, then choose your target geography.
            </p>

            <div className="space-y-6">
              {/* CORE TWYN BLOCK */}
              <div className="flex items-center justify-between bg-slate-800/50 p-4 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-700 flex items-center justify-center text-slate-400">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-white font-bold">The Core Twyn</div>
                    <div className="text-xs text-slate-400">Age, Gender, Race/Ethnicity, Income, Education</div>
                  </div>
                </div>
                <div className="text-cyan-400 text-sm font-bold">INCLUDED</div>
              </div>

              {/* HIDDEN SIGNALS BLOCK */}
              <div className="p-5 rounded-lg border border-dashed border-slate-600 bg-slate-950/50">
                <div className="text-sm text-cyan-500 mb-4 uppercase tracking-wider font-bold font-mono"> // ADD HIDDEN SIGNALS</div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {SIGNALS_LIST.map((signal) => (
                    <button
                      key={signal.id}
                      onClick={() => toggleSignal(signal.id)}
                      className={`flex items-center gap-3 p-3 rounded transition-all text-sm font-medium border text-left ${signals.includes(signal.id)
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-transparent hover:border-slate-600'
                        }`}
                    >
                      {signals.includes(signal.id) ? (
                        <CheckCircle2 size={18} className="flex-shrink-0 text-cyan-400" />
                      ) : (
                        <div className="w-[18px] h-[18px] rounded-full border border-slate-500 flex-shrink-0" />
                      )}
                      <span className="truncate">{signal.name}</span>
                    </button>
                  ))}
                </div>
                {/* 200+ SIGNALS INDICATOR */}
                <div className="pt-3 border-t border-white/10 text-center">
                  <span className="text-slate-500 text-xs uppercase tracking-wide font-bold">
                    + 200 additional hidden signals available in full library
                  </span>
                </div>
              </div>

              {/* GEOGRAPHY BLOCK */}
              <div className="p-5 rounded-lg border border-slate-700 bg-slate-800/30">
                <div className="text-sm text-amber-500 mb-4 uppercase tracking-wider font-bold font-mono"> // SELECT REGION</div>
                <div className="grid grid-cols-3 gap-3">
                  {['US', 'State', 'DMA'].map((r) => (
                    <button
                      key={r}
                      onClick={() => setRegion(r)}
                      className={`py-2 px-3 rounded text-sm font-bold transition-all border ${region === r
                        ? 'bg-amber-500 text-slate-900 border-amber-500'
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
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>

              {/* STATIC Stats Header */}
              <div className="flex flex-col items-center justify-center text-center mb-8 relative z-10 pt-4">
                <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Total Twyn Population</div>
                <div className="text-5xl lg:text-6xl font-mono font-bold text-white tracking-tighter">
                  2,368,347
                </div>
                <div className="text-cyan-400 text-sm font-bold mt-2">Identified in Market</div>
              </div>

              {/* PRESERVED: Visual Placeholder using TwynPopFound.png */}
              <div className="flex-1 relative flex items-center justify-center bg-slate-900/50 rounded-lg border-2 border-dashed border-slate-800 overflow-hidden mb-6 mx-4">

                {/* Image Content */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/TwynPopFound.png"
                    alt="Twyn Population Found Map"
                    className="w-full h-full object-contain opacity-80"
                  />
                </div>

                {/* Subtle Grid Pattern Overlay */}
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
          <h2 className="text-3xl font-bold text-white mb-4">Validated <span className="text-cyan-400">Success</span></h2>
          <p className="text-slate-400">Don't guess. Clone what works.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-cyan-500/30 transition-all group flex flex-col h-full">
              <div className="mb-6">
                <div className="inline-block px-2 py-1 rounded bg-slate-950 border border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {study.type}
                </div>
                <div className="text-3xl font-bold text-cyan-400 font-mono tracking-tight mb-1">{study.metric}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{study.title}</h3>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <div className="text-xs text-red-400 font-bold uppercase mb-1">Challenge</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <div className="text-xs text-green-400 font-bold uppercase mb-1">Solution</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{study.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {study.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TrustBar = () => {
  return (
    <div className="py-20 bg-slate-950 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Shield className="mx-auto text-cyan-500 mb-6" size={48} />

        {/* UPDATED HEADLINE: Stronger Privacy Hook */}
        <h2 className="text-3xl font-bold text-white mb-6">Infinite Precision. Zero PII.</h2>

        {/* HARVARD KICKER - INTEGRATED HERE */}
        <div className="inline-block px-4 py-3 bg-cyan-950/20 rounded-lg border border-cyan-500/20 mb-8 max-w-2xl relative">
          <p className="text-slate-300 text-sm font-medium">
            <span className="text-amber-400 font-bold">Research Grade Architecture:</span> Built over 2 years using <span className="text-white font-bold">Harvard University's</span> supercomputing clusters to model 330 million synthetic agents.
          </p>
        </div>

        {/* UPDATED COPY: "Insight without the invasion" */}
        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
          Our agents are synthetic simulations—statistically identical to your customers, but born from code, not surveillance. You get the insight without the invasion.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-2"><Lock size={14} /> GDPR Compliant</span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="flex items-center gap-2"><Lock size={14} /> CCPA Safe</span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="flex items-center gap-2"><Lock size={14} /> PII-Free</span>
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
          Your next 100,000 customers are <br /> hiding in plain sight.
        </h2>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] mb-16">
          Find the Twyns
        </button>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm border-t border-white/5 pt-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 relative opacity-50 grayscale hover:grayscale-0 transition-all">
              <img
                src="/logo.png"
                alt="Twyn"
                className="object-contain h-full w-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current hidden">
                <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" />
              </svg>
            </div>
            <span>© 2025 Twyn Intelligence. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <SignalBuilder />
      <GridCaseStudies />
      <TrustBar />
      <Footer />
    </div>
  );
};

export default App;
