import { TopHeader } from "../components/TopHeader";
import { RefreshCw } from "lucide-react";

export default function OrderReconciliationPage() {
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
            {/* Title & Top KPI Strip */}
            <section className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold tracking-wider uppercase bg-sky-100 text-sky-900">
                  Agent 02 • Auto-Correction Accountant
                </div>
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Order Reconciliation &amp; Exception Engine
                </h1>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Autonomous AI resolution of warehouse dispatch quantity
                  divergence. Automated billing block, synthetic invoice
                  recalculation, and procurement backorder generation.
                </p>
              </div>
              {/* Live KPI Badges */}
              <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
                {/* Metric 1: Divergence */}
                <div className="bg-rose-50 p-3.5 rounded-2xl shadow-sm min-w-[170px]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 font-mono">
                      Divergence Caught
                    </span>
                    <span className="material-symbols-outlined text-sm text-rose-600">
                      report
                    </span>
                  </div>
                  <div className="text-lg font-bold font-mono text-rose-700">
                    -20 Units
                  </div>
                  <div className="text-xs font-semibold font-mono text-rose-600/80">
                    -$36,900.00 USD
                  </div>
                </div>
                {/* Metric 2: Pipeline State */}
                <div className="bg-emerald-50 p-3.5 rounded-2xl shadow-sm min-w-[170px]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-mono">
                      Pipeline Status
                    </span>
                    <span className="material-symbols-outlined text-sm text-emerald-600">
                      verified
                    </span>
                  </div>
                  <div className="text-lg font-bold text-emerald-800">
                    Remediated
                  </div>
                  <div className="text-xs font-semibold text-emerald-700/80 font-mono">
                    4 / 4 Sequence Locked
                  </div>
                </div>
                {/* Metric 3: Billing Lock */}
                <div className="bg-slate-900 text-white p-3.5 rounded-2xl shadow-sm min-w-[170px]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 font-mono">
                      Billing Engine
                    </span>
                    <span className="material-symbols-outlined text-sm text-sky-400">
                      lock
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white tracking-wide">
                    FROZEN / SAFE
                  </div>
                  <div className="text-xs text-slate-400">
                    NetSuite &amp; SAP Hold
                  </div>
                </div>
              </div>
            </section>
            {/* Staging Divergence Resolution Hero Card */}
            <section className="bg-white rounded-3xl p-6 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-100 text-amber-900">
                      STAGING DIVERGENCE DETECTED
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      Trailer #58-BK-TL • Dock Bay 04B
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="">Cryogenic Titanium Valves</span>
                    <span className="font-mono text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      SKU-VALVE-8481-90
                    </span>
                  </h2>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-medium">
                    Target Consignee
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Apex Turbine Dynamics Corp.
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    PO: PO-89240-TI
                  </div>
                </div>
              </div>
              {/* Quantitative Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* PO Stated */}
                <div className="bg-slate-50 p-4 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-500">
                      PO Purchase Order Stated
                    </span>
                    <div className="text-2xl font-bold font-mono text-slate-800 mt-1">
                      100{" "}
                      <span className="text-xs font-sans font-normal text-slate-500">
                        Units
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-600 font-medium mt-3 bg-white px-2.5 py-1 rounded inline-block shadow-sm">
                    $184,500.00 USD
                  </div>
                </div>
                {/* Staged Actual */}
                <div className="bg-amber-50/70 p-4 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-amber-800">
                      ≠ Physical Staged Actual
                    </span>
                    <div className="text-2xl font-bold font-mono text-amber-800 mt-1">
                      80{" "}
                      <span className="text-xs font-sans font-normal text-amber-700">
                        Units
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-amber-900 font-semibold mt-3 bg-white/80 px-2.5 py-1 rounded inline-block shadow-sm">
                    $147,600.00 USD
                  </div>
                </div>
                {/* Deficit */}
                <div className="bg-rose-50 p-4 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-rose-800">
                      Delta Deficit Divergence
                    </span>
                    <div className="text-2xl font-bold font-mono text-rose-700 mt-1">
                      -20{" "}
                      <span className="text-xs font-sans font-normal text-rose-600">
                        Units
                      </span>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-rose-700 font-bold mt-3 bg-white px-2.5 py-1 rounded inline-block shadow-sm">
                    -$36,900.00 USD
                  </div>
                </div>
              </div>
              {/* Physical Staging Visual & Supervisor Note Box */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-4 rounded-2xl overflow-hidden relative shadow-sm h-36 lg:h-auto">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="High quality industrial warehouse dock interior with heavy-duty robotic pallets loaded with precision steel cryo valves under focused LED lights in Rotterdam port logistics terminal."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY5GknsAFHkwwvROwNkPedRolG0xHVFfrIWqwJq2AS-1W_aDW0UkC9itgrKKa73k5E4X_uTsWrnxTl7hRbec9IgQa4-Aj9zs8Xh1jZtfrnASjrNJC02YK2dqwkvCYL7p0fWQhuxlc2ZvGmVTLOoFveZoSkCP64-ed-bA-qW3JJMmYjjHbzOM1tDd5rcagxOF8LTX86EL0m2MJ92C6q0jonNIu9E4s_Ut0hqSrtVDg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-300 font-bold">
                      Staging Bay 04B Telemetry
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      Pallet Tare Weight verified at 1,420 kg (20u Deficit
                      registered)
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-8 bg-slate-50 p-4 rounded-2xl flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <span className="material-symbols-outlined text-amber-600 text-base">
                      speaker_notes
                    </span>
                    <span className="">
                      Supervisor Audit Note Excerpt (Smart Clipboard Synced)
                    </span>
                  </div>
                  <blockquote className="text-xs font-mono text-slate-800 italic bg-white p-3 rounded-xl shadow-sm leading-relaxed">
                    "Only 80 units available in cold storage vault; Lot batch 49
                    exhausted prematurely during high-volume pick. Remaining 20
                    units held at Supplier facility."
                  </blockquote>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-1">
                    <span className="">
                      Author: E. Jordan (Chief Customs Officer &amp; Staging
                      Lead)
                    </span>
                    <span className="">
                      Timestamp: 10:41:58 CET • Gate-Out Hold Engaged
                    </span>
                  </div>
                </div>
              </div>
            </section>
            {/* AI Automated Action Pipeline: 3 Visual Bento Flow Cards */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap items-center justify-between w-full gap-3 p-3.5 bg-sky-50 rounded-2xl border border-sky-100">
                  <div className="flex items-center gap-3">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold text-sky-900 uppercase tracking-wide">
                        Step 1 Real-Time Wake-Up Trigger:
                      </span>
                      <span className="text-xs text-sky-800 ml-1.5 font-medium">
                        Reconciliation Agent woken up at{" "}
                        <strong className="font-mono font-bold text-slate-900">
                          10:41:59 CET
                        </strong>{" "}
                        by Smart Clipboard Divergence Event (100 ordered vs 80
                        packed in Trailer #58-BK-TL)
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                    <span className="material-symbols-outlined text-sm text-emerald-600">
                      verified
                    </span>
                    Autonomous Consensus Verified (4/4 Steps)
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Step 1 Card: Catching the Exception */}
                <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col justify-between space-y-4 border border-slate-200/70 hover:border-sky-300 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                        Step 01 • Wake-Up
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                        <span className="material-symbols-outlined text-base">
                          notifications_active
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        1. Catching the Exception
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Reconciliation Agent woken up the exact second
                        Supervisor Agent raises Quantity Divergence Exception.
                      </p>
                    </div>
                    <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl text-xs font-mono border border-slate-100">
                      <div className="flex justify-between text-slate-600">
                        <span className="text-[11px]">Trigger Source:</span>
                        <span className="font-bold text-slate-800 text-[11px]">
                          Smart Clipboard
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span className="text-[11px]">Timestamp:</span>
                        <span className="font-bold text-sky-700 text-[11px]">
                          10:41:59.102 CET
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span className="text-[11px]">Trailer Node:</span>
                        <span className="font-bold text-slate-800 text-[11px]">
                          #58-BK-TL
                        </span>
                      </div>
                      <div className="pt-1 border-t border-slate-200/60 text-[11px] text-rose-700 font-semibold">
                        100 ordered vs 80 packed (-20u)
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                      <span className="material-symbols-outlined text-xs">
                        bolt
                      </span>
                      Agent Woken Up &amp; Active
                    </span>
                  </div>
                </div>
                {/* Step 2 Card: Blocking the Billing Engine */}
                <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col justify-between space-y-4 border border-rose-200 hover:border-rose-300 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        Step 02 • ERP Freeze
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                        <span className="material-symbols-outlined text-base">
                          lock
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        2. Blocking Billing Engine
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Instantly places hold on ERP billing to prevent
                        automatic dispatch of standard invoice for 100 items.
                      </p>
                    </div>
                    <div className="space-y-1.5 bg-rose-50/60 p-3 rounded-xl text-xs font-mono border border-rose-100">
                      <div className="flex justify-between text-slate-600">
                        <span className="text-[11px]">ERP Target:</span>
                        <span className="font-bold text-slate-900 text-[11px]">
                          SAP S/4HANA &amp; NS
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span className="text-[11px]">Intercept ID:</span>
                        <span className="font-bold text-slate-900 text-[11px]">
                          #BLK-8912-TX
                        </span>
                      </div>
                      <div className="pt-1 text-[10px] font-bold text-rose-800 uppercase tracking-wide bg-rose-100 px-2 py-1 rounded text-center">
                        INVOICE DISPATCH HALTED - ERP BILLING HOLD ACTIVE
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      <span className="material-symbols-outlined text-xs text-rose-600">
                        shield
                      </span>
                      Billing Thread Frozen (100u)
                    </span>
                  </div>
                </div>
                {/* Step 3 Card: Invoice Modification */}
                <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col justify-between space-y-4 border border-slate-200/70 hover:border-emerald-300 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Step 03 • Resynthesis
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <span className="material-symbols-outlined text-base">
                          edit_document
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        3. Invoice Modification
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Modifies target data: voids original line item for 100
                        units and generates verified line item for 80 units.
                      </p>
                    </div>
                    <div className="space-y-1.5 bg-slate-50 p-2.5 rounded-xl text-xs font-mono border border-slate-100">
                      <div className="flex justify-between items-center text-slate-400">
                        <span className="line-through text-[11px]">
                          Void: 100u @ $1,845
                        </span>
                        <span className="line-through font-bold text-[11px]">
                          $184,500.00
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-bold">
                        <span className="text-[11px]">
                          Active: 80u @ $1,845
                        </span>
                        <span className="text-[11px]">$147,600.00</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[10px] pt-0.5">
                        <span className="">Doc Ref:</span>
                        <span className="font-bold text-slate-800">
                          INV-2024-9982-REV80
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <span className="material-symbols-outlined text-xs text-emerald-600">
                        verified
                      </span>
                      Line Items Reconciled (80u)
                    </span>
                  </div>
                </div>
                {/* Step 4 Card: The Backorder Tag */}
                <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col justify-between space-y-4 border border-amber-200 hover:border-amber-300 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Step 04 • Backorder
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                        <span className="material-symbols-outlined text-base">
                          inventory_2
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        4. The Backorder Tag
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Tags missing 20 items as 'Backorder' in central
                        database, alerting procurement that stock is needed.
                      </p>
                    </div>
                    <div className="space-y-1.5 bg-amber-50/60 p-3 rounded-xl text-xs font-mono border border-amber-100">
                      <div className="flex justify-between text-slate-600">
                        <span className="text-[11px]">Backorder ID:</span>
                        <span className="font-bold text-amber-800 text-[11px]">
                          #BO-VALVE-20
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span className="text-[11px]">Missing Tag:</span>
                        <span className="font-bold text-rose-700 text-[11px]">
                          -20 Units Deficit
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span className="text-[11px]">Procurement:</span>
                        <span className="font-bold text-slate-900 text-[11px]">
                          David Sterling
                        </span>
                      </div>
                      <div className="pt-1 text-[10px] text-amber-800 font-semibold">
                        Priority 1 Ticket Dispatched via EDI
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      <span className="material-symbols-outlined text-xs text-amber-600">
                        send
                      </span>
                      Procurement Alert Dispatched
                    </span>
                  </div>
                </div>
              </div>
            </section>
            {/* Interactive Final Resolution Banner */}
            <section className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-300">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  READY FOR HUMAN CONFIRMATION &amp; CARRIER GATE-OUT
                </div>
                <h3 className="text-lg font-bold">
                  Approve Synthetic Settlement &amp; Release Trailer #58-BK-TL
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Committing will electronically transmit revised invoice
                  INV-2024-9982-REV80 to Apex Turbine Dynamics, alert customs at
                  Gate 04, and release physical vehicle barrier.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  className="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center gap-2"
                  onClick={() => {}}
                >
                  <span className="">Authorize Settlement ($147,600.00)</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </section>

      </div>
    </div>
  );
}
