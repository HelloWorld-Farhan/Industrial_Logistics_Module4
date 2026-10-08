import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Ship, Package, Calculator, BrainCircuit, CheckCircle, ArrowRight, ShieldCheck, Banknote, Clock, Activity, Globe2, Network, Leaf, TrendingDown, ArrowUpRight } from 'lucide-react';

export default function RouteManagementPage() {
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Form states
  const [cargoWeight, setCargoWeight] = useState('1,000');
  const [cargoType, setCargoType] = useState('non-perishable machinery');
  const [destination, setDestination] = useState('Shanghai, China');

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEvaluating(true);
    setShowResults(false);
    
    // Simulate AI thinking time
    setTimeout(() => {
      setIsEvaluating(false);
      setShowResults(true);
    }, 3000);
  };

  const handleBook = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      alert("Route booked successfully! Carriers and logistics network notified.");
    }, 500);
  };

  return (
    <div className="w-full h-full p-4 md:p-6 lg:p-8 bg-slate-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <BrainCircuit className="w-6 h-6 text-indigo-600" />
              Route Management AI
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Mathematical route optimization. Evaluates global transport methods across land, sea, and air based on cost, speed, cargo type, and live disruption telemetry.
            </p>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex -space-x-2">
               {['bg-blue-100 text-blue-600', 'bg-indigo-100 text-indigo-600', 'bg-emerald-100 text-emerald-600'].map((color, i) => (
                 <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold ${color} shadow-sm z-${30-i*10}`}>
                   API
                 </div>
               ))}
             </div>
             <div className="text-xs font-bold text-slate-600">32+ Carrier APIs Active</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Input Form */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Step 1: Parameters */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm border border-indigo-100">1</div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Shipment Parameters</h2>
              </div>

              <form onSubmit={handleEvaluate} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider flex items-center gap-2">
                    <Package className="w-4 h-4 text-indigo-400" /> Cargo Weight (kg)
                  </label>
                  <input 
                    type="text" 
                    value={cargoWeight}
                    onChange={(e) => setCargoWeight(e.target.value)}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Cargo Classification
                  </label>
                  <select 
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-inner appearance-none cursor-pointer"
                  >
                    <option value="non-perishable machinery">Non-perishable machinery</option>
                    <option value="cold-chain medical">Cold-chain Medical Supplies</option>
                    <option value="perishable food">Perishable Food</option>
                    <option value="hazardous materials">Hazardous Materials (HAZMAT)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-sky-400" /> Target Destination
                  </label>
                  <input 
                    type="text" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-inner"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isEvaluating || bookingConfirmed}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-4 rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_4px_25px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 active:scale-95 group relative overflow-hidden"
                  >
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    
                    {isEvaluating ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Running Quantum Evaluation...
                      </>
                    ) : (
                      <>
                        <Calculator className="w-5 h-5" /> Run Deep AI Evaluation
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
          </div>

          {/* Right Column: AI Output & Recommendation */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Loading State */}
            {isEvaluating && (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 mb-8 relative">
                    <div className="absolute inset-0 border-4 border-indigo-100 rounded-full animate-[spin_3s_linear_infinite]" />
                    <div className="absolute inset-2 border-4 border-emerald-100 rounded-full animate-[spin_2s_linear_infinite_reverse]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BrainCircuit className="w-10 h-10 text-indigo-600 animate-pulse" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">AI is evaluating millions of data points...</h3>
                  
                  <div className="w-full max-w-sm bg-slate-50 rounded-xl p-4 border border-slate-100 font-mono text-xs text-slate-500 space-y-3">
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping shrink-0" /> 
                      Querying global shipping lines (Maersk, MSC, CMA CGM)...
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping shrink-0" /> 
                      Analyzing live road freight APIs & border delays...
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-sky-500 rounded-full animate-ping shrink-0" /> 
                      Calculating optimal carbon footprint & risk metrics...
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!isEvaluating && !showResults && (
              <div className="h-full min-h-[500px] bg-white border border-slate-200 rounded-2xl shadow-sm p-6 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-col items-center text-center max-w-md mx-auto">
                  <div className="w-20 h-20 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
                    <Network className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Awaiting Parameters</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    Input your shipment details on the left to initiate the AI Route Consultant. The system will evaluate all multi-modal transport options across air, sea, and land networks.
                  </p>
                  
                  {/* Dummy "PowerBI style" grid showing carrier status */}
                  <div className="w-full">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-left mb-3">Live Carrier API Status</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'Maersk Ocean API', status: 'Online', ping: '12ms' },
                        { name: 'DHL Air Freight', status: 'Online', ping: '18ms' },
                        { name: 'Global Port Analytics', status: 'Online', ping: '45ms' },
                        { name: 'FedEx Cross-Border', status: 'Online', ping: '22ms' }
                      ].map(api => (
                        <div key={api.name} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl text-left">
                          <div>
                            <p className="text-xs font-bold text-slate-700">{api.name}</p>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">{api.ping}</p>
                          </div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Results State */}
            <AnimatePresence>
              {showResults && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 flex-1 flex flex-col"
                >
                  {/* Step 2: Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Option A */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer opacity-70 hover:opacity-100 group">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-100 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                            <Plane className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900">Option A: Air Freight</h3>
                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Fastest / Premium Route</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-4">
                          <div>
                            <p className="text-xs text-slate-500 font-medium mb-1">Transit Time</p>
                            <p className="font-bold text-slate-900 text-lg flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400"/> 2 Days</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-medium mb-1">Total Cost</p>
                            <p className="font-bold text-slate-900 text-lg flex items-center gap-2"><Banknote className="w-4 h-4 text-slate-400"/> $15,000</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-slate-500 font-medium mb-1">Carbon Footprint</p>
                            <p className="font-bold text-rose-600 text-sm flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5"/> High (3.2t)</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-medium mb-1">Reliability Index</p>
                            <p className="font-bold text-emerald-600 text-sm flex items-center gap-1.5"><Activity className="w-3.5 h-3.5"/> 99.8%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Option B (Recommended) */}
                    <div className="bg-white p-6 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.1)] border-2 border-emerald-500 relative overflow-hidden cursor-pointer hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all">
                      <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                        <CheckCircle className="w-3 h-3" /> AI Recommended
                      </div>
                      
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm">
                            <Ship className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 mt-1">Option B: Sea Freight</h3>
                            <p className="text-[10px] text-emerald-600 uppercase font-bold tracking-wider">Most Cost-Efficient</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 border-b border-slate-100 pb-4">
                          <div>
                            <p className="text-xs text-slate-500 font-medium mb-1">Transit Time</p>
                            <p className="font-bold text-slate-900 text-lg flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-500"/> 30 Days</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-medium mb-1">Total Cost</p>
                            <p className="font-bold text-emerald-600 text-lg flex items-center gap-2"><Banknote className="w-4 h-4 text-emerald-500"/> $1,500</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-slate-500 font-medium mb-1">Carbon Footprint</p>
                            <p className="font-bold text-emerald-600 text-sm flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5"/> Low (0.4t)</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-medium mb-1">Reliability Index</p>
                            <p className="font-bold text-slate-700 text-sm flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-slate-400"/> 94.2%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Recommendation Box & Action */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl shadow-sm relative overflow-hidden border border-slate-200 flex-1 flex flex-col"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 blur-[80px] pointer-events-none" />
                    
                    <div className="p-6 md:p-8 flex-1 relative z-10 flex flex-col md:flex-row gap-8">
                      {/* Left: AI Reasoning */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                            <BrainCircuit className="w-4 h-4" />
                          </div>
                          <div>
                            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">AI Reasoning Protocol</h2>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          System evaluates cargo profile: <strong>{cargoType}</strong>. Because this cargo lacks cold-chain requirements or urgent shelf-life decay, speed holds a significantly lower weight parameter than transport cost.
                        </p>
                        
                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 border-l-4 border-l-emerald-500 mb-6">
                          <p className="text-sm text-slate-700 font-medium mb-2">
                            The AI explicitly recommends <strong className="text-emerald-700">Sea Freight via Western Indian Port</strong>.
                          </p>
                          <p className="text-slate-500 text-xs italic">
                            "Selecting Option B results in a 90% cost reduction ($13,500 saved) with an acceptable 28-day transit extension for non-perishable goods."
                          </p>
                        </div>
                      </div>
                      
                      {/* Right: Data Visualization & Booking */}
                      <div className="w-full md:w-72 shrink-0 flex flex-col justify-between">
                        
                        {/* Mini PowerBI style widget */}
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Cost Efficiency Matrix</p>
                           <div className="flex items-end gap-3 mb-2">
                             <div className="w-full bg-slate-200 rounded-t-sm h-24 relative group">
                               <div className="absolute inset-x-0 bottom-0 bg-slate-400 rounded-t-sm h-full group-hover:opacity-80 transition-opacity" />
                               <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-600">$15k</span>
                             </div>
                             <div className="w-full bg-slate-200 rounded-t-sm h-4 relative group">
                               <div className="absolute inset-x-0 bottom-0 bg-emerald-500 rounded-t-sm h-full group-hover:opacity-80 transition-opacity" />
                               <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-emerald-600">$1.5k</span>
                             </div>
                           </div>
                           <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase mt-2">
                             <span>Option A (Air)</span>
                             <span>Option B (Sea)</span>
                           </div>
                        </div>

                        {/* Booking Button */}
                        <button 
                          onClick={handleBook}
                          disabled={bookingConfirmed}
                          className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                            bookingConfirmed 
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
                            : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.4)] active:scale-95'
                          }`}
                        >
                          {bookingConfirmed ? (
                            <>
                              <CheckCircle className="w-5 h-5" /> Approved & Booked
                            </>
                          ) : (
                            <>
                              Approve Option B <ArrowUpRight className="w-5 h-5" />
                            </>
                          )}
                        </button>

                      </div>
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
