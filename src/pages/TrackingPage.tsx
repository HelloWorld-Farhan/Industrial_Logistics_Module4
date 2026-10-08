import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Plus, MapPin, CheckCircle, Clock, Search, X, Activity, UserPlus, FileSpreadsheet, BarChart3, TrendingUp, ShieldCheck, Radio, AlertTriangle, QrCode, Loader2 } from 'lucide-react';

// Mock Data
const MOCK_DRIVERS = [
  { id: 'DRV-001', name: 'Marcus Vance', phone: '+1 555-0199', trips: 142, rating: 4.9, status: 'Active', onTimeScore: '98%', incidents: 0, hoursDriven: 840 },
  { id: 'DRV-002', name: 'Sarah Lindqvist', phone: '+1 555-0244', trips: 89, rating: 4.7, status: 'Active', onTimeScore: '94%', incidents: 1, hoursDriven: 512 },
  { id: 'DRV-003', name: 'James Dubois', phone: '+1 555-0811', trips: 215, rating: 4.8, status: 'Available', onTimeScore: '96%', incidents: 0, hoursDriven: 1205 },
  { id: 'DRV-004', name: 'Elena Rostova', phone: '+1 555-0993', trips: 56, rating: 4.9, status: 'Off-Duty', onTimeScore: '99%', incidents: 0, hoursDriven: 310 },
];

const MOCK_ACTIVE_TRIPS = [
  { id: 'TRK-9928', driver: 'Marcus Vance', origin: 'Paris Depot', dest: 'Rotterdam Port', progress: 28, status: 'In-Transit', speed: '74 km/h', eta: '20:30 CET' },
  { id: 'TRK-4402', driver: 'Sarah Lindqvist', origin: 'Berlin Hub', dest: 'Hamburg Dock', progress: 65, status: 'Delayed', speed: '0 km/h', eta: 'Delay 45m' },
];

