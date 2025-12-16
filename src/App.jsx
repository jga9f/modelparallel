
import React, { useState, useEffect } from 'react';
import {
  Users, Search, Map, Shield, ChevronRight, BarChart3,
  Zap, Lock, Menu, X, CheckCircle2, Globe, Building2,
  MapPin, Car, Wifi, Wallet, Heart, Briefcase, GraduationCap,
  Plane, Smartphone, Leaf, ChevronDown, Radio, Home, Key, Clock, Languages, Image as ImageIcon,
  AlertTriangle, Database, Store, CloudRain, Train, AlertOctagon, Activity
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
                src="/Twin logo.jpg"
                alt="Twin Logo"
                className="object-contain h-full w-full"
              />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">TWIN</span>
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
              The Parallel World <br />
              <span className="text-sky-400">for Precision Marketing.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Twin is a strategic data asset of 330 million synthetic agents—statistically matched to the US population, but born from code, not surveillance. We calculate the "Hidden Variables" the census misses to give you joint probability precision with zero privacy risk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]">
                Find Your Twins <ChevronRight size={20} />
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
          Born from <span className="text-indigo-400">Harvard Research</span>. Built using <span className="text-indigo-400">Harvard’s supercomputers</span>.
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
          The Twin architecture was engineered at Harvard University and created over 2 years using Harvard’s high-performance computing clusters. We utilize real data from multiple incongruent datasets to reconstruct the U.S. population at a depth that has never been done before. The patterns are real; the people don’t actually exist. You get the mathematical precision of actual data with zero privacy risk.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Missing Markets. <span className="text-indigo-400">Scale Winning Strategies.</span></h2>

        </div>

        <div className="flex flex-col gap-8">
          {/* 01 WARNING - Full Width */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-white/5 hover:border-indigo-500/30 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <AlertTriangle size={200} />
            </div>
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="text-indigo-500 font-mono text-sm mb-4">01 // The Opportunity</div>
                <h3 className="text-2xl font-bold text-white mb-4">Who are you missing?</h3>
              </div>
              <div className="md:col-span-8 space-y-4 text-sm text-slate-300">
                <p>
                  We originally built this engine to solve a public health crisis: Lead Poisoning. Standard data assumed that <span className="text-white font-mono bg-slate-800 px-1 rounded">[Old Homes] + [Young Kids] = Risk</span>. It seems intuitive, but it was wrong.
                </p>
                <div className="pl-4 border-l-2 border-indigo-500/50">
                  <p>
                    By using Twin’s joint probabilities—accounting for who actually lives in those homes—we found that the standard method missed 70% of high-risk neighborhoods. If simple assumptions failed for public health, where are they failing your marketing strategy?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid for 02, 03, 04 */}
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              number={2}
              title="Precision Marketing"
              icon={Search}
              problem="You have a profile. Now find the people."
              solution="You are stuck targeting basic census buckets like 'Age' and 'Income.' Twin lets you target the Hidden Variables: Insurance coverage, job type, home appliances, commute times, and housing tenure."
              result="Don't just target '35-year-olds.' Target '35-year-old homeowners with a 45-minute commute and a specific water heater.' Precision marketing, zero privacy risk."
            />
            <FeatureCard
              number={3}
              title="Find New Markets"
              icon={Map}
              problem="Find your best customers. Then find their Twins."
              solution="You know you are winning in a specific region (e.g., Boston). Twin analyzes the statistical DNA of that successful market and instantly scans the entire US map to find the Mathematical Look-a-likes you are ignoring."
              result="Don't guess where to expand next. Let the data dictate the destination."
            />
            <FeatureCard
              number={4}
              title="Know Your Customers Better"
              icon={Database}
              problem="Know them without tracking them."
              solution="You have sales data, but privacy laws prevent you from knowing the full context of your customers' lives. By overlaying your sales data onto the Twin synthetic fabric, we can tell you more about your customers than you thought possible."
              result="Predicting their lifestyle, housing risks, and purchasing constraints—without ever touching PII."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ArchitectsSection = () => {
  const architects = [
    {
      name: "Joseph Allen, DSc",
      title: "CEO",
      education: "Professor, Harvard University | DSc (Doctor of Science, Boston University)",
      bio: "A global authority on population health and trusted advisor to senior executives at JPMorgan Chase and Amazon. He is the author of the award-winning book Healthy Buildings and a frequent contributor to the Harvard Business Review, The New York Times, and The Washington Post. He is the co-inventor of the Parallel synthetic population architecture, originally built in his Harvard lab.",
      image: "/joseph_allen.jpg"
    },
    {
      name: "Shivani Cott, PhD",
      title: "Chief Innovation Officer",
      education: "PhD, Harvard University",
      bio: "The co-inventor of the Parallel architecture. Her doctoral research at Harvard focused on quantifying invisible population vectors in complex systems using machine learning. She leads the research engine, ensuring our synthetic agents behave with the same biological and behavioral complexity as real populations.",
      image: "/shivani_cott.jpg"
    },
    {
      name: "Lauren Ferguson, PhD",
      title: "Chief Simulation Engineer",
      education: "PhD, University College London (UCL) | Postdoctoral Fellow, Harvard",
      bio: "An expert at the intersection of synthetic populations and building physics. Uniquely qualified in modeling the physical structures people inhabit, she powers Parallel’s granular housing insights. At Harvard, she co-developed the core synthetic population technology, and previously modeled environmental exposure for 1.3 million individuals in Greater London. She translates the chaotic physics of the real world into the structured precision of Parallel code.",
      image: "/lauren_ferguson.jpg"
    },
    {
      name: "Emily Jones, PhD",
      title: "Chief Science Officer",
      education: "BA, UC Berkeley | MS, Princeton | PhD, Harvard",
      bio: "The Chief Science Officer at Parallel’s parent company, 9 Foundations. She serves as the bridge between academic rigor, advanced analytics, and market reality. With a \"Triple Crown\" academic background, she ensures technical excellence for data science tools deployed for global Fortune 10 companies.",
      image: "/emily_jones.png"
    }
  ];

  return (
    <div className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The <span className="text-teal-400">Architects</span></h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Combined 60+ years of research and 100+ peer-reviewed publications. We didn't just wrap an API; we engineered the standard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {architects.map((person, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-slate-900/50 p-6 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden border-2 border-indigo-500/20">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{person.name}</h3>
                <div className="text-sm text-teal-400 italic mb-4 font-medium border-l-2 border-teal-500/30 pl-3">
                  {person.education}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SignalBuilder = () => {
  const [region, setRegion] = useState('National');
  const [selectedPack, setSelectedPack] = useState('Insurance');

  // State for base variables to allow toggling (defaulting all to true for "included" feel, or false? 
  // User said "let the user select... as many or few". I will default to all selected to match "included" vibe, or maybe just a few.
  // Let's use simple arrays for selection state for simplicity in this demo.
  const [baseDemo, setBaseDemo] = useState(['Age', 'Gender', 'Race/Ethnicity', 'Income']);
  const [baseHousing, setBaseHousing] = useState(['Type', 'Age of Home', 'Tenure']);
  const [insuranceVars, setInsuranceVars] = useState(['Health (Private, Medicare, Medicaid)', 'Fire Insurance', 'Flood Insurance']);

  const toggleItem = (list, setList, item) => {
    if (list.includes(item)) setList(list.filter(i => i !== item));
    else setList([...list, item]);
  };

  const VARIABLE_PACKS = [
    { id: 'Insurance', name: 'Insurance', icon: Shield },
    { id: 'Energy', name: 'Energy', icon: Zap },
    { id: 'Family', name: 'Family & Life', icon: Users },
    { id: 'Work', name: 'Work & Transit', icon: Briefcase },
    { id: 'Building', name: 'Building & Appliances', icon: Building2 }
  ];

  const SPATIAL_PACKS = [
    { id: 'Retail', name: 'Retail Stores', icon: Store },
    { id: 'Weather', name: 'Weather Patterns', icon: CloudRain },
    { id: 'Transit', name: 'Transit Access', icon: Train },
    { id: 'Crime', name: 'Crime Risk', icon: AlertOctagon },
    { id: 'POI', name: 'Points of Interest', icon: MapPin },
    { id: 'Footfall', name: 'Digital Footfall', icon: Activity }
  ];

  const [selectedSpatialPack, setSelectedSpatialPack] = useState('Retail');
  const [spatialVars, setSpatialVars] = useState(['Hardware Stores']);

  return (
    <div className="py-24 bg-slate-900 border-y border-white/5" id="build-cohort">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE: BUILDER CONTROLS */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Precision <span className="text-sky-400">Targeting.</span></h2>
            <p className="text-slate-400 text-lg mb-8">
              Choose your target geography. Then select hidden signals to sharpen your view.
            </p>

            <div className="space-y-8">

              {/* 1. GEOGRAPHY BLOCK */}
              <div className="space-y-3">
                <div className="text-sm text-sky-500 uppercase tracking-wider font-bold font-mono"> // 1. SELECT GEOGRAPHY</div>
                <div className="p-5 rounded-lg border border-slate-700 bg-slate-800/30">
                  <div className="grid grid-cols-4 gap-3">
                    {['State', 'Region', 'DMA', 'National'].map((r) => (
                      <button
                        key={r}
                        onClick={() => setRegion(r)}
                        className={`py - 2 px - 3 rounded text - sm font - bold transition - all border ${region === r
                          ? 'bg-sky-500 text-slate-900 border-sky-500'
                          : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500'
                          } `}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. BASE VARIABLES BLOCK */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-indigo-500 uppercase tracking-wider font-bold font-mono"> // 2. SELECT BASE VARIABLES</div>
                  <div className="text-indigo-400 text-[10px] font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">INCLUDED</div>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-lg border border-white/10 space-y-6">
                  {/* Demographics */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-white font-bold text-sm">
                      <Users size={16} className="text-slate-400" /> Demographics
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Age', 'Gender', 'Race/Ethnicity', 'Income'].map(item => (
                        <button
                          key={item}
                          onClick={() => toggleItem(baseDemo, setBaseDemo, item)}
                          className={`px-4 py-2 rounded-md text-xs font-bold border shadow-sm transition-all ${baseDemo.includes(item)
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-indigo-500/20'
                            : 'bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                            } `}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Housing Characteristics */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-white font-bold text-sm">
                      <Home size={16} className="text-slate-400" /> Housing Characteristics
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Type', 'Age of Home', 'Tenure'].map(item => (
                        <button
                          key={item}
                          onClick={() => toggleItem(baseHousing, setBaseHousing, item)}
                          className={`px-4 py-2 rounded-md text-xs font-bold border shadow-sm transition-all ${baseHousing.includes(item)
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-indigo-500/20'
                            : 'bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                            } `}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. TARGET VARIABLE PACKS */}
              <div className="space-y-3">
                <div className="text-sm text-sky-500 uppercase tracking-wider font-bold font-mono"> // 3. SELECT TARGET VARIABLES</div>
                <div className="p-5 rounded-lg border border-dashed border-slate-600 bg-slate-950/50">
                  <div className="grid grid-cols-1 gap-3">
                    {VARIABLE_PACKS.map((pack) => (
                      <div key={pack.id} className="w-full">
                        <button
                          onClick={() => setSelectedPack(selectedPack === pack.id ? null : pack.id)}
                          className={`w - full flex items - center justify - between p - 4 rounded - lg border transition - all ${selectedPack === pack.id
                            ? 'bg-slate-800 border-indigo-500'
                            : 'bg-slate-900 border-slate-700 hover:border-slate-600'
                            } `}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p - 2 rounded ${selectedPack === pack.id ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500'} `}>
                              {pack.icon && <pack.icon size={18} />}
                            </div>
                            <span className={`font - bold ${selectedPack === pack.id ? 'text-white' : 'text-slate-300'} `}>{pack.name}</span>
                          </div>
                          <ChevronDown size={18} className={`transition - transform ${selectedPack === pack.id ? 'rotate-180 text-indigo-400' : 'text-slate-600'} `} />
                        </button>

                        {/* EXPANDED CONTENT (Sub-variables as Buttons) */}
                        {selectedPack === pack.id && pack.id === 'Insurance' && (
                          <div className="mt-2 ml-2 pl-4 border-l-2 border-indigo-500/20 py-2 space-y-2">
                            <div className="flex flex-wrap gap-2">
                              {['Health (Private, Medicare, Medicaid)', 'Fire Insurance', 'Flood Insurance'].map(sub => (
                                <button
                                  key={sub}
                                  onClick={() => toggleItem(insuranceVars, setInsuranceVars, sub)}
                                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs font-bold border shadow-sm transition-all w-full md:w-auto ${insuranceVars.includes(sub)
                                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-indigo-500/20'
                                    : 'bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                                    } `}
                                >
                                  {insuranceVars.includes(sub) ? <CheckCircle2 size={14} className="text-indigo-400" /> : <div className="w-3.5 h-3.5 rounded-full border border-slate-600"></div>}
                                  {sub}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. SPATIAL OVERLAY BLOCK */}
                <div className="space-y-3">
                  <div className="text-sm text-emerald-500 uppercase tracking-wider font-bold font-mono"> // 4. ADD SPATIAL OVERLAY</div>
                  <div className="p-5 rounded-lg border border-dashed border-slate-600 bg-slate-950/50">
                    <div className="grid grid-cols-1 gap-3">
                      {SPATIAL_PACKS.map((pack) => (
                        <div key={pack.id} className="w-full">
                          <button
                            onClick={() => setSelectedSpatialPack(selectedSpatialPack === pack.id ? null : pack.id)}
                            className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all ${selectedSpatialPack === pack.id
                              ? 'bg-slate-800 border-emerald-500'
                              : 'bg-slate-900 border-slate-700 hover:border-slate-600'
                              } `}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded ${selectedSpatialPack === pack.id ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'} `}>
                                {pack.icon && <pack.icon size={18} />}
                              </div>
                              <span className={`font-bold ${selectedSpatialPack === pack.id ? 'text-white' : 'text-slate-300'} `}>{pack.name}</span>
                            </div>
                            <ChevronDown size={18} className={`transition-transform ${selectedSpatialPack === pack.id ? 'rotate-180 text-emerald-400' : 'text-slate-600'} `} />
                          </button>

                          {/* EXPANDED CONTENT */}
                          {selectedSpatialPack === pack.id && pack.id === 'Retail' && (
                            <div className="mt-2 ml-2 pl-4 border-l-2 border-emerald-500/20 py-2 space-y-2">
                              <div className="flex flex-wrap gap-2">
                                {['Hardware Stores', 'Grocery Stores', 'Pharmacies', 'QSR'].map(sub => (
                                  <button
                                    key={sub}
                                    onClick={() => toggleItem(spatialVars, setSpatialVars, sub)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs font-bold border shadow-sm transition-all w-full md:w-auto ${spatialVars.includes(sub)
                                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-emerald-500/20'
                                      : 'bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                                      } `}
                                  >
                                    {spatialVars.includes(sub) ? <CheckCircle2 size={14} className="text-emerald-400" /> : <div className="w-3.5 h-3.5 rounded-full border border-slate-600"></div>}
                                    {sub}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: VISUALIZATION */}
          <div className="mt-12 lg:mt-0 relative sticky top-24">
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl relative overflow-hidden h-[800px] flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>

              {/* STATIC Stats Header */}
              <div className="flex flex-col items-center justify-center text-center mb-8 relative z-10 pt-4">
                <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Total Twin Population</div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Case <span className="text-sky-400">Studies</span></h2>
          <p className="text-slate-400">See how Companies are Using Twin</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-slate-900 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all group relative overflow-hidden h-96 flex flex-col">

              {/* DEFAULT CONTENT */}
              <div className="mb-6 flex-grow transition-all duration-300 group-hover:opacity-10 group-hover:blur-sm">
                <div className="inline-block px-2 py-1 rounded bg-slate-950 border border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {study.type}
                </div>
                <div className="text-3xl font-bold text-sky-400 font-mono tracking-tight mb-1">{study.metric}</div>
                <h3 className="text-lg font-bold text-white mb-4">{study.title}</h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase mb-1">Challenge</div>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{study.challenge}</p>
                  </div>
                </div>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-slate-950/95 flex flex-col p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-10">
                <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Deep Dive: {study.type}</div>
                <p className="text-slate-300 text-sm mb-4">
                  Advanced analysis of {study.type.toLowerCase()} scenarios revealed hidden correlations in vector space. Twin's engine simulated 40,000 iterations to optimize outcomes.
                </p>

                {/* Visual Placeholder */}
                <div className="flex-grow bg-slate-900 rounded border border-dashed border-slate-700 flex items-center justify-center mb-4 relative overflow-hidden group/visual">
                  <div className="text-slate-500 text-xs text-center px-4">
                    [ Visual: {study.type} Graph/Heatmap ]
                  </div>
                  {/* Subtle grid pattern background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:8px_8px]"></div>
                </div>

                <button className="text-white text-sm font-bold flex items-center gap-2 group-hover/btn:gap-3 transition-all">
                  View Case Study <ChevronRight size={16} className="text-indigo-500" />
                </button>
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
          Your next 100,000 customers are<br />
          <span className="text-indigo-400">hiding in plain sight.</span>
        </h2>
        <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] mb-16">
          Find Your Twins
        </button>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm border-t border-white/5 pt-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 relative opacity-70">
              <img
                src="/Twin logo.jpg"
                alt="Parallel"
                className="object-contain h-full w-full"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-semibold text-white">© 2025 9 Foundations, Inc.</span>
              <span className="text-xs text-slate-600">Protected by U.S. and International Patents.</span>
            </div>
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
      <ArchitectsSection />
      <SignalBuilder />
      <GridCaseStudies />
      <Footer />
    </div>
  );
};

export default App;
