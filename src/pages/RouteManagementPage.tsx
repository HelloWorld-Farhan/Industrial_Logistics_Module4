import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Ship, Package, Calculator, BrainCircuit, CheckCircle, ArrowRight, ShieldCheck, Banknote, Clock } from 'lucide-react';

export default function RouteManagementPage() {
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Form states (Pre-filled for demonstration)
  const [cargoWeight, setCargoWeight] = useState('1,000');
  const [cargoType, setCargoType] = useState('non-perishable machinery');
  const [destination, setDestination] = useState('China');

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEvaluating(true);
    setShowResults(false);
    
    // Simulate AI thinking time
    setTimeout(() => {
      setIsEvaluating(false);
      setShowResults(true);
    }, 2500);
  };

  const handleBook = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      alert("Route booked successfully! Carriers notified.");
    }, 500);
  };

  return (
    <div className="w-full h-full p-4 md:p-6 lg:p-8 bg-slate-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <BrainCircuit className="w-6 h-6 text-indigo-600" />
            Route Management AI
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Mathematically proves the best transport method across land, sea, and air based on cost, speed, and cargo type.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column: Input Form & Results */}
          <div className="w-full lg:w-[400px] shrink-0 space-y-6">
            
            {/* Step 1: Parameters */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold">1</span>
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Shipment Parameters</h2>
              </div>

              <form onSubmit={handleEvaluate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" /> Cargo Weight (kg)
                  </label>
                  <input 
                    type="text" 
                    value={cargoWeight}
                    onChange={(e) => setCargoWeight(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Cargo Type
                  </label>
                  <select 
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  >
                    <option value="non-perishable machinery">Non-perishable machinery</option>
                    <option value="cold-chain medical">Cold-chain Medical Supplies</option>
                    <option value="perishable food">Perishable Food</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Target Destination</label>
                  <input 
                    type="text" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isEvaluating || bookingConfirmed}
                  className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 active:scale-95"
                >
                  {isEvaluating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Evaluating Multi-Modal Routes...
                    </>
                  ) : (
                    <>
                      <Calculator className="w-4 h-4" /> Run AI Evaluation
                    </>
                  )}
                </button>
              </form>
            </div>
            
          </div>

          {/* Right Column: AI Output & Recommendation */}
          <div className="flex-1">
            {isEvaluating && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-slate-400 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <BrainCircuit className="w-16 h-16 text-indigo-500 animate-pulse mb-6 opacity-50" />
                <h3 className="text-lg font-bold text-slate-700 mb-2">AI is evaluating...</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" /> Querying global shipping lines...</p>
                  <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" /> Analyzing live road freight APIs...</p>
                  <p className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" /> Calculating risk & disruption data...</p>
                </div>
              </div>
            )}

            {!isEvaluating && !showResults && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-slate-400 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <Calculator className="w-16 h-16 opacity-20 mb-4" />
                <p className="font-medium tracking-wide text-sm">RUN EVALUATION TO SEE OPTIONS</p>
              </div>
            )}

            <AnimatePresence>
              {showResults && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Step 2: Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Option A */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 opacity-60 grayscale-[50%] hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                            <Plane className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-sm">Option A (Air)</h3>
                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Fastest Route</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500 flex items-center gap-1.5"><Clock className="w-4 h-4" /> Transit Time</span>
                          <span className="font-bold text-slate-900">2 Days</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500 flex items-center gap-1.5"><Banknote className="w-4 h-4" /> Total Cost</span>
                          <span className="font-bold text-rose-600">$15,000</span>
                        </div>
                      </div>
                    </div>

                    {/* Option B (Recommended) */}
                    <div className="bg-white p-5 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.15)] border-2 border-emerald-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                        AI Recommended
                      </div>
                      
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                            <Ship className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-sm">Option B (Sea)</h3>
                            <p className="text-[10px] text-emerald-600 uppercase font-bold tracking-wider">Most Efficient</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500 flex items-center gap-1.5"><Clock className="w-4 h-4" /> Transit Time</span>
                          <span className="font-bold text-slate-700">30 Days</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500 flex items-center gap-1.5"><Banknote className="w-4 h-4" /> Total Cost</span>
                          <span className="font-bold text-emerald-600">$1,500</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Recommendation Box */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-6 rounded-2xl shadow-sm relative overflow-hidden border border-slate-200"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 blur-[60px] pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                          <BrainCircuit className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">The AI Recommendation</h2>
                          <p className="text-emerald-600 text-xs font-mono font-bold">Evaluation Complete</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-5 border-l-2 border-emerald-500 pl-4 py-1">
                        Since it is <strong>non-perishable machinery</strong> with no cold-chain requirements, speed is less critical than cost. 
                        The AI explicitly recommends <strong>Sea Freight via Western Indian Port</strong>.
                        <br/><br/>
                        <span className="text-emerald-700 font-semibold italic">"Markedly cheaper with an acceptable extra transit time for non-perishable cargo."</span>
                      </p>

                      {/* Step 4: Decision & Booking */}
                      <button 
                        onClick={handleBook}
                        disabled={bookingConfirmed}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                          bookingConfirmed 
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 active:scale-95'
                        }`}
                      >
                        {bookingConfirmed ? (
                          <>
                            <CheckCircle className="w-5 h-5" /> Booking Confirmed & Approved
                          </>
                        ) : (
                          <>
                            Approve & Book Option B <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