export default function TrackingPage() {
  const [activeTab, setActiveTab] = useState<'roster' | 'history'>('roster');
  const [isAddDriverModalOpen, setIsAddDriverModalOpen] = useState(false);
  const [isAddTripModalOpen, setIsAddTripModalOpen] = useState(false);
  const [tripGenerationState, setTripGenerationState] = useState<'idle' | 'generating' | 'success'>('idle');
  const [generatedToken, setGeneratedToken] = useState('');
  
  // New Modal States
  const [selectedDriver, setSelectedDriver] = useState<typeof MOCK_DRIVERS[0] | null>(null);
  const [selectedTrip, setSelectedTrip] = useState<typeof MOCK_ACTIVE_TRIPS[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleGenerateTrip = () => {
    setTripGenerationState('generating');
    
    // Simulate generation delay
    setTimeout(() => {
      setGeneratedToken(`TRK-${Math.floor(100000 + Math.random() * 900000)}`);
      setTripGenerationState('success');
    }, 2500);
  };

  const closeTripModal = () => {
    setIsAddTripModalOpen(false);
    setTimeout(() => {
      setTripGenerationState('idle');
      setGeneratedToken('');
    }, 300);
  };

  return (
    <div className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full flex flex-col gap-8">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
            <Truck className="w-5 h-5 text-indigo-600" />
          </div>
          Real-Time Shipment & Truck Tracking Agent
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-3xl leading-relaxed">Manage driver rosters, assign trip tokens, and monitor live fleet telemetry across all active transits. Zero-trust architecture ensures data is wiped upon arrival.</p>
      </div>

      {/* TOP SECTION: Driver Management */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        {/* Section Header & Actions */}
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="flex items-center gap-2 bg-slate-200/50 p-1 rounded-xl w-fit">
            <button 
              onClick={() => setActiveTab('roster')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'roster' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Driver Roster
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'history' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Trip History
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsAddDriverModalOpen(true)}
              className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
            >
              <UserPlus className="w-4 h-4 text-indigo-500" /> Add Driver
            </button>
            <button 
              onClick={() => setIsAddTripModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-200"
            >
              <Plus className="w-4 h-4" /> New Tracking Trip
            </button>
          </div>
        </div>

        {/* Driver Table (Roster) */}
        {activeTab === 'roster' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-white">
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Driver Name</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Total Trips</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_DRIVERS.map((driver) => (
                  <tr key={driver.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs ring-2 ring-indigo-50">
                          {driver.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{driver.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">{driver.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-slate-600">{driver.phone}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-bold text-slate-700">{driver.trips}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        driver.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' :
                        driver.status === 'Available' ? 'bg-sky-50 text-sky-600 border border-sky-200' :
                        'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}>
                        {driver.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button 
                        onClick={() => setSelectedDriver(driver)}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Trip History Placeholder */}
        {activeTab === 'history' && (
          <div className="p-16 flex flex-col items-center justify-center text-center bg-slate-50/50">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-slate-100">
              <FileSpreadsheet className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Historical Trip Data Archive</h3>
            <p className="text-sm text-slate-500 max-w-md mt-2">All completed and wiped trips are securely archived here for compliance and auditing purposes. No active location tracking is stored.</p>
          </div>
        )}
      </section>

      {/* BOTTOM SECTION: Live Active Tracking */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <div className="relative">
              <Activity className="w-6 h-6 text-emerald-500 relative z-10" />
              <div className="absolute inset-0 bg-emerald-500 blur-md opacity-40 animate-pulse"></div>
            </div>
            Live Active Fleet 
            <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md ml-2">Working Only</span>
          </h2>
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by Driver or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 text-sm rounded-xl pl-10 pr-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_ACTIVE_TRIPS.filter(t => t.driver.toLowerCase().includes(searchQuery.toLowerCase()) || t.id.toLowerCase().includes(searchQuery.toLowerCase())).map(trip => (
            <motion.div 
              key={trip.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-5 relative overflow-hidden group hover:shadow-md transition-all"
            >
              {/* Progress Bar Background hint */}
              <div className="absolute top-0 left-0 h-1.5 bg-slate-100 w-full">
                <div className={`h-full transition-all duration-1000 ${trip.status === 'Delayed' ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${trip.progress}%` }}></div>
              </div>

              <div className="flex justify-between items-start mt-1">
                <div>
                  <h3 className="font-mono font-bold text-slate-900 text-lg">{trip.id}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[9px]">
                      {trip.driver.charAt(0)}
                    </div>
                    <p className="text-sm font-medium text-slate-600">
                      {trip.driver}
                    </p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                  trip.status === 'Delayed' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                }`}>
                  {trip.status === 'Delayed' ? <Clock className="w-3 h-3" /> : <Activity className="w-3 h-3" />}
                  {trip.status}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Origin</p>
                  <p className="font-semibold text-slate-700 flex items-center gap-1.5 truncate"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {trip.origin}</p>
                </div>
                <div className="w-10 flex flex-col items-center justify-center">
                  <div className="h-[2px] w-full bg-slate-200 border-t border-dashed border-slate-300"></div>
                </div>
                <div className="flex-1 text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Destination</p>
                  <p className="font-semibold text-slate-700 flex items-center justify-end gap-1.5 truncate"><MapPin className="w-3.5 h-3.5 text-indigo-500" /> {trip.dest}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Speed</span>
                    <span className="font-mono font-bold text-slate-800">{trip.speed}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Progress</span>
                    <span className="font-mono font-bold text-slate-800 text-emerald-600">{trip.progress}%</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTrip(trip)}
                  className="text-white font-bold bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-xl transition-colors shadow-sm flex items-center gap-2"
                >
                  <Radio className="w-3.5 h-3.5" /> Track Live
                </button>
              </div>
            </motion.div>
          ))}
          {MOCK_ACTIVE_TRIPS.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500 text-sm bg-white rounded-2xl border border-slate-200 border-dashed">
              No active trips match your search.
            </div>
          )}
        </div>
      </section>

      {/* MODALS */}
      <AnimatePresence>
        
        {/* Basic Modals (Add Driver / Add Trip) */}
        {isAddDriverModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsAddDriverModalOpen(false)} />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white rounded-[24px] p-8 w-full max-w-md shadow-2xl relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center"><UserPlus className="w-4 h-4 text-indigo-600" /></div>
                  Add New Driver
                </h3>
                <button onClick={() => setIsAddDriverModalOpen(false)} className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-xl transition-colors"><X className="w-5 h-5" /></button>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Driver Full Name</label>
                  <input type="text" placeholder="e.g. John Doe" className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number (For SMS Link)</label>
                  <input type="text" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                </div>
                <button onClick={() => setIsAddDriverModalOpen(false)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200 mt-4 transition-transform active:scale-95">Save Driver</button>
              </div>
            </motion.div>
          </div>
        )}

        {isAddTripModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={closeTripModal} />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white rounded-[24px] p-8 w-full max-w-md shadow-2xl relative z-10 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center"><Plus className="w-4 h-4 text-indigo-600" /></div>
                  Create Tracking Trip
                </h3>
                <button onClick={closeTripModal} className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-xl transition-colors"><X className="w-5 h-5" /></button>
              </div>

              {tripGenerationState === 'idle' && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Assign Driver</label>
                    <select className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
                      <option>Marcus Vance</option>
                      <option>Sarah Lindqvist</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Origin</label>
                      <input type="text" placeholder="Start Point" className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Destination</label>
                      <input type="text" placeholder="End Point" className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-sm text-indigo-800">
                    <p className="font-bold flex items-center gap-2"><Truck className="w-4 h-4" /> Zero-Trust Sync</p>
                    <p className="mt-1 text-xs opacity-80 leading-relaxed">Creating this trip generates a secure QR code. The driver scans it, tracking begins, and wipes when finished.</p>
                  </div>
                  <button 
                    onClick={handleGenerateTrip} 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200 mt-2 transition-transform active:scale-95"
                  >
                    Generate Trip Token & QR
                  </button>
                </motion.div>
              )}

              {tripGenerationState === 'generating' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12">
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <QrCode className="w-8 h-8 text-indigo-500 animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Provisioning Secure Token</h3>
                  <p className="text-sm text-slate-500 mt-2 text-center max-w-xs">Generating end-to-end encrypted tracking keys and one-time QR code...</p>
                </motion.div>
              )}

              {tripGenerationState === 'success' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Trip Generated!</h3>
                  <p className="text-sm text-slate-500 mb-6">The driver can scan this QR code using the Driver App to instantly sync this trip. No login required.</p>
                  
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl w-full flex flex-col items-center gap-4 mb-6 relative overflow-hidden">
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-300 rounded-tl-xl m-2"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-300 rounded-tr-xl m-2"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-300 rounded-bl-xl m-2"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-300 rounded-br-xl m-2"></div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                      <QrCode className="w-32 h-32 text-slate-800" />
                    </div>
                    
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Trip Token ID</p>
                      <p className="font-mono text-2xl font-bold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-lg border border-indigo-100 tracking-widest">{generatedToken}</p>
                    </div>
                  </div>

                  <button 
                    onClick={closeTripModal} 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold shadow-lg transition-transform active:scale-95"
                  >
                    Done
                  </button>
                </motion.div>
              )}

            </motion.div>
          </div>
        )}

        {/* POWER BI STYLE DRIVER PROFILE MODAL */}
        {selectedDriver && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedDriver(null)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 20 }} 
              className="bg-slate-50 rounded-[28px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 flex flex-col border border-slate-200/50"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-200 p-6 sm:px-8 flex justify-between items-center z-20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-200">
                    {selectedDriver.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 leading-tight">{selectedDriver.name}</h2>
                    <p className="text-sm font-mono text-slate-500">{selectedDriver.id} • {selectedDriver.phone}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedDriver(null)} className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-xl transition-colors"><X className="w-6 h-6" /></button>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* KPI Cards */}
                <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-500"><Truck className="w-4 h-4" /> <span className="text-xs font-bold uppercase">Total Trips</span></div>
                    <span className="text-3xl font-bold text-slate-900">{selectedDriver.trips}</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-emerald-500"><ShieldCheck className="w-4 h-4" /> <span className="text-xs font-bold uppercase">On-Time Score</span></div>
                    <span className="text-3xl font-bold text-slate-900">{selectedDriver.onTimeScore}</span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-amber-500"><BarChart3 className="w-4 h-4" /> <span className="text-xs font-bold uppercase">Rating</span></div>
                    <span className="text-3xl font-bold text-slate-900">{selectedDriver.rating} <span className="text-lg text-slate-400">/ 5.0</span></span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-rose-500"><AlertTriangle className="w-4 h-4" /> <span className="text-xs font-bold uppercase">Incidents</span></div>
                    <span className="text-3xl font-bold text-slate-900">{selectedDriver.incidents}</span>
                  </div>
                </div>

                {/* Performance Chart Placeholder */}
                <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col min-h-[300px]">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-indigo-500" /> 6-Month Delivery Efficiency
                  </h3>
                  <div className="flex-1 flex items-end gap-2 justify-between pt-10">
                    {[40, 70, 65, 90, 85, 100].map((h, i) => (
                      <div key={i} className="w-full relative flex flex-col items-center group">
                        <motion.div 
                          initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }}
                          className="w-full bg-indigo-500 rounded-t-md hover:bg-indigo-400 transition-colors"
                        />
                        <span className="mt-3 text-xs font-bold text-slate-400">{['Sep','Oct','Nov','Dec','Jan','Feb'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Panel Stats */}
                <div className="md:col-span-1 flex flex-col gap-6">
                  <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Activity className="w-24 h-24" /></div>
                    <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">Current Status</h3>
                    <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                      {selectedDriver.status}
                    </div>
                    <div className="space-y-3 pt-4 border-t border-indigo-800/50">
                      <div className="flex justify-between text-sm">
                        <span className="text-indigo-200">Hours Driven (YTD)</span>
                        <span className="font-mono font-bold">{selectedDriver.hoursDriven}h</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-indigo-200">Compliance Rate</span>
                        <span className="font-mono font-bold text-emerald-400">100%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex-1">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="flex gap-3 items-start">
                          <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5"></div>
                          <div>
                            <p className="text-xs font-bold text-slate-700">Completed Trip TRK-09{i}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">{i} days ago • Perfect Rating</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* LIGHT MODE RADAR MAP - LIVE TRACKING MODAL */}
        {selectedTrip && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedTrip(null)} />
            <motion.div 
              initial={{ scale: 0.98, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.98, opacity: 0 }} 
              className="bg-white sm:rounded-[32px] w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-6xl shadow-2xl relative z-10 flex flex-col border border-slate-200 overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{selectedTrip.id} // LIVE TELEMETRY</h2>
                    <p className="text-xs font-mono text-slate-500 uppercase mt-1">Driver: {selectedTrip.driver} • Link Encrypted</p>
                  </div>
                </div>
                <button onClick={() => setSelectedTrip(null)} className="p-2 bg-white hover:bg-slate-100 text-slate-500 rounded-xl transition-colors border border-slate-200 shadow-sm"><X className="w-5 h-5" /></button>
              </div>

              {/* Radar Map Content - Light Mode */}
              <div className="flex-1 relative bg-slate-50 min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Simulated Radar Circles */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                  <div className="w-[800px] h-[800px] rounded-full border border-indigo-200 absolute"></div>
                  <div className="w-[600px] h-[600px] rounded-full border border-indigo-200 absolute"></div>
                  <div className="w-[400px] h-[400px] rounded-full border border-indigo-200 absolute"></div>
                  <div className="w-full h-[1px] bg-indigo-200 absolute"></div>
                  <div className="h-full w-[1px] bg-indigo-200 absolute"></div>
                </div>

                {/* Simulated Route Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path 
                    d="M 200 400 Q 400 200, 700 300 T 1000 200" 
                    fill="none" 
                    stroke="rgba(79, 70, 229, 0.4)" 
                    strokeWidth="3" 
                    strokeDasharray="10 5" 
                  />
                  {/* Current Position Marker */}
                  <motion.circle 
                    cx="550" cy="280" r="6" 
                    fill="#4F46E5" 
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <circle cx="550" cy="280" r="24" fill="rgba(79, 70, 229, 0.1)" />
                </svg>

                {/* Floating Widgets */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg p-5 rounded-2xl w-72">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Navigational Data</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-500">Velocity</span>
                      <span className="text-sm font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md border border-indigo-100">{selectedTrip.speed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-500">Heading</span>
                      <span className="text-sm font-mono font-bold text-slate-700">042° NE</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-500">GPS Precision</span>
                      <span className="text-sm font-mono font-bold text-slate-700">±1.2m</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg p-5 rounded-2xl w-80">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Transit Progress</h4>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold text-slate-700">{selectedTrip.origin}</span>
                    <span className="text-xs font-bold text-slate-700">{selectedTrip.dest}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${selectedTrip.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase">Updated ETA</span>
                    <span className={`text-sm font-mono font-bold ${selectedTrip.status === 'Delayed' ? 'text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200' : 'text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200'}`}>{selectedTrip.eta}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
