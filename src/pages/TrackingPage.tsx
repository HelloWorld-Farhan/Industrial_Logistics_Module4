import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Plus, MapPin, CheckCircle, Clock, Search, X, Activity, UserPlus, FileSpreadsheet } from 'lucide-react';

// Mock Data
const MOCK_DRIVERS = [
  { id: 'DRV-001', name: 'Marcus Vance', phone: '+1 555-0199', trips: 142, rating: 4.9, status: 'Active' },
  { id: 'DRV-002', name: 'Sarah Lindqvist', phone: '+1 555-0244', trips: 89, rating: 4.7, status: 'Active' },
  { id: 'DRV-003', name: 'James Dubois', phone: '+1 555-0811', trips: 215, rating: 4.8, status: 'Available' },
  { id: 'DRV-004', name: 'Elena Rostova', phone: '+1 555-0993', trips: 56, rating: 4.9, status: 'Off-Duty' },
];

const MOCK_ACTIVE_TRIPS = [
  { id: 'TRK-9928', driver: 'Marcus Vance', origin: 'Paris Depot', dest: 'Rotterdam Port', progress: 28, status: 'In-Transit', speed: '74 km/h' },
  { id: 'TRK-4402', driver: 'Sarah Lindqvist', origin: 'Berlin Hub', dest: 'Hamburg Dock', progress: 65, status: 'Delayed', speed: '0 km/h' },
];

export default function TrackingPage() {
  const [activeTab, setActiveTab] = useState<'roster' | 'history'>('roster');
  const [isAddDriverModalOpen, setIsAddDriverModalOpen] = useState(false);
  const [isAddTripModalOpen, setIsAddTripModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 p-6 lg:p-8 max-w-7xl mx-auto w-full flex flex-col gap-8">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <Truck className="w-7 h-7 text-indigo-600" />
          Real-Time Shipment & Truck Tracking Agent
        </h1>
        <p className="text-sm text-slate-500 mt-1">Manage driver rosters, assign trip tokens, and monitor live fleet telemetry across all active transits.</p>
      </div>

      {/* TOP SECTION: Driver Management */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        {/* Section Header & Actions */}
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl w-fit">
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
          <div className="p-5 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Driver Name</th>
                  <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                  <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Total Trips</th>
                  <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_DRIVERS.map((driver) => (
                  <tr key={driver.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                          {driver.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{driver.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{driver.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-slate-600">{driver.phone}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-bold text-slate-700">{driver.trips}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        driver.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' :
                        driver.status === 'Available' ? 'bg-blue-50 text-blue-600 border border-blue-200' :
                        'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}>
                        {driver.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800">View Profile</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Trip History Placeholder */}
        {activeTab === 'history' && (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Historical Trip Data</h3>
            <p className="text-sm text-slate-500 max-w-sm mt-2">All completed and wiped trips are securely archived here for compliance and auditing purposes.</p>
          </div>
        )}
      </section>

      {/* BOTTOM SECTION: Live Active Tracking */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-500" />
            Live Active Fleet (Working Only)
          </h2>
          <div className="relative w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Filter active trucks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 text-xs rounded-xl pl-9 pr-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {MOCK_ACTIVE_TRIPS.filter(t => t.driver.toLowerCase().includes(searchQuery.toLowerCase()) || t.id.toLowerCase().includes(searchQuery.toLowerCase())).map(trip => (
            <motion.div 
              key={trip.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Progress Bar Background hint */}
              <div className="absolute top-0 left-0 h-1 bg-slate-100 w-full">
                <div className={`h-full ${trip.status === 'Delayed' ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${trip.progress}%` }}></div>
              </div>

              <div className="flex justify-between items-start mt-1">
                <div>
                  <h3 className="font-mono font-bold text-slate-900 text-lg">{trip.id}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <div className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[8px]">
                      {trip.driver.charAt(0)}
                    </div>
                    {trip.driver}
                  </p>
                </div>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                  trip.status === 'Delayed' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                }`}>
                  {trip.status === 'Delayed' ? <Clock className="w-3 h-3" /> : <Activity className="w-3 h-3" />}
                  {trip.status}
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Origin</p>
                  <p className="font-semibold text-slate-700 flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {trip.origin}</p>
                </div>
                <div className="w-8 border-t-2 border-dashed border-slate-200"></div>
                <div className="flex-1 text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Destination</p>
                  <p className="font-semibold text-slate-700 flex items-center justify-end gap-1"><MapPin className="w-3.5 h-3.5 text-indigo-500" /> {trip.dest}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="font-mono text-slate-500">SPD: <strong className="text-slate-800">{trip.speed}</strong></span>
                <span className="font-mono text-slate-500">PRG: <strong className="text-slate-800">{trip.progress}%</strong></span>
                <button className="text-indigo-600 font-bold hover:text-indigo-800">Track Live &rarr;</button>
              </div>
            </motion.div>
          ))}
          {MOCK_ACTIVE_TRIPS.length === 0 && (
            <div className="col-span-full py-8 text-center text-slate-500 text-sm">
              No active trips found.
            </div>
          )}
        </div>
      </section>

      {/* MODALS */}
      <AnimatePresence>
        {isAddDriverModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsAddDriverModalOpen(false)} />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white rounded-[24px] p-6 w-full max-w-md shadow-2xl relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Add New Driver</h3>
                <button onClick={() => setIsAddDriverModalOpen(false)} className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-xl transition-colors"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Driver Full Name</label>
                  <input type="text" placeholder="e.g. John Doe" className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Phone Number (For SMS Link)</label>
                  <input type="text" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <button onClick={() => setIsAddDriverModalOpen(false)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 mt-2">Save Driver</button>
              </div>
            </motion.div>
          </div>
        )}

        {isAddTripModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsAddTripModalOpen(false)} />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white rounded-[24px] p-6 w-full max-w-md shadow-2xl relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Create New Tracking Trip</h3>
                <button onClick={() => setIsAddTripModalOpen(false)} className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-xl transition-colors"><X className="w-4 h-4" /></button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Assign Driver</label>
                  <select className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Marcus Vance</option>
                    <option>Sarah Lindqvist</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Origin</label>
                    <input type="text" placeholder="Start Point" className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Destination</label>
                    <input type="text" placeholder="End Point" className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mt-2 text-sm text-indigo-800">
                  <p className="font-bold flex items-center gap-2"><Truck className="w-4 h-4" /> Zero-Trust Sync</p>
                  <p className="mt-1 text-xs opacity-80">Creating this trip will generate a secure QR code for the driver to scan, requiring no permanent login.</p>
                </div>
                <button onClick={() => setIsAddTripModalOpen(false)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 mt-2">Generate Trip Token & QR</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
