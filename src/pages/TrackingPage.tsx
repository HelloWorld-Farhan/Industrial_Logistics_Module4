import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Plus, MapPin, CheckCircle, Clock, Search, X, Activity, UserPlus, FileSpreadsheet, BarChart3, TrendingUp, ShieldCheck, Radio, AlertTriangle, QrCode, Map, ChevronLeft, ChevronRight } from 'lucide-react';

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
  { id: 'TRK-8819', driver: 'James Dubois', origin: 'Lyon Depot', dest: 'Geneva Base', progress: 89, status: 'In-Transit', speed: '82 km/h', eta: '14:15 CET' },
  { id: 'TRK-2201', driver: 'Elena Rostova', origin: 'Vienna Base', dest: 'Munich Port', progress: 12, status: 'In-Transit', speed: '65 km/h', eta: 'Tomorrow 08:00 CET' },
];

const MOCK_HISTORY_TRIPS = [
  { id: 'TRK-092', driver: 'Marcus Vance', origin: 'Lyon Depot', dest: 'Paris Hub', date: 'Oct 07, 2026', distance: '460 km', duration: '5h 12m', rating: 'Perfect', status: 'Completed', incidents: 0, compliance: '100%', fuelEfficiency: '8.2 L/100km', avgSpeed: '88 km/h' },
  { id: 'TRK-091', driver: 'James Dubois', origin: 'Munich Port', dest: 'Berlin Hub', date: 'Oct 05, 2026', distance: '580 km', duration: '6h 45m', rating: 'Good', status: 'Completed', incidents: 1, compliance: '94%', fuelEfficiency: '8.8 L/100km', avgSpeed: '85 km/h' },
  { id: 'TRK-088', driver: 'Sarah Lindqvist', origin: 'Vienna Base', dest: 'Munich Port', date: 'Oct 02, 2026', distance: '430 km', duration: '4h 50m', rating: 'Perfect', status: 'Completed', incidents: 0, compliance: '100%', fuelEfficiency: '7.9 L/100km', avgSpeed: '91 km/h' },
  { id: 'TRK-075', driver: 'Elena Rostova', origin: 'Hamburg Dock', dest: 'Berlin Hub', date: 'Sep 28, 2026', distance: '290 km', duration: 'N/A', rating: 'N/A', status: 'Canceled', incidents: 0, compliance: 'N/A', fuelEfficiency: 'N/A', avgSpeed: 'N/A' },
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
  const [selectedHistoryTrip, setSelectedHistoryTrip] = useState<typeof MOCK_HISTORY_TRIPS[0] | null>(null);
  
  // Filtering and Pagination State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'In-Transit' | 'Delayed'>('All');
  const [driverFilter, setDriverFilter] = useState<'All' | 'Active' | 'Available' | 'Off-Duty'>('All');
  const [historyFilter, setHistoryFilter] = useState<'All' | 'Completed' | 'Canceled'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
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
            
            {/* Filter Toggle */}
            {activeTab === 'roster' && (
              <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button onClick={() => setDriverFilter('All')} className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${driverFilter === 'All' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>All</button>
                <button onClick={() => setDriverFilter('Active')} className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${driverFilter === 'Active' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Active</button>
                <button onClick={() => setDriverFilter('Available')} className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${driverFilter === 'Available' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Available</button>
                <button onClick={() => setDriverFilter('Off-Duty')} className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${driverFilter === 'Off-Duty' ? 'bg-white text-slate-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Off-Duty</button>
              </div>
            )}
            
            {activeTab === 'history' && (
              <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button onClick={() => setHistoryFilter('All')} className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${historyFilter === 'All' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>All</button>
                <button onClick={() => setHistoryFilter('Completed')} className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${historyFilter === 'Completed' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Completed</button>
                <button onClick={() => setHistoryFilter('Canceled')} className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${historyFilter === 'Canceled' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Canceled</button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsAddDriverModalOpen(true)}
              className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-sm shrink-0"
            >
              <UserPlus className="w-4 h-4 text-indigo-500" /> <span className="hidden sm:inline">Add Driver</span>
            </button>
            <button 
              onClick={() => setIsAddTripModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-200 shrink-0"
            >
              <Plus className="w-4 h-4" /> <span className="hidden sm:inline">New Tracking Trip</span>
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
                {MOCK_DRIVERS.filter(d => driverFilter === 'All' || d.status === driverFilter).map((driver) => (
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
                {MOCK_DRIVERS.filter(d => driverFilter === 'All' || d.status === driverFilter).length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-500 text-sm">
                      No drivers match this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Trip History View */}
        {activeTab === 'history' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Trip ID / Date</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Route & Mini-Map</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Driver</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider">Metrics</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_HISTORY_TRIPS.filter(t => historyFilter === 'All' || t.status === historyFilter).map((trip) => (
                  <tr key={trip.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                    <td className="py-4 px-6">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{trip.id}</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">{trip.date}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        {/* Static Mini Map Concept */}
                        <div className="w-16 h-10 bg-indigo-50/50 rounded-lg border border-indigo-100 overflow-hidden relative flex items-center justify-center shrink-0">
                          {trip.status === 'Completed' ? (
                            <>
                              <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                                <path d="M -10 20 Q 20 40, 40 10 T 80 20" fill="none" stroke="#4F46E5" strokeWidth="2" />
                              </svg>
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 absolute left-2"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute right-2"></div>
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-rose-50/50">
                              <X className="w-4 h-4 text-rose-300" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                            <MapPin className="w-3 h-3 text-slate-400" /> {trip.origin}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 mt-1">
                            <MapPin className={`w-3 h-3 ${trip.status === 'Completed' ? 'text-emerald-500' : 'text-slate-400'}`} /> {trip.dest}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[9px] uppercase">
                          {trip.driver.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{trip.driver}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-3">
                        <span className={`border px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                          trip.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-rose-50 text-rose-600 border-rose-200'
                        }`}>
                          {trip.status === 'Completed' ? <CheckCircle className="w-3 h-3" /> : <X className="w-3 h-3" />} {trip.status}
                        </span>
                        {trip.status === 'Completed' && (
                          <span className={`border px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                            trip.rating === 'Perfect' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'
                          }`}>
                            <ShieldCheck className="w-3 h-3" /> {trip.rating}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button 
                        onClick={() => setSelectedHistoryTrip(trip)}
                        className="text-xs font-bold text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 hover:border-indigo-200 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                      >
                        View Info
                      </button>
                    </td>
                  </tr>
                ))}
                {MOCK_HISTORY_TRIPS.filter(t => historyFilter === 'All' || t.status === historyFilter).length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-500 text-sm">
                      No history trips match this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Filter Buttons */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button 
                onClick={() => { setActiveFilter('All'); setCurrentPage(1); }}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${activeFilter === 'All' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                All
              </button>
              <button 
                onClick={() => { setActiveFilter('In-Transit'); setCurrentPage(1); }}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${activeFilter === 'In-Transit' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                In-Transit
              </button>
              <button 
                onClick={() => { setActiveFilter('Delayed'); setCurrentPage(1); }}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${activeFilter === 'Delayed' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Delayed
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search Driver or ID..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full bg-white border border-slate-200 text-sm rounded-xl pl-9 pr-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(() => {
            // Apply filtering logic
            const filteredTrips = MOCK_ACTIVE_TRIPS.filter(trip => {
              const matchesSearch = trip.driver.toLowerCase().includes(searchQuery.toLowerCase()) || trip.id.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesFilter = activeFilter === 'All' || trip.status === activeFilter;
              return matchesSearch && matchesFilter;
            });

            // Apply pagination logic
            const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);
            const paginatedTrips = filteredTrips.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

            return (
              <>
                {paginatedTrips.map(trip => (
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
              
              {filteredTrips.length === 0 && (
                <div className="col-span-full py-12 text-center text-slate-500 text-sm bg-white rounded-2xl border border-slate-200 border-dashed">
                  No active trips match your search or filter.
                </div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="col-span-full flex items-center justify-between bg-white border border-slate-200 p-4 rounded-2xl mt-2 shadow-sm">
                  <span className="text-xs font-bold text-slate-500">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredTrips.length)} of {filteredTrips.length} Trips
                  </span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-slate-900 min-w-[3rem] text-center bg-slate-50 py-1 rounded-md border border-slate-100">
                      {currentPage} / {totalPages}
                    </span>
                    <button 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
            );
          })()}
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
              className="bg-slate-100 rounded-[20px] w-full max-w-6xl h-[85vh] shadow-2xl relative z-10 flex flex-col border border-slate-300 overflow-hidden"
            >
              {/* Power BI Header */}
              <div className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-20 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {selectedDriver.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 leading-tight flex items-center gap-2">
                      {selectedDriver.name} Dashboard
                      <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded border border-slate-200 uppercase">PowerBI View</span>
                    </h2>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">ID: {selectedDriver.id} | Contact: {selectedDriver.phone} | Last Sync: Just Now</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <button className="flex-1 md:flex-none justify-center items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm">
                    <FileSpreadsheet className="w-3.5 h-3.5" /> Export Data
                  </button>
                  <button onClick={() => setSelectedDriver(null)} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-lg transition-colors"><X className="w-5 h-5" /></button>
                </div>
              </div>

              {/* Dashboard Content - Fixed Height Grid */}
              <div className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 overflow-y-auto bg-slate-100/50">
                
                {/* LEFT COLUMN (KPIs & Charts) - 8 Cols */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  
                  {/* Top KPIs */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Total Volume</span>
                        <Truck className="w-4 h-4 text-indigo-500" />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900">{selectedDriver.trips}</span>
                        <span className="text-xs text-emerald-500 font-bold">+12%</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider">SLA Score</span>
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900">{selectedDriver.onTimeScore}</span>
                        <span className="text-xs text-emerald-500 font-bold">+1.2%</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Driver Rating</span>
                        <BarChart3 className="w-4 h-4 text-amber-500" />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-slate-900">{selectedDriver.rating}</span>
                        <span className="text-sm font-bold text-slate-400">/5.0</span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between text-slate-500 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Risk / Incidents</span>
                        <AlertTriangle className="w-4 h-4 text-rose-500" />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-slate-900">{selectedDriver.incidents}</span>
                        <span className="text-xs text-slate-400 font-bold">Stable</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Charts Area */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[300px] md:min-h-0">
                    
                    {/* Bar Chart: 6 Month Volume */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">6-Month Dispatch Volume</h3>
                        <TrendingUp className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="flex-1 relative">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between border-l border-b border-slate-200 pb-6 pl-2">
                          {[100, 75, 50, 25, 0].map(val => (
                            <div key={val} className="w-full border-t border-slate-100 flex items-center relative">
                              <span className="absolute -left-6 text-[9px] text-slate-400 font-mono">{val}</span>
                            </div>
                          ))}
                        </div>
                        {/* Bars */}
                        <div className="absolute inset-0 ml-4 mb-6 flex items-end justify-around pt-2">
                          {[40, 70, 65, 90, 85, 100].map((h, i) => (
                            <div key={i} className="relative flex flex-col items-center group w-8">
                              <motion.div 
                                initial={{ height: 0 }} 
                                animate={{ height: `${h}%` }} 
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="w-full bg-indigo-500 rounded-t-sm hover:bg-indigo-400 transition-colors shadow-sm relative"
                              >
                                {/* Tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                                  {h} Trips
                                </div>
                              </motion.div>
                              <span className="absolute -bottom-6 text-[10px] font-bold text-slate-500">{['Sep','Oct','Nov','Dec','Jan','Feb'][i]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Donut Chart: SLA Compliance */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col items-center justify-center relative">
                      <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
                        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">SLA Compliance Breakdown</h3>
                        <Activity className="w-4 h-4 text-emerald-400" />
                      </div>
                      
                      {/* SVG Donut */}
                      <div className="relative w-40 h-40 mt-6">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="80" cy="80" r="70" fill="transparent" stroke="#F1F5F9" strokeWidth="20" />
                          <motion.circle 
                            cx="80" cy="80" r="70" 
                            fill="transparent" 
                            stroke="#10B981" 
                            strokeWidth="20" 
                            strokeDasharray="439.8" 
                            initial={{ strokeDashoffset: 439.8 }}
                            animate={{ strokeDashoffset: 439.8 - (439.8 * 0.96) }} // 96%
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="drop-shadow-sm"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-bold text-slate-900">96%</span>
                          <span className="text-[9px] font-bold text-slate-400 uppercase">On-Time</span>
                        </div>
                      </div>
                      
                      <div className="w-full mt-6 grid grid-cols-2 gap-2 text-center">
                        <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-100">
                          <p className="text-[10px] font-bold text-emerald-600 uppercase">On-Time</p>
                          <p className="font-mono font-bold text-emerald-700">{selectedDriver.trips}</p>
                        </div>
                        <div className="bg-rose-50 rounded-lg p-2 border border-rose-100">
                          <p className="text-[10px] font-bold text-rose-600 uppercase">Delayed</p>
                          <p className="font-mono font-bold text-rose-700">{selectedDriver.incidents}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* RIGHT COLUMN - 4 Cols */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  
                  {/* Status Card */}
                  <div className="bg-slate-900 rounded-xl p-5 text-white shadow-md relative overflow-hidden shrink-0">
                    <div className="absolute -right-4 -bottom-4 opacity-10"><Map className="w-32 h-32" /></div>
                    <h3 className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider mb-2">Live Fleet Status</h3>
                    <div className="text-2xl font-bold mb-5 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {selectedDriver.status}
                    </div>
                    <div className="space-y-3 pt-4 border-t border-slate-700/50">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400 text-xs">Hours Driven (YTD)</span>
                        <span className="font-mono font-bold">{selectedDriver.hoursDriven}h</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400 text-xs">Compliance Rate</span>
                        <span className="font-mono font-bold text-emerald-400">100%</span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity Log (Scrollable, hidden scrollbar) */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-0 flex flex-col flex-1 min-h-0">
                    <div className="p-4 border-b border-slate-100 bg-slate-50/50 shrink-0">
                      <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Detailed Activity Log</h3>
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                      <div className="space-y-4">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="flex gap-3 items-start group">
                            <div className="flex flex-col items-center">
                              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 ring-4 ring-indigo-50 group-hover:bg-indigo-600 transition-colors"></div>
                              {i !== 9 && <div className="w-px h-10 bg-slate-100 mt-1"></div>}
                            </div>
                            <div className="pb-2">
                              <p className="text-xs font-bold text-slate-800">Completed Trip TRK-09{i}</p>
                              <p className="text-[10px] text-slate-500 mt-0.5">{i === 0 ? 'Today' : `${i} days ago`} • Perfect Rating</p>
                            </div>
                          </div>
                        ))}
                      </div>
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
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 md:p-6 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{selectedTrip.id} // LIVE TELEMETRY</h2>
                    <p className="text-xs font-mono text-slate-500 uppercase mt-1">Driver: {selectedTrip.driver} • Link Encrypted</p>
                  </div>
                </div>
                <button onClick={() => setSelectedTrip(null)} className="absolute top-4 right-4 md:relative md:top-auto md:right-auto p-2 bg-white hover:bg-slate-100 text-slate-500 rounded-xl transition-colors border border-slate-200 shadow-sm"><X className="w-5 h-5" /></button>
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
                <div className="hidden md:block absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg p-5 rounded-2xl w-72">
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

                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg p-4 md:p-5 rounded-2xl md:w-80">
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

        {/* POWER BI STYLE HISTORICAL TRIP MODAL */}
        {selectedHistoryTrip && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedHistoryTrip(null)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 20 }} 
              className="bg-slate-100 rounded-[20px] w-full max-w-5xl h-[80vh] shadow-2xl relative z-10 flex flex-col border border-slate-300 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-white border-b border-slate-200 px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-20 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg shadow-sm">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 leading-tight flex items-center gap-2">
                      Trip Report: {selectedHistoryTrip.id}
                      <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded border border-slate-200 uppercase">Historical View</span>
                    </h2>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">Completed: {selectedHistoryTrip.date} | Driver: {selectedHistoryTrip.driver}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm">
                    <TrendingUp className="w-3.5 h-3.5" /> Export PDF
                  </button>
                  <button onClick={() => setSelectedHistoryTrip(null)} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-lg transition-colors"><X className="w-5 h-5" /></button>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-y-auto bg-slate-100/50">
                
                {/* Left Col - Map & Route */}
                <div className="lg:col-span-1 flex flex-col gap-6 min-h-[300px]">
                  {/* Map Concept */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-2 flex-1 relative overflow-hidden flex flex-col">
                    <div className="p-3 border-b border-slate-100 flex items-center gap-2">
                      <Map className="w-4 h-4 text-indigo-500" />
                      <span className="text-xs font-bold text-slate-700 uppercase">Archived Route Map</span>
                    </div>
                    <div className="flex-1 bg-slate-50 m-2 rounded-lg border border-slate-200 relative overflow-hidden flex items-center justify-center">
                      {/* Stylized Topographic Map Background */}
                      <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
                        <pattern id="topo" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 0 20 Q 10 10, 20 20 T 40 20" fill="none" stroke="#000" strokeWidth="0.5" />
                          <path d="M 0 40 Q 20 20, 40 40" fill="none" stroke="#000" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#topo)" />
                      </svg>
                      {/* Route Line */}
                      <svg className="absolute inset-0 w-full h-full p-4" preserveAspectRatio="xMidYMid meet">
                        <path d="M 20 80 Q 80 20, 180 50 T 280 80" fill="none" stroke="#4F46E5" strokeWidth="3" strokeDasharray="6 4" />
                        <circle cx="20" cy="80" r="6" fill="#4F46E5" />
                        <circle cx="280" cy="80" r="6" fill="#10B981" />
                      </svg>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[9px] font-bold px-2 py-1 rounded shadow-sm border border-slate-100 text-slate-600">Origin: {selectedHistoryTrip.origin}</div>
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-[9px] font-bold px-2 py-1 rounded shadow-sm border border-slate-100 text-emerald-600">Dest: {selectedHistoryTrip.dest}</div>
                    </div>
                  </div>
                </div>

                {/* Right Col - Metrics */}
                <div className="lg:col-span-2 flex flex-col gap-6 overflow-hidden">
                  
                  {/* Top Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Total Distance</span>
                      <span className="text-2xl font-bold text-slate-900">{selectedHistoryTrip.distance}</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Transit Duration</span>
                      <span className="text-2xl font-bold text-slate-900">{selectedHistoryTrip.duration}</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">Avg Speed</span>
                      <span className="text-2xl font-bold text-indigo-600 font-mono">{selectedHistoryTrip.avgSpeed}</span>
                    </div>
                  </div>

                  {/* Telemetry Charts */}
                  <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col min-h-0 relative">
                    <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-slate-100 pb-2">
                      <Activity className="w-4 h-4 text-emerald-500" /> Post-Trip Telemetry Analysis
                    </h3>
                    
                    <div className="flex-1 grid grid-cols-2 gap-8">
                      {/* Left: Speed Consistency Line Chart Concept */}
                      <div className="flex flex-col relative">
                        <span className="text-[10px] font-bold text-slate-400 mb-4">Velocity Profile (km/h)</span>
                        <div className="flex-1 relative border-l border-b border-slate-100">
                          <svg className="absolute inset-0 w-full h-full p-2" preserveAspectRatio="none">
                            <path d="M 0 80 Q 20 60, 40 70 T 80 40 T 120 50 T 160 20 T 200 40" fill="none" stroke="#10B981" strokeWidth="2" />
                            <path d="M 0 80 Q 20 60, 40 70 T 80 40 T 120 50 T 160 20 T 200 40 L 200 100 L 0 100 Z" fill="url(#grad)" opacity="0.1" />
                            <defs>
                              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* Right: Metrics */}
                      <div className="flex flex-col justify-center space-y-6">
                        <div>
                          <div className="flex justify-between text-[11px] font-bold mb-1">
                            <span className="text-slate-500 uppercase">Route Compliance</span>
                            <span className="text-emerald-500">{selectedHistoryTrip.compliance}</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: selectedHistoryTrip.compliance }} className="h-full bg-emerald-500" />
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-[11px] font-bold mb-1">
                            <span className="text-slate-500 uppercase">Fuel Efficiency</span>
                            <span className="text-indigo-600 font-mono">{selectedHistoryTrip.fuelEfficiency}</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: '82%' }} className="h-full bg-indigo-500" />
                          </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className={`w-4 h-4 ${selectedHistoryTrip.incidents === 0 ? 'text-slate-300' : 'text-amber-500'}`} />
                            <span className="text-xs font-bold text-slate-600 uppercase">Logged Incidents</span>
                          </div>
                          <span className={`text-xl font-bold ${selectedHistoryTrip.incidents === 0 ? 'text-slate-900' : 'text-amber-600'}`}>
                            {selectedHistoryTrip.incidents}
                          </span>
                        </div>
                      </div>
                    </div>
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
