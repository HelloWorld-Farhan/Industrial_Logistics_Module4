import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorStop, AlertTriangle, ArrowRightLeft, ArrowDownToLine, ArrowUpFromLine, CheckCircle, Clock, Truck, Factory, Activity, Zap, RefreshCw } from 'lucide-react';

export default function ConsolidatedTrackerPage() {
  const [congestionResolved, setCongestionResolved] = useState(false);
  const [isResolving, setIsResolving] = useState(false);

  // Generate some dummy dots for the map
  const [inboundDots, setInboundDots] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [outboundDots, setOutboundDots] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    // Generate initial static positions for dots
    const inDots = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: 10 + Math.random() * 30, // Left side mostly
      y: 10 + Math.random() * 80
    }));
    const outDots = Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      x: 60 + Math.random() * 30, // Right side mostly
      y: 10 + Math.random() * 80
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <MonitorStop className="w-6 h-6 text-indigo-600" />
              Inbound/Outbound Consolidated Tracker
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Unified "Air Traffic Control" for your entire supply chain. Normalized data from Procurement and Warehouse Management Systems onto a single live map.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-bold bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
              <span className="text-slate-700">Inbound (Suppliers)</span>
            </div>
            <div className="w-px h-4 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <span className="text-slate-700">Outbound (Customers)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Main Map Area (2/3 width) */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col min-h-[500px] relative">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 z-10 relative">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                  <Activity className="w-4 h-4 text-indigo-500" /> Global Live Map
                </h2>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> Live Data Normalization Active
                </div>
              </div>
              
              {/* Map Visuals */}
              <div className="flex-1 bg-[#0F172A] relative overflow-hidden flex items-center justify-center">
                {/* Grid Overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />

                {/* Central Factory Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full border border-slate-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
                  <div className="w-96 h-96 rounded-full border border-slate-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
                  
                  <div className="bg-slate-900 border-2 border-indigo-500/50 p-4 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)] flex flex-col items-center gap-2 backdrop-blur-md relative z-10">
                    <Factory className="w-8 h-8 text-indigo-400" />
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Central Factory</span>
                    <span className="text-slate-400 text-[10px] font-mono">DOCK-01</span>
                  </div>
                  
                  {/* Connection lines simulating roads */}
                  <svg className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                    <path d="M 0 400 Q 400 300, 400 400 T 800 400" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M 400 0 Q 300 400, 400 400 T 400 800" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="5,5" />
                    <path d="M 100 100 L 400 400" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
                    <path d="M 700 700 L 400 400" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
                    <path d="M 100 700 L 400 400" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
                    <path d="M 700 100 L 400 400" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
                  </svg>
                </div>

                {/* Inbound Dots (Blue/Indigo) */}
                {inboundDots.map((dot) => (
                  <motion.div
                    key={`in-${dot.id}`}
                    initial={{ left: `${dot.x}%`, top: `${dot.y}%`, opacity: 0 }}
                    animate={{ 
                      left: [`${dot.x}%`, '45%'], 
                      top: [`${dot.y}%`, '48%'],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 10 + Math.random() * 15, 
                      repeat: Infinity,
                      ease: "linear",
                      delay: Math.random() * 10
                    }}
                    className="absolute w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </motion.div>
                ))}

                {/* Outbound Dots (Green/Emerald) */}
                {outboundDots.map((dot) => (
                  <motion.div
                    key={`out-${dot.id}`}
                    initial={{ left: '55%', top: '52%', opacity: 0 }}
                    animate={{ 
                      left: ['55%', `${dot.x}%`], 
                      top: ['52%', `${dot.y}%`],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 10 + Math.random() * 15, 
                      repeat: Infinity,
                      ease: "linear",
                      delay: Math.random() * 10
                    }}
                    className="absolute w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </motion.div>
                ))}

              </div>
            </div>
          </div>

          {/* Sidebar Area (1/3 width) */}
          <div className="flex flex-col gap-6">
            
            {/* Smart Dock Scheduling - Actionable Intel */}
            <div className={`p-6 rounded-2xl shadow-sm border transition-all duration-500 ${
              congestionResolved 
                ? 'bg-emerald-50 border-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                : 'bg-rose-50 border-rose-200 shadow-[0_0_30px_rgba(244,63,94,0.15)] relative overflow-hidden'
            }`}>
              
              {!congestionResolved && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-[40px] animate-pulse pointer-events-none" />
              )}

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                    congestionResolved ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
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
                      {congestionResolved ? 'No conflicts detected' : 'Actionable Intel Detection'}
                    </p>
                  </div>
                </div>

                {!congestionResolved ? (
                  <>
                    <p className="text-slate-700 text-sm leading-relaxed mb-5">
                      AI detects that <strong>5 inbound supplier trucks</strong> and <strong>5 outbound customer trucks</strong> are all scheduled to arrive at the factory's loading dock at exactly <strong>14:00 (2:00 PM)</strong>.
                    </p>
                    <button 
                      onClick={handleResolveCongestion}
                      disabled={isResolving}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-200 disabled:opacity-75 active:scale-95"
                    >
                      {isResolving ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" /> Rescheduling...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5" /> Auto-Reschedule 2 Inbound to 16:00
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-emerald-700 text-sm leading-relaxed mb-5 border-l-2 border-emerald-400 pl-3 py-1">
                      2 inbound trucks successfully rescheduled to 16:00. Suppliers notified automatically. Congestion prevented.
                    </p>
                    <button 
                      disabled
                      className="w-full bg-emerald-100 text-emerald-600 font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-emerald-200"
                    >
                      <CheckCircle className="w-5 h-5" /> Resolved automatically
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Quick Stats list */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex-1">
              <h3 className="font-bold text-slate-800 uppercase tracking-wide text-sm mb-6 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-indigo-500" /> Active Transits
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                      <ArrowDownToLine className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Inbound Raw Materials</p>
                      <p className="text-[10px] font-mono text-slate-500">Procurement Database</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-indigo-600">24</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Trucks</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <ArrowUpFromLine className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Outbound Finished Goods</p>
                      <p className="text-[10px] font-mono text-slate-500">Warehouse System</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-emerald-600">18</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Trucks</p>
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
