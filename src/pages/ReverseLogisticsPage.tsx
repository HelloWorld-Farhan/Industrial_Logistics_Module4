import { TopHeader } from "../components/TopHeader";
import { RefreshCw } from "lucide-react";

export default function ReverseLogisticsPage() {
  return (
    <div className="flex-1 flex flex-col bg-slate-50/50 h-full overflow-hidden">
      <TopHeader
        searchPlaceholder="Search manifests..."
        actionButton={
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all active:scale-95">
            <RefreshCw className="w-3.5 h-3.5 text-sky-400" />
            <span>Sync Manifest & WMS</span>
          </button>
        }
      />
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-7 space-y-6">
        <section className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-2">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-slate-900 text-sky-400 px-3 py-1 rounded-lg text-xs font-mono font-semibold shadow-sm mb-3">
                  <span className="material-symbols-outlined text-[14px]">
                    psychology
                  </span>
                  <span>AGENT 03 • Autonomous Predictive Engine</span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Reverse Logistics &amp; Return Probability Engine
                </h1>
                <p className="text-xs lg:text-sm text-slate-500 mt-1.5 leading-relaxed">
                  Autonomous 4-step ML pipeline continuously training on
                  multi-year claims, scoring live outbound consignments,
                  intercepting high-risk transit damage, and pre-allocating WMS
                  quarantine buffer.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between min-w-[170px]">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                    <span>High-Risk Outbound</span>
                    <span className="material-symbols-outlined text-rose-500 text-[18px]">
                      warning
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xl font-bold font-mono text-rose-600">
                      1 Consignment
                    </span>
                    <span className="block text-[11px] font-semibold text-rose-500 mt-0.5">
                      85% Probability of Return
                    </span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between min-w-[170px]">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                    <span>Buffer Pre-Reserved</span>
                    <span className="material-symbols-outlined text-sky-600 text-[18px]">
                      inventory_2
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xl font-bold font-mono text-slate-900">
                      Bay R-08
                    </span>
                    <span className="block text-[11px] text-slate-500 font-mono mt-0.5">
                      12.4 m³ Cold Quarantine
                    </span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between min-w-[170px]">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                    <span>Liability Prevented</span>
                    <span className="material-symbols-outlined text-emerald-500 text-[18px]">
                      savings
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xl font-bold font-mono text-emerald-600">
                      €42,800 EUR
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">
                      Avoided Claims &amp; Friction
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex items-center justify-between gap-2 bg-white px-4 py-3 rounded-2xl border border-slate-200/80 shadow-sm overflow-x-auto">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-sky-400 flex items-center justify-center font-mono font-bold text-xs">
                  1
                </span>
                <span className="text-xs font-bold text-slate-800 whitespace-nowrap">
                  Historical Data Processing
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-sm">
                arrow_forward
              </span>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-sky-400 flex items-center justify-center font-mono font-bold text-xs">
                  2
                </span>
                <span className="text-xs font-bold text-slate-800 whitespace-nowrap">
                  Live Shipment Scoring
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-sm">
                arrow_forward
              </span>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-xs animate-pulse">
                  3
                </span>
                <span className="text-xs font-bold text-rose-700 whitespace-nowrap">
                  Proactive QA Interception
                </span>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-sm">
                arrow_forward
              </span>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                  4
                </span>
                <span className="text-xs font-bold text-emerald-800 whitespace-nowrap">
                  Autonomous Buffer Allocation
                </span>
              </div>
            </div>
            <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      neurology
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 uppercase">
                        Step 1 Workflow
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        Model Training &amp; Neural Pattern Recognition
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-slate-900 mt-0.5">
                      Historical Data Processing &amp; Neural Pattern Engine
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200/70">
                  <span>
                    Trained on <strong>5+ Years</strong> Freight Records
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-emerald-600 font-semibold">
                    99.4% Inference Accuracy
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sky-600 text-[16px]">
                        pattern
                      </span>
                      Learned Neural Pattern Rule
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      142,800 Historical Consignments Analyzed
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Learned Rule:</strong>{" "}
                    Client{" "}
                    <span className="font-mono font-bold text-slate-900">
                      Apex Turbine / Client X
                    </span>{" "}
                    consistently registers transit failure on{" "}
                    <span className="font-semibold text-rose-700">
                      Fragile / Cryogenic assemblies
                    </span>{" "}
                    when transit corridor exceeds threshold or historical
                    handling records show repetitive unloading drops.
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>{" "}
                      52,140 Verified Claim Logs
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-sky-500"></span>{" "}
                      18 Maritime Weather Indices
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>{" "}
                      Loss Calibration &lt;0.008
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Feature Weight Distribution
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      v4.1 Weights
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-700 font-medium">
                        <span>Product Category (Fragility &amp; Specs)</span>
                        <span className="font-mono font-bold text-slate-900">
                          38%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-slate-900 h-full w-[38%]"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-700 font-medium">
                        <span>Client Recipient History &amp; Dock Drops</span>
                        <span className="font-mono font-bold text-slate-900">
                          34%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-sky-600 h-full w-[34%]"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-700 font-medium">
                        <span>Route &amp; Maritime Corridor Transit Time</span>
                        <span className="font-mono font-bold text-slate-900">
                          28%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full w-[28%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="bg-rose-50/90 border-2 border-rose-200 rounded-3xl p-6 shadow-md transition-all duration-300 relative overflow-hidden"
              id="qa-alert-card"
            >
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-8 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-rose-600/30">
                    <span className="material-symbols-outlined text-[26px]">
                      fmd_bad
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold bg-rose-600 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                        Step 3: DISPATCH PAUSED // GATE-OUT HOLD
                      </span>
                      <span className="text-xs font-mono font-semibold text-rose-900">
                        Trailer #58-BK-TL • Consignment TRK-2025-084-NL
                      </span>
                      <span className="text-xs font-mono font-extrabold bg-rose-200 text-rose-900 px-2.5 py-0.5 rounded-full">
                        85% PROBABILITY OF RETURN
                      </span>
                    </div>
                    <h2 className="text-base font-extrabold text-slate-900 leading-snug">
                      PROACTIVE QA INTERCEPTION: Gate-Out Paused for Manual
                      Protocol
                    </h2>
                    <p className="text-xs text-slate-700 max-w-3xl leading-relaxed font-medium">
                      "High Risk of Return due to past damage history. Please
                      perform a manual Quality Assurance check and add extra
                      bubble wrap packaging &amp; attach DropTag-G5 impact
                      sensors."
                    </p>
                    <div className="p-3 bg-white/90 rounded-xl flex items-center gap-2.5 text-xs text-slate-700 shadow-sm border border-rose-200">
                      <span className="material-symbols-outlined text-amber-500 text-[18px] shrink-0">
                        verified_user
                      </span>
                      <span>
                        <strong>Required Protocol:</strong> Supervisor must
                        inspect 80x Cryogenic Titanium Valves, wrap in 30mm
                        protective cushioning, and scan DropTag-G5 sensor ID
                        before manifest release.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0 lg:min-w-[240px]">
                  <button
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                    id="btn-upgrade-pack"
                    onClick={() => {}}
                  >
                    <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                      verified
                    </span>
                    <span>Confirm QA &amp; Extra Bubble Wrap Applied</span>
                  </button>
                  <button
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all shadow-sm border border-slate-200 flex items-center justify-center gap-2"
                    onClick={() => {}}
                  >
                    <span className="material-symbols-outlined text-slate-400 text-[16px]">
                      history_edu
                    </span>
                    <span>Inspect Damage History Dossier</span>
                  </button>
                  <button
                    className="w-full py-2 px-4 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                    onClick={() => {}}
                  >
                    <span className="material-symbols-outlined text-rose-600 text-[16px]">
                      lock_open
                    </span>
                    <span>Override Dispatch (Requires Lead Auth)</span>
                  </button>
                </div>
              </div>
            </section>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <section className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          radar
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 uppercase">
                            Step 2 Workflow
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            Smart Clipboard Real-Time Ingestion
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 mt-0.5">
                          Live Shipment Scoring Matrix
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/70">
                      <span>Live inference active</span>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-slate-50 rounded-xl text-xs text-slate-600 grid grid-cols-1 md:grid-cols-3 gap-2 border border-slate-200/60">
                    <div className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-sky-600 text-[16px] shrink-0">
                        precision_manufacturing
                      </span>
                      <div>
                        <span className="font-bold text-slate-800 block text-[11px]">
                          Product Category
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Cryogenic Titanium Valves &amp; Fragile Assemblies
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-rose-600 text-[16px] shrink-0">
                        business
                      </span>
                      <div>
                        <span className="font-bold text-slate-800 block text-[11px]">
                          Client History
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Apex Turbine Dynamics (Frequent damage claims)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-amber-600 text-[16px] shrink-0">
                        navigation
                      </span>
                      <div>
                        <span className="font-bold text-slate-800 block text-[11px]">
                          Route Transit
                        </span>
                        <span className="text-[11px] text-slate-500">
                          Rotterdam to North Sea corridor (&gt;5 days rough sea)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div
                      className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 hover:bg-rose-50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                      id="shipment-row-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                          <svg
                            className="w-14 h-14 -rotate-90"
                            viewBox="0 0 36 36"
                          >
                            <path
                              className="text-rose-100"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3.5"
                            ></path>
                            <path
                              className="text-rose-600 transition-all duration-700"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              id="ring-shipment-1"
                              stroke="currentColor"
                              strokeDasharray="85, 100"
                              strokeLinecap="round"
                              strokeWidth="3.5"
                            ></path>
                          </svg>
                          <span
                            className="absolute font-mono font-black text-xs text-rose-700"
                            id="score-text-1"
                          >
                            85%
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">
                              Trailer #58-BK-TL
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              TRK-2025-084-NL
                            </span>
                            <span
                              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white"
                              id="status-pill-1"
                            >
                              85% CRITICAL RISK
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 font-medium">
                            Cryogenic Titanium Valves • 80 units • Client:{" "}
                            <strong>Apex Turbine</strong> • Carrier:{" "}
                            <strong>Maersk BV</strong>
                          </p>
                          <p className="text-[11px] text-rose-700 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                              troubleshoot
                            </span>
                            <span id="cause-text-1">
                              Probability of Return: 85% • Fragile cryogenic
                              seal + client unloading dock drop history
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:self-center shrink-0">
                        <button
                          className="p-2 text-slate-600 hover:text-slate-900 rounded-xl bg-white border border-slate-200 text-xs font-medium flex items-center gap-1 shadow-sm"
                          onClick={() => {}}
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            sensors
                          </span>
                          <span>Sensors</span>
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 hover:bg-amber-50/70 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                          <svg
                            className="w-14 h-14 -rotate-90"
                            viewBox="0 0 36 36"
                          >
                            <path
                              className="text-slate-200"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3.5"
                            ></path>
                            <path
                              className="text-amber-500"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeDasharray="28, 100"
                              strokeLinecap="round"
                              strokeWidth="3.5"
                            ></path>
                          </svg>
                          <span className="absolute font-mono font-bold text-xs text-amber-700">
                            28%
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">
                              Trailer #77-XP-44
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              TRK-2025-079-NL
                            </span>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                              28% MODERATE
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 font-medium">
                            Hydraulic Dual-Stage Regulators • 60 units •
                            Carrier: <strong>DSV Panalpina</strong>
                          </p>
                          <p className="text-[11px] text-amber-700 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                              water_drop
                            </span>
                            <span>
                              Probability of Return: 28% • Moderate moisture
                              exposure on coastal corridor
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:self-center shrink-0">
                        <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                          Gate 09
                        </span>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-emerald-50/30 border border-emerald-200/60 hover:bg-emerald-50/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                          <svg
                            className="w-14 h-14 -rotate-90"
                            viewBox="0 0 36 36"
                          >
                            <path
                              className="text-slate-200"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3.5"
                            ></path>
                            <path
                              className="text-emerald-500"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeDasharray="8, 100"
                              strokeLinecap="round"
                              strokeWidth="3.5"
                            ></path>
                          </svg>
                          <span className="absolute font-mono font-bold text-xs text-emerald-700">
                            8%
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">
                              Trailer #12-KL-90
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              TRK-2025-081-NL
                            </span>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                              8% LOW
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 font-medium">
                            Precision High-Pressure Flanges • 250 units •
                            Carrier: <strong>DHL Freight</strong>
                          </p>
                          <p className="text-[11px] text-emerald-700 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                              verified
                            </span>
                            <span>
                              Probability of Return: 8% • Solid alloy alloy
                              casing • High recipient compliance
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:self-center shrink-0">
                        <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                          Gate 04
                        </span>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-slate-50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                          <svg
                            className="w-14 h-14 -rotate-90"
                            viewBox="0 0 36 36"
                          >
                            <path
                              className="text-slate-200"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3.5"
                            ></path>
                            <path
                              className="text-emerald-500"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeDasharray="4, 100"
                              strokeLinecap="round"
                              strokeWidth="3.5"
                            ></path>
                          </svg>
                          <span className="absolute font-mono font-bold text-xs text-emerald-700">
                            4%
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">
                              Trailer #33-MN-02
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              TRK-2025-076-NL
                            </span>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                              4% NOMINAL
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 font-medium">
                            Aerospace Viton O-Rings • 1,200 units • Carrier:{" "}
                            <strong>Kuehne+Nagel</strong>
                          </p>
                          <p className="text-[11px] text-emerald-600 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">
                              check_circle
                            </span>
                            <span>
                              Probability of Return: 4% • Passed customs
                              inspection • Resilient polymer seal
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:self-center shrink-0">
                        <span className="text-[11px] font-mono text-slate-400">
                          En Route
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-slate-100">
                  <span>Live Stream Ingestion: 4 trailers synced</span>
                  <span>Inference Latency: 142ms</span>
                </div>
              </section>
              <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded uppercase">
                        Step 4 Workflow
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-1">
                        Autonomous Buffer Space Reservation
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Pre-Allocating WMS Shelf Capacity in Advance
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-sky-400 flex items-center justify-center shrink-0 shadow-md">
                      <span className="material-symbols-outlined text-[20px]">
                        warehouse
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-white shadow-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span className="text-xs font-mono font-bold text-sky-300">
                          WMS AUTO-RESERVATION
                        </span>
                      </div>
                      <span className="text-xs font-mono font-extrabold text-white bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                        BAY R-08
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-100 block">
                        Cold-Quarantine Staging Slot
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">
                        Horizon: Next Week (March 3 – March 7)
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs font-mono">
                      <div>
                        <span className="text-slate-400 text-[10px] block">
                          Volumetric Reserve
                        </span>
                        <span className="text-base font-bold text-white">
                          12.4 m³
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">
                          Tare Weight Limit
                        </span>
                        <span className="text-base font-bold text-white">
                          2,000 kg
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wide">
                        RESERVED &amp; SYNCHRONIZED WITH WMS
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">
                      Autonomous Rationale:
                    </strong>{" "}
                    Even with proactive packaging reinforcement, AI
                    automatically secures shelf quarantine buffer in advance to
                    guarantee zero dock congestion should return transit occur.
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
                      <span>ZONE R STAGING OVERVIEW</span>
                      <span className="text-emerald-600 font-semibold">
                        Bay R-08 Pre-Locked
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200/60">
                      <div className="h-12 rounded-xl bg-slate-200 flex flex-col items-center justify-center text-[10px] font-mono text-slate-500">
                        <span>R-01</span>
                        <span className="text-[9px] text-slate-400">
                          In Use
                        </span>
                      </div>
                      <div className="h-12 rounded-xl bg-slate-200 flex flex-col items-center justify-center text-[10px] font-mono text-slate-500">
                        <span>R-02</span>
                        <span className="text-[9px] text-slate-400">
                          In Use
                        </span>
                      </div>
                      <div className="h-12 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center text-[10px] font-mono text-slate-600">
                        <span>R-03</span>
                        <span className="text-[9px] text-emerald-600">
                          Free
                        </span>
                      </div>
                      <div className="h-12 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center text-[10px] font-mono text-slate-600">
                        <span>R-04</span>
                        <span className="text-[9px] text-emerald-600">
                          Free
                        </span>
                      </div>
                      <div className="h-12 rounded-xl bg-slate-200 flex flex-col items-center justify-center text-[10px] font-mono text-slate-500">
                        <span>R-05</span>
                        <span className="text-[9px] text-slate-400">
                          In Use
                        </span>
                      </div>
                      <div className="h-12 rounded-xl bg-slate-200 flex flex-col items-center justify-center text-[10px] font-mono text-slate-500">
                        <span>R-06</span>
                        <span className="text-[9px] text-slate-400">
                          In Use
                        </span>
                      </div>
                      <div className="h-12 rounded-xl bg-white shadow-sm flex flex-col items-center justify-center text-[10px] font-mono text-slate-600">
                        <span>R-07</span>
                        <span className="text-[9px] text-emerald-600">
                          Free
                        </span>
                      </div>
                      <div className="h-12 rounded-xl bg-sky-500 text-white flex flex-col items-center justify-center text-[10px] font-mono font-bold shadow-md shadow-sky-500/30">
                        <span>R-08</span>
                        <span className="text-[9px] text-sky-100 flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[10px]">
                            lock
                          </span>{" "}
                          LOCKED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight">
                      WMS Protocol Synchronized
                    </h4>
                    <p className="text-[11px] text-emerald-700">
                      Zero Receiving Dock Congestion Guarantee SLA Active
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
    </div>
  );
}
