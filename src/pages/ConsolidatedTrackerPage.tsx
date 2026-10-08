import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorStop, AlertTriangle, ArrowRightLeft, ArrowDownToLine, ArrowUpFromLine, CheckCircle, Factory, Activity, Zap, RefreshCw, Database, Network, ServerCog } from 'lucide-react';

export default function ConsolidatedTrackerPage() {
  const [congestionResolved, setCongestionResolved] = useState(false);
  const [isResolving, setIsResolving] = useState(false);

  // Generate some dummy dots for the map
  const [inboundDots, setInboundDots] = useState<Array<{id: number, x: number, y: number, delay: number, duration: number}>>([]);
  const [outboundDots, setOutboundDots] = useState<Array<{id: number, x: number, y: number, delay: number, duration: number}>>([]);

  useEffect(() => {
    // Generate initial static positions for dots
    const inDots = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: 5 + Math.random() * 20, // Start from far left
      y: 10 + Math.random() * 80,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10
    }));
    const outDots = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: 75 + Math.random() * 20, // Start from far right
      y: 10 + Math.random() * 80,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10
    }));
    setInboundDots(inDots);
    setOutboundDots(outDots);
  }, []);

  const handleResolveCongestion = () => {
    setIsResolving(true);
    setTimeout(() => {
      setIsResolving(false);
      setCongestionResolved(true);
    }, 1500);
  };

  return (
    <div className="w-full h-full p-4 md:p-6 lg:p-8 bg-slate-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <MonitorStop className="w-6 h-6 text-indigo-600" />
              Inbound/Outbound Consolidated Tracker
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Unified "Air Traffic Control" for your entire supply chain. Connects Procurement and Warehouse systems into one live view.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-bold bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)] animate-pulse"></span>
              <span className="text-slate-700">Inbound (Blue)</span>
            </div>
            <div className="w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></span>
              <span className="text-slate-700">Outbound (Green)</span>
            </div>
          </div>
        </div>

        {/* Pipeline / Data Flow Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Step 1 */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">1. Data Ingestion (Connectors)</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Securely connected to Procurement Database (raw materials) & Warehouse Management System (finished goods).
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 relative">
            <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-px bg-slate-300"></div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ServerCog className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">2. Data Normalization</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                AI translates completely different sets of legacy data into one single, easy-to-read standardized format.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 relative">
            <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-px bg-slate-300"></div>
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 relative overflow-hidden">
               <div className="absolute inset-0 bg-sky-100 animate-pulse"></div>
               <Network className="w-5 h-5 relative z-10" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">3. Live Output</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                All data pushed to a single live digital map for complete operational oversight.
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid for Map & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* The Global Live Map (Left Column) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[500px] lg:h-[600px] relative">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/80 z-10 relative backdrop-blur-sm">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                  <Activity className="w-4 h-4 text-indigo-500" /> 3. The Global Live Map
                </h2>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> Live Tracking Active
                </div>
              </div>
              
              {/* Map Canvas */}
              <div className="flex-1 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                {/* Subtle Grid / Radar Overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(#64748B 1px, transparent 1px), linear-gradient(90deg, #64748B 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />

                {/* Radar Sweep */}
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-700/30"></div>
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-700/30"></div>
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-600/40"></div>
                <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-500/50"></div>
                
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border-t-2 border-r-2 border-indigo-500/50 animate-[spin_4s_linear_infinite]">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-indigo-500/10 to-transparent rounded-full blur-md"></div>
                </div>

                {/* Central Factory */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.15)] flex flex-col items-center gap-2 backdrop-blur-xl relative">
                    <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl animate-pulse"></div>
                    <Factory className="w-8 h-8 text-indigo-400 relative z-10" />
                    <span className="text-white text-xs font-bold uppercase tracking-wider relative z-10">Central Factory</span>
                    <span className="text-slate-400 text-[10px] font-mono relative z-10">LOADING DOCK 01</span>
                  </div>
                </div>

                {/* Highway Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <path d="M 0 50% L 100% 50%" stroke="#94A3B8" strokeWidth="2" strokeDasharray="10,10" />
                  <path d="M 50% 0 L 50% 100%" stroke="#94A3B8" strokeWidth="2" strokeDasharray="10,10" />
                  <path d="M 20% 0 Q 30% 50%, 50% 50%" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                  <path d="M 80% 100% Q 70% 50%, 50% 50%" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                </svg>

                {/* Inbound Dots (Blue) */}
                {inboundDots.map((dot) => (
                  <motion.div
                    key={`in-${dot.id}`}
                    initial={{ left: `${dot.x}%`, top: `${dot.y}%`, opacity: 0 }}
                    animate={{ 
                      left: [`${dot.x}%`, '45%'], 
                      top: [`${dot.y}%`, '50%'],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: dot.duration, 
                      repeat: Infinity,
                      ease: "linear",
                      delay: dot.delay
                    }}
                    className="absolute w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)] z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <div className="absolute -inset-2 rounded-full border border-indigo-400/50 animate-ping" />
                  </motion.div>
                ))}

                {/* Outbound Dots (Green) */}
                {outboundDots.map((dot) => (
                  <motion.div
                    key={`out-${dot.id}`}
                    initial={{ left: '55%', top: '50%', opacity: 0 }}
                    animate={{ 
                      left: ['55%', `${dot.x}%`], 
                      top: ['50%', `${dot.y}%`],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: dot.duration, 
                      repeat: Infinity,
                      ease: "linear",
                      delay: dot.delay
                    }}
                    className="absolute w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)] z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <div className="absolute -inset-2 rounded-full border border-emerald-400/50 animate-ping" />
                  </motion.div>
                ))}

              </div>
            </div>
          </div>

          {/* Actionable Intel & Stats (Right Column) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* 4. Smart Dock Scheduling */}
            <div className={`p-6 rounded-2xl shadow-sm border transition-all duration-500 flex-shrink-0 ${
              congestionResolved 
                ? 'bg-emerald-50 border-emerald-200' 
                : 'bg-rose-50 border-rose-200 relative overflow-hidden'
            }`}>
              
              {!congestionResolved && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/20 blur-[50px] animate-pulse pointer-events-none" />
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/50 px-2 py-0.5 rounded-full border border-white/40 shadow-sm backdrop-blur-sm">4. Actionable Intel</span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner border ${
                    congestionResolved ? 'bg-emerald-100 text-emerald-600 border-emerald-200' : 'bg-rose-100 text-rose-600 border-rose-200'
                  }`}>
                    {congestionResolved ? <CheckCircle className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className={`font-bold uppercase tracking-wide text-sm ${
                      congestionResolved ? 'text-emerald-800' : 'text-rose-800'
                    }`}>
                      {congestionResolved ? 'Dock Schedule Optimized' : 'Dock Congestion Warning'}
                    </h3>
                    <p className={`text-xs font-mono mt-1 ${
                      congestionResolved ? 'text-emerald-600' : 'text-rose-600 font-bold'
                    }`}>
                      {congestionResolved ? 'No conflicts detected' : 'Critical Conflict at 2:00 PM'}
                    </p>
                  </div>
                </div>

                {!congestionResolved ? (
                  <>
                    <div className="bg-white/60 p-4 rounded-xl border border-rose-100 mb-5 text-sm leading-relaxed text-slate-700 shadow-inner backdrop-blur-sm">
                      If the AI detects that <strong className="text-indigo-600">5 inbound supplier trucks</strong> and <strong className="text-emerald-600">5 outbound customer trucks</strong> are all scheduled to arrive at the factory's loading dock at exactly <strong>2:00 PM</strong>, it prevents real-world chaos.
                    </div>
                    <button 
                      onClick={handleResolveCongestion}
                      disabled={isResolving}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(225,29,72,0.3)] disabled:opacity-75 active:scale-95 group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      {isResolving ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" /> Optimizing Schedule...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5" /> Auto-Reschedule 2 Inbound to 4:00 PM
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="bg-white/60 p-4 rounded-xl border border-emerald-100 mb-5 text-sm leading-relaxed text-emerald-800 shadow-inner backdrop-blur-sm border-l-4 border-l-emerald-500">
                      The manager instantly re-scheduled two of the inbound trucks for 4:00 PM, keeping the warehouse running smoothly. Suppliers notified automatically.
                    </div>
                    <button 
                      disabled
                      className="w-full bg-emerald-100 text-emerald-700 font-bold py-4 px-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-emerald-200 opacity-90"
                    >
                      <CheckCircle className="w-5 h-5" /> Chaos Prevented
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Active Transits Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-slate-800 uppercase tracking-wide text-sm mb-4 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-indigo-500" /> Active Transits
              </h3>
              
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center border border-indigo-200">
                      <ArrowDownToLine className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Inbound (Blue)</p>
                      <p className="text-[10px] font-mono text-slate-500">Procurement Database</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-indigo-600 leading-none">24</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Trucks</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-200">
                      <ArrowUpFromLine className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Outbound (Green)</p>
                      <p className="text-[10px] font-mono text-slate-500">Warehouse System</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-emerald-600 leading-none">18</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Trucks</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
