import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, MapPin, Truck, CheckCircle, Smartphone, QrCode, Timer } from 'lucide-react';

export default function TrackingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<'form' | 'loading' | 'qr'>('form');
  const [phone, setPhone] = useState('');
  const [isTrackingActive, setIsTrackingActive] = useState(false);
  const [aiLogs, setAiLogs] = useState<{time: string; message: string; type: 'info' | 'alert' | 'offline'}[]>([]);

  // Simulation timeline when tracking becomes active
  useEffect(() => {
    if (isTrackingActive) {
      setAiLogs([{ time: '17:30', message: 'AI Log: Calculating theoretical perfect route... Expected border arrival: 18:00.', type: 'info' }]);
      
      const timer1 = setTimeout(() => {
        setAiLogs(prev => [...prev, { time: '17:35', message: 'DEVIATION DETECTED: Truck is still 80km away from expected waypoint.', type: 'alert' }]);
      }, 3000);

      const timer2 = setTimeout(() => {
        setAiLogs(prev => [...prev, { time: '17:36', message: 'Signal Lost. Driver\'s phone is unresponsive.', type: 'offline' }]);
      }, 6000);

      const timer3 = setTimeout(() => {
        setAiLogs(prev => [...prev, { time: '17:40', message: 'Delay Reason: Border customs congestion + Unscheduled 45-min halt. Revised ETA: 21:40.', type: 'alert' }]);
      }, 9000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      setAiLogs([]);
    }
  }, [isTrackingActive]);

  const handleGenerateToken = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStep('loading');
    setTimeout(() => {
      setModalStep('qr');
    }, 1500);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalStep('form');
    setPhone('');
    setIsTrackingActive(true); // Start the tracking simulation on close
  };

  const handleCompleteTrip = () => {
    setIsTrackingActive(false);
    alert("Tracking data saved to central database. Driver's mobile app wiped and reset to zero.");
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-6 p-4 md:p-6 lg:p-8 bg-slate-50 min-h-0 overflow-y-auto lg:overflow-hidden">
      
      {/* Left Column: Shipment Details & Action */}
      <div className="w-full lg:w-[350px] shrink-0 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800">Active Shipments</h2>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
              {isTrackingActive ? '1' : '0'}
            </div>
          </div>
          
          {!isTrackingActive ? (
            <div className="text-center py-10 border-2 border-dashed border-slate-100 rounded-xl">
              <Truck className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-500 mb-4">No active tracking sessions.</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-200"
              >
                Assign Driver & Setup
              </button>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 border border-slate-200 p-4 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Order #TRK-9928</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Driver: {phone || '+1 555-0199'}</p>
                </div>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold tracking-wider">LIVE</span>
              </div>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-600 font-medium truncate">HQ Distribution Center</span>
                </div>
                <div className="pl-1.5 h-3 border-l-2 border-dashed border-slate-300 ml-1.5" />
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="text-slate-800 font-bold truncate">Western Indian Port</span>
                </div>
              </div>

              <button 
                onClick={handleCompleteTrip}
                className="w-full mt-5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 py-2 rounded-lg font-medium text-xs transition-colors"
              >
                Mark as Reached Destination
              </button>
            </motion.div>
          )}
        </div>

        {/* AI Terminal Log */}
        <div className="bg-[#0B0F19] flex-1 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-slate-800">
          <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between bg-[#111827]">
            <div className="flex items-center gap-2 text-white">
              <Timer className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs font-semibold tracking-wider">AI AGENT STREAM</span>
            </div>
            {isTrackingActive && (
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            )}
          </div>
          <div className="p-4 overflow-y-auto flex-1 font-mono text-[11px] leading-relaxed space-y-3">
            {aiLogs.length === 0 && (
              <div className="text-slate-600 flex items-center gap-2">
                <span>Waiting for active telemetry...</span>
              </div>
            )}
            <AnimatePresence>
              {aiLogs.map((log, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-2 rounded border-l-2 ${
                    log.type === 'alert' ? 'bg-rose-500/10 border-rose-500 text-rose-300' : 
                    log.type === 'offline' ? 'bg-red-500/20 border-red-500 text-red-400 font-bold' : 
                    'bg-indigo-500/10 border-indigo-500 text-indigo-300'
                  }`}
                >
                  <span className="opacity-50 mr-2">[{log.time}]</span>
                  {log.message}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Right Column: Live Map Simulation */}
      <div className="flex-1 bg-slate-900 rounded-2xl overflow-hidden relative shadow-inner border border-slate-800 min-h-[400px]">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {isTrackingActive ? (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Map Path Simulation */}
            <svg width="100%" height="100%" className="absolute inset-0 z-0">
              <path 
                d="M 100,100 C 200,300 400,200 600,400" 
                fill="transparent" 
                stroke="#334155" 
                strokeWidth="4" 
                strokeDasharray="8 8"
              />
              <path 
                d="M 100,100 C 200,300 400,200 600,400" 
                fill="transparent" 
                stroke="#10B981" 
                strokeWidth="4"
                strokeDasharray="600"
                strokeDashoffset="300"
                className="animate-[dash_10s_linear_infinite]"
              />
            </svg>
            <style>{`
              @keyframes dash {
                to { stroke-dashoffset: 0; }
              }
            `}</style>
            
            {/* Moving Truck Node */}
            <motion.div 
              initial={{ x: -200, y: -100 }}
              animate={{ x: 0, y: 100 }}
              transition={{ duration: 5, ease: "linear" }}
              className="relative z-10 w-12 h-12 bg-white rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center"
            >
              <Truck className="w-6 h-6 text-emerald-600" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
              </span>
            </motion.div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
            <Map className="w-16 h-16 opacity-20 mb-4" />
            <p className="font-medium tracking-wide">AWAITING SHIPMENT DISPATCH</p>
          </div>
        )}
      </div>

      {/* MODAL: Assign Driver & Token Generator */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setModalStep('form')} // allow clicking out only if needed, but lets restrict
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-[24px] p-6 lg:p-8 w-full max-w-md shadow-2xl relative z-10 overflow-hidden"
            >
              {modalStep === 'form' && (
                <form onSubmit={handleGenerateToken} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-indigo-600" />
                    Setup Live Tracking
                  </h3>
                  <p className="text-sm text-slate-500">Drivers don't need accounts. We'll send an SMS link to download the app and auto-configure the trip.</p>
                  
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Order ID</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all">
                        <option>Order #TRK-9928 (Machinery to China)</option>
                        <option>Order #TRK-9929 (Electronics to EU)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Driver Phone Number</label>
                      <input 
                        required
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-3 rounded-xl font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors">
                      Cancel
                    </button>
                    <button type="submit" className="flex-1 px-4 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95">
                      Generate Token
                    </button>
                  </div>
                </form>
              )}

              {modalStep === 'loading' && (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-100"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Generating Zero-Trust Token</h3>
                  <p className="text-sm text-slate-500">Creating dynamic QR code and dispatching SMS...</p>
                </div>
              )}

              {modalStep === 'qr' && (
                <div className="text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Trip Configured!</h3>
                    <p className="text-sm text-slate-500 mt-1">SMS sent to {phone || 'driver'}. Driver can also scan below.</p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl inline-block border border-slate-200 shadow-sm relative group overflow-hidden">
                    <QrCode className="w-40 h-40 text-slate-800 relative z-10" />
                    {/* Scanning animation line */}
                    <motion.div 
                      animate={{ y: [0, 160, 0] }} 
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 left-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={handleCloseModal}
                      className="w-full px-4 py-3 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all active:scale-95"
                    >
                      Done & Start Tracking
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
