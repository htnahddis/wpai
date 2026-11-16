const fs = require('fs');

const file = 'src/components/views/MondayAgentStudioClonedView.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Locate the old black Core capabilities section
const startMarker = '<section class=\\"background-color-black\\">';
const endMarker = '<section><div class=\\"m_padding-global\\"><div class=\\"m_container-xlarge\\"><div class=\\"m_padding-section-large\\"><div class=\\"m_spacer-3rem\\"></div><div class=\\"agents_trust-wrapper\\">';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

console.log('startIdx:', startIdx);
console.log('endIdx:', endIdx);

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not locate section boundaries!');
  process.exit(1);
}

// Generate the new clean light section HTML (escaped for template string in TSX)
const newSectionRaw = `
<section class=\\"percipere-core-capabilities-section bg-[#F8FAFC] py-20 border-y border-[#E2E8F0]\\">
  <div class=\\"m_padding-global\\">
    <div class=\\"m_container-xlarge\\">
      <div class=\\"text-align-center max-w-3xl mx-auto mb-16 text-center\\">
        <div class=\\"agents-tagline inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#6161FF] bg-[#6161FF]/10 border border-[#6161FF]/20 mb-3\\">Core capabilities</div>
        <h2 class=\\"agents_h2 text-3xl md:text-5xl font-bold tracking-tight text-[#191923]\\">The foundation behind every agent</h2>
        <p class=\\"text-[#64748B] text-base md:text-lg mt-4 max-w-2xl mx-auto\\">Enterprise-grade reasoning, native SAP S/4HANA connectivity, and Clean Core governance built directly into every autonomous workflow.</p>
      </div>

      <!-- Desktop & Tablet Interactive Grid -->
      <div class=\\"percipere-core-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start\\">
        <!-- Left: Capability Tabs Navigation -->
        <div class=\\"percipere-core-tabs-menu lg:col-span-5 flex flex-col gap-3.5\\">
          <!-- Tab 1: Knowledge -->
          <button type=\\"button\\" data-tab-id=\\"knowledge\\" class=\\"percipere-cap-tab active text-left p-6 rounded-2xl border-2 transition-all duration-200 bg-white border-[#FF00B7] shadow-sm hover:shadow-md cursor-pointer group\\">
            <div class=\\"flex items-center justify-between mb-2\\">
              <span class=\\"text-lg font-bold text-[#191923] group-hover:text-[#FF00B7] transition-colors flex items-center gap-2.5\\">
                <span class=\\"w-8 h-8 rounded-xl bg-[#FFF0FA] text-[#FF00B7] flex items-center justify-center font-mono text-sm font-bold border border-[#FF00B7]/20\\">01</span>
                Knowledge
              </span>
              <span class=\\"cap-indicator w-2.5 h-2.5 rounded-full bg-[#FF00B7]\\"></span>
            </div>
            <div class=\\"cap-description text-sm text-[#475569] leading-relaxed mt-2 transition-all duration-300\\">
              Agents use your enterprise blueprints, SAP scope items, S/4HANA CDS views, and Jira boards as grounding context — guaranteeing every action adheres to verified Clean Core architecture.
            </div>
          </button>

          <!-- Tab 2: Actions -->
          <button type=\\"button\\" data-tab-id=\\"actions\\" class=\\"percipere-cap-tab text-left p-6 rounded-2xl border-2 transition-all duration-200 bg-white border-[#E2E8F0] shadow-sm hover:shadow-md cursor-pointer group\\">
            <div class=\\"flex items-center justify-between mb-2\\">
              <span class=\\"text-lg font-bold text-[#191923] group-hover:text-[#00C875] transition-colors flex items-center gap-2.5\\">
                <span class=\\"w-8 h-8 rounded-xl bg-[#EBFBF3] text-[#008744] flex items-center justify-center font-mono text-sm font-bold border border-[#00C875]/20\\">02</span>
                Actions
              </span>
              <span class=\\"cap-indicator w-2.5 h-2.5 rounded-full bg-transparent\\"></span>
            </div>
            <div class=\\"cap-description text-sm text-[#475569] leading-relaxed mt-2 hidden transition-all duration-300\\">
              Put autonomous agents in motion across every phase of ERP transformation: executing validated BAPIs, deploying SAP BTP side-by-side extensions, and syncing cross-system cutover jobs.
            </div>
          </button>

          <!-- Tab 3: Integrations -->
          <button type=\\"button\\" data-tab-id=\\"integrations\\" class=\\"percipere-cap-tab text-left p-6 rounded-2xl border-2 transition-all duration-200 bg-white border-[#E2E8F0] shadow-sm hover:shadow-md cursor-pointer group\\">
            <div class=\\"flex items-center justify-between mb-2\\">
              <span class=\\"text-lg font-bold text-[#191923] group-hover:text-[#0086C0] transition-colors flex items-center gap-2.5\\">
                <span class=\\"w-8 h-8 rounded-xl bg-[#EBF5FF] text-[#0086C0] flex items-center justify-center font-mono text-sm font-bold border border-[#0086C0]/20\\">03</span>
                Integrations
              </span>
              <span class=\\"cap-indicator w-2.5 h-2.5 rounded-full bg-transparent\\"></span>
            </div>
            <div class=\\"cap-description text-sm text-[#475569] leading-relaxed mt-2 hidden transition-all duration-300\\">
              Native bi-directional Model Context Protocol (MCP) and REST connectors across SAP S/4HANA, SAP BTP, Jira Service Management, ServiceNow, Salesforce, Teams, and Slack.
            </div>
          </button>

          <!-- Tab 4: Autonomy -->
          <button type=\\"button\\" data-tab-id=\\"autonomy\\" class=\\"percipere-cap-tab text-left p-6 rounded-2xl border-2 transition-all duration-200 bg-white border-[#E2E8F0] shadow-sm hover:shadow-md cursor-pointer group\\">
            <div class=\\"flex items-center justify-between mb-2\\">
              <span class=\\"text-lg font-bold text-[#191923] group-hover:text-[#D97706] transition-colors flex items-center gap-2.5\\">
                <span class=\\"w-8 h-8 rounded-xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center font-mono text-sm font-bold border border-[#F59E0B]/20\\">04</span>
                24/7 Autonomy
              </span>
              <span class=\\"cap-indicator w-2.5 h-2.5 rounded-full bg-transparent\\"></span>
            </div>
            <div class=\\"cap-description text-sm text-[#475569] leading-relaxed mt-2 hidden transition-all duration-300\\">
              Agents operate 24/7 without latency, volume limits, or timezone bottlenecks. They audit code transports, triage AMS incidents, and reconcile financial master data around the clock.
            </div>
          </button>

          <!-- Tab 5: Guardrails -->
          <button type=\\"button\\" data-tab-id=\\"guardrails\\" class=\\"percipere-cap-tab text-left p-6 rounded-2xl border-2 transition-all duration-200 bg-white border-[#E2E8F0] shadow-sm hover:shadow-md cursor-pointer group\\">
            <div class=\\"flex items-center justify-between mb-2\\">
              <span class=\\"text-lg font-bold text-[#191923] group-hover:text-[#7C3AED] transition-colors flex items-center gap-2.5\\">
                <span class=\\"w-8 h-8 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center font-mono text-sm font-bold border border-[#8B5CF6]/20\\">05</span>
                Guardrails
              </span>
              <span class=\\"cap-indicator w-2.5 h-2.5 rounded-full bg-transparent\\"></span>
            </div>
            <div class=\\"cap-description text-sm text-[#475569] leading-relaxed mt-2 hidden transition-all duration-300\\">
              Enterprise governance by design: direct core modifications blocked, dual-custody approval queues for transports, complete cryptographic audit trails, and 100% private tenant isolation.
            </div>
          </button>
        </div>

        <!-- Right: Interactive Visual Stage -->
        <div class=\\"percipere-core-stage lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border-2 border-[#E2E8F0] shadow-lg min-h-[520px] flex flex-col justify-between\\">
          <!-- Visual Panel 1: Knowledge -->
          <div data-panel-id=\\"knowledge\\" class=\\"percipere-cap-panel flex flex-col h-full justify-between\\">
            <div>
              <div class=\\"flex items-center justify-between pb-5  mb-6\\">
                <div>
                  <span class=\\"text-xs font-mono font-bold uppercase tracking-wider text-[#FF00B7] bg-[#FFF0FA] px-3 py-1 rounded-full border border-[#FF00B7]/20\\">Percipere Clean Core Matrix</span>
                  <h3 class=\\"text-xl font-bold text-[#191923] mt-2\\">Enterprise Grounding Engine</h3>
                </div>
                <div class=\\"flex items-center gap-2 text-xs font-semibold text-[#008744] bg-[#EBFBF3] px-3 py-1.5 rounded-full border border-[#00C875]/30\\">
                  <span class=\\"w-2 h-2 rounded-full bg-[#00C875] animate-pulse\\"></span>
                  4 Enterprise Nodes Active
                </div>
              </div>

              <div class=\\"grid grid-cols-1 sm:grid-cols-2 gap-4\\">
                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]\\">
                  <div class=\\"text-xs font-mono font-bold text-[#6161FF] mb-1\\">SAP S/4HANA Cloud</div>
                  <div class=\\"text-sm font-semibold text-[#191923]\\">Released Standard APIs & CDS Views</div>
                  <div class=\\"text-xs text-[#64748B] mt-1.5\\">8,420 Released APIs verified Clean Core L1</div>
                </div>

                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]\\">
                  <div class=\\"text-xs font-mono font-bold text-[#0086C0] mb-1\\">SAP BTP Extension Suite</div>
                  <div class=\\"text-sm font-semibold text-[#191923]\\">Side-by-Side Architectural Specs</div>
                  <div class=\\"text-xs text-[#64748B] mt-1.5\\">Event Mesh & Destination Service mappings</div>
                </div>

                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]\\">
                  <div class=\\"text-xs font-mono font-bold text-[#008744] mb-1\\">Atlassian Jira & Confluence</div>
                  <div class=\\"text-sm font-semibold text-[#191923]\\">Blueprint & Transformation Specs</div>
                  <div class=\\"text-xs text-[#64748B] mt-1.5\\">1,240 Project workstream documentation files</div>
                </div>

                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]\\">
                  <div class=\\"text-xs font-mono font-bold text-[#A25DDF] mb-1\\">ServiceNow ITSM Knowledge Base</div>
                  <div class=\\"text-sm font-semibold text-[#191923]\\">Resolution & Error Runbooks</div>
                  <div class=\\"text-xs text-[#64748B] mt-1.5\\">3,890 Validated enterprise resolution patterns</div>
                </div>
              </div>

              <div class=\\"mt-6 p-4 rounded-xl bg-[#FFF5FB] border border-[#FF00B7]/20 flex items-start gap-3\\">
                <div class=\\"w-6 h-6 rounded-lg bg-[#FF00B7] text-white flex items-center justify-center text-xs font-bold shrink-0\\">✓</div>
                <div class=\\"text-xs text-[#191923]\\">
                  <strong class=\\"text-[#FF00B7]\\">Strict Zero-Hallucination Policy:</strong> Percipere agents execute only against verified client documents and released SAP endpoints. Outputs contain verifiable lineage back to exact source documents.
                </div>
              </div>
            </div>

            <div class=\\"pt-5 border-t border-[#F1F5F9] mt-6 flex items-center justify-between text-xs text-[#64748B]\\">
              <span>Context Sync: Real-Time Webhooks</span>
              <span class=\\"font-mono text-[#008744]\\">SOC 2 Encrypted In-Transit</span>
            </div>
          </div>

          <!-- Visual Panel 2: Actions -->
          <div data-panel-id=\\"actions\\" class=\\"percipere-cap-panel hidden flex-col h-full justify-between\\">
            <div>
              <div class=\\"flex items-center justify-between pb-5  mb-6\\">
                <div>
                  <span class=\\"text-xs font-mono font-bold uppercase tracking-wider text-[#008744] bg-[#EBFBF3] px-3 py-1 rounded-full border border-[#00C875]/20\\">Autonomous Execution Engine</span>
                  <h3 class=\\"text-xl font-bold text-[#191923] mt-2\\">End-to-End Enterprise Action Pipeline</h3>
                </div>
                <div class=\\"flex items-center gap-2 text-xs font-semibold text-[#008744] bg-[#EBFBF3] px-3 py-1.5 rounded-full border border-[#00C875]/30\\">
                  <span class=\\"w-2 h-2 rounded-full bg-[#00C875] animate-pulse\\"></span>
                  Two-Way Execution Active
                </div>
              </div>

              <div class=\\"flex flex-col gap-3\\">
                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between\\">
                  <div class=\\"flex items-center gap-3\\">
                    <span class=\\"w-6 h-6 rounded-full bg-[#008744] text-white flex items-center justify-center text-xs font-bold\\">1</span>
                    <div>
                      <div class=\\"text-sm font-semibold text-[#191923]\\">ABAP Custom Code Pre-Audit</div>
                      <div class=\\"text-xs text-[#64748B]\\">Inspect commit against Clean Core guidelines & user exits</div>
                    </div>
                  </div>
                  <span class=\\"text-xs font-mono font-bold text-[#008744] bg-[#EBFBF3] px-2.5 py-1 rounded-lg\\">Passed (100% L1)</span>
                </div>

                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between\\">
                  <div class=\\"flex items-center gap-3\\">
                    <span class=\\"w-6 h-6 rounded-full bg-[#008744] text-white flex items-center justify-center text-xs font-bold\\">2</span>
                    <div>
                      <div class=\\"text-sm font-semibold text-[#191923]\\">SAP BTP Extension Packaging</div>
                      <div class=\\"text-xs text-[#64748B]\\">Compile side-by-side service and bind OAuth destinations</div>
                    </div>
                  </div>
                  <span class=\\"text-xs font-mono font-bold text-[#0086C0] bg-[#EBF5FF] px-2.5 py-1 rounded-lg\\">Deployed</span>
                </div>

                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between\\">
                  <div class=\\"flex items-center gap-3\\">
                    <span class=\\"w-6 h-6 rounded-full bg-[#008744] text-white flex items-center justify-center text-xs font-bold\\">3</span>
                    <div>
                      <div class=\\"text-sm font-semibold text-[#191923]\\">BAPI Invocation & Master Data Lock</div>
                      <div class=\\"text-xs text-[#64748B]\\">Execute transactional post with automatic rollback protection</div>
                    </div>
                  </div>
                  <span class=\\"text-xs font-mono font-bold text-[#6161FF] bg-[#F0EFFF] px-2.5 py-1 rounded-lg\\">Committed</span>
                </div>

                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between\\">
                  <div class=\\"flex items-center gap-3\\">
                    <span class=\\"w-6 h-6 rounded-full bg-[#008744] text-white flex items-center justify-center text-xs font-bold\\">4</span>
                    <div>
                      <div class=\\"text-sm font-semibold text-[#191923]\\">Jira Status Sync & Audit Dispatch</div>
                      <div class=\\"text-xs text-[#64748B]\\">Update cutover tracker and log cryptographic audit receipt</div>
                    </div>
                  </div>
                  <span class=\\"text-xs font-mono font-bold text-[#008744] bg-[#EBFBF3] px-2.5 py-1 rounded-lg\\">Complete</span>
                </div>
              </div>
            </div>

            <div class=\\"pt-5 border-t border-[#F1F5F9] mt-6 flex items-center justify-between text-xs text-[#64748B]\\">
              <span>Execution Integrity: Atomic Transactions</span>
              <span class=\\"font-mono text-[#008744]\\">Audit Hash #8F2A-09C4</span>
            </div>
          </div>

          <!-- Visual Panel 3: Integrations -->
          <div data-panel-id=\\"integrations\\" class=\\"percipere-cap-panel hidden flex-col h-full justify-between\\">
            <div>
              <div class=\\"flex items-center justify-between pb-5  mb-6\\">
                <div>
                  <span class=\\"text-xs font-mono font-bold uppercase tracking-wider text-[#0086C0] bg-[#EBF5FF] px-3 py-1 rounded-full border border-[#0086C0]/20\\">Enterprise Integration Fabric</span>
                  <h3 class=\\"text-xl font-bold text-[#191923] mt-2\\">Bi-Directional Enterprise Ecosystem</h3>
                </div>
                <div class=\\"flex items-center gap-2 text-xs font-semibold text-[#008744] bg-[#EBFBF3] px-3 py-1.5 rounded-full border border-[#00C875]/30\\">
                  <span class=\\"w-2 h-2 rounded-full bg-[#00C875] animate-pulse\\"></span>
                  MCP Protocol Active
                </div>
              </div>

              <div class=\\"grid grid-cols-2 sm:grid-cols-3 gap-3.5\\">
                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center\\">
                  <div class=\\"text-xs font-mono font-bold text-[#6161FF]\\">SAP S/4HANA</div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">OData v4 & RFC</div>
                  <span class=\\"inline-block mt-2 text-[10px] font-bold text-[#008744] bg-[#EBFBF3] px-2 py-0.5 rounded\\">Connected</span>
                </div>

                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center\\">
                  <div class=\\"text-xs font-mono font-bold text-[#0086C0]\\">SAP BTP</div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Event Mesh & APIs</div>
                  <span class=\\"inline-block mt-2 text-[10px] font-bold text-[#008744] bg-[#EBFBF3] px-2 py-0.5 rounded\\">Connected</span>
                </div>

                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center\\">
                  <div class=\\"text-xs font-mono font-bold text-[#008744]\\">Atlassian Jira</div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">REST API v3</div>
                  <span class=\\"inline-block mt-2 text-[10px] font-bold text-[#008744] bg-[#EBFBF3] px-2 py-0.5 rounded\\">Connected</span>
                </div>

                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center\\">
                  <div class=\\"text-xs font-mono font-bold text-[#A25DDF]\\">ServiceNow</div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Table API & OAuth</div>
                  <span class=\\"inline-block mt-2 text-[10px] font-bold text-[#008744] bg-[#EBFBF3] px-2 py-0.5 rounded\\">Connected</span>
                </div>

                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center\\">
                  <div class=\\"text-xs font-mono font-bold text-[#00B7FF]\\">Salesforce</div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Bulk API 2.0</div>
                  <span class=\\"inline-block mt-2 text-[10px] font-bold text-[#008744] bg-[#EBFBF3] px-2 py-0.5 rounded\\">Connected</span>
                </div>

                <div class=\\"p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center\\">
                  <div class=\\"text-xs font-mono font-bold text-[#FF00B7]\\">Teams & Slack</div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Approvals & Alerts</div>
                  <span class=\\"inline-block mt-2 text-[10px] font-bold text-[#008744] bg-[#EBFBF3] px-2 py-0.5 rounded\\">Connected</span>
                </div>
              </div>

              <div class=\\"mt-6 p-4 rounded-xl bg-[#F0F9FF] border border-[#0086C0]/20 flex items-start gap-3\\">
                <div class=\\"w-6 h-6 rounded-lg bg-[#0086C0] text-white flex items-center justify-center text-xs font-bold shrink-0\\">⇄</div>
                <div class=\\"text-xs text-[#191923]\\">
                  <strong class=\\"text-[#0086C0]\\">Zero Manual Handoffs:</strong> Percipere agents ingest triggers from SAP, perform autonomous enrichment, and seamlessly update upstream tickets without human data re-entry.
                </div>
              </div>
            </div>

            <div class=\\"pt-5 border-t border-[#F1F5F9] mt-6 flex items-center justify-between text-xs text-[#64748B]\\">
              <span>Protocol: Model Context Protocol (MCP)</span>
              <span class=\\"font-mono text-[#008744]\\">Mutual TLS 1.3 Encryption</span>
            </div>
          </div>

          <!-- Visual Panel 4: Autonomy -->
          <div data-panel-id=\\"autonomy\\" class=\\"percipere-cap-panel hidden flex-col h-full justify-between\\">
            <div>
              <div class=\\"flex items-center justify-between pb-5  mb-6\\">
                <div>
                  <span class=\\"text-xs font-mono font-bold uppercase tracking-wider text-[#D97706] bg-[#FFFBEB] px-3 py-1 rounded-full border border-[#F59E0B]/20\\">Continuous Operations Engine</span>
                  <h3 class=\\"text-xl font-bold text-[#191923] mt-2\\">24/7 Autonomous Governance & Triage</h3>
                </div>
                <div class=\\"flex items-center gap-2 text-xs font-semibold text-[#008744] bg-[#EBFBF3] px-3 py-1.5 rounded-full border border-[#00C875]/30\\">
                  <span class=\\"w-2 h-2 rounded-full bg-[#00C875] animate-pulse\\"></span>
                  99.98% Clean Core Score
                </div>
              </div>

              <div class=\\"grid grid-cols-3 gap-3 mb-5\\">
                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center\\">
                  <div class=\\"text-2xl font-bold text-[#191923] font-mono\\">99.98%</div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Clean Core Rate</div>
                </div>
                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center\\">
                  <div class=\\"text-2xl font-bold text-[#008744] font-mono\\">&lt; 14s</div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Mean Triage Speed</div>
                </div>
                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center\\">
                  <div class=\\"text-2xl font-bold text-[#6161FF] font-mono\\">4,210+</div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Commits Audited</div>
                </div>
              </div>

              <div class=\\"flex flex-col gap-2.5\\">
                <div class=\\"p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs\\">
                  <div class=\\"flex items-center gap-2\\">
                    <span class=\\"font-mono text-[#64748B]\\">02:14 AM</span>
                    <span class=\\"text-[#191923] font-medium\\">Batch error in S/4HANA cutover job auto-triaged & remediated</span>
                  </div>
                  <span class=\\"font-mono text-[#008744] font-semibold\\">Resolved</span>
                </div>
                <div class=\\"p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs\\">
                  <div class=\\"flex items-center gap-2\\">
                    <span class=\\"font-mono text-[#64748B]\\">03:45 AM</span>
                    <span class=\\"text-[#191923] font-medium\\">18 custom ABAP packages evaluated: 0 direct table modifications</span>
                  </div>
                  <span class=\\"font-mono text-[#008744] font-semibold\\">Clean Core</span>
                </div>
                <div class=\\"p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs\\">
                  <div class=\\"flex items-center gap-2\\">
                    <span class=\\"font-mono text-[#64748B]\\">05:12 AM</span>
                    <span class=\\"text-[#191923] font-medium\\">12,400 vendor reconciliation records validated across ECC & S/4</span>
                  </div>
                  <span class=\\"font-mono text-[#008744] font-semibold\\">Synced</span>
                </div>
              </div>
            </div>

            <div class=\\"pt-5 border-t border-[#F1F5F9] mt-6 flex items-center justify-between text-xs text-[#64748B]\\">
              <span>Continuous Execution: 24/7/365</span>
              <span class=\\"font-mono text-[#008744]\\">Zero Downtime Recorded</span>
            </div>
          </div>

          <!-- Visual Panel 5: Guardrails -->
          <div data-panel-id=\\"guardrails\\" class=\\"percipere-cap-panel hidden flex-col h-full justify-between\\">
            <div>
              <div class=\\"flex items-center justify-between pb-5  mb-6\\">
                <div>
                  <span class=\\"text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] bg-[#F5F3FF] px-3 py-1 rounded-full border border-[#8B5CF6]/20\\">Enterprise Guardrails Cockpit</span>
                  <h3 class=\\"text-xl font-bold text-[#191923] mt-2\\">Zero-Trust Governance & Compliance</h3>
                </div>
                <div class=\\"flex items-center gap-2 text-xs font-semibold text-[#008744] bg-[#EBFBF3] px-3 py-1.5 rounded-full border border-[#00C875]/30\\">
                  <span class=\\"w-2 h-2 rounded-full bg-[#00C875] animate-pulse\\"></span>
                  Active Enforcement
                </div>
              </div>

              <div class=\\"flex flex-col gap-3\\">
                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]\\">
                  <div class=\\"flex items-center justify-between\\">
                    <span class=\\"text-sm font-semibold text-[#191923]\\">Gate 1: Zero Core Modification Rule</span>
                    <span class=\\"text-xs font-mono font-bold text-[#008744] bg-[#EBFBF3] px-2 py-0.5 rounded\\">Enforced</span>
                  </div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Direct modifications to standard SAP tables are rejected automatically.</div>
                </div>

                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]\\">
                  <div class=\\"flex items-center justify-between\\">
                    <span class=\\"text-sm font-semibold text-[#191923]\\">Gate 2: Dual-Custody Approval Queue</span>
                    <span class=\\"text-xs font-mono font-bold text-[#6161FF] bg-[#F0EFFF] px-2 py-0.5 rounded\\">Configured</span>
                  </div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">High-stakes actions (financial posts, transport commits) require human approval.</div>
                </div>

                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]\\">
                  <div class=\\"flex items-center justify-between\\">
                    <span class=\\"text-sm font-semibold text-[#191923]\\">Gate 3: Cryptographic Audit Trail</span>
                    <span class=\\"text-xs font-mono font-bold text-[#008744] bg-[#EBFBF3] px-2 py-0.5 rounded\\">SOC 2 Type II</span>
                  </div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Immutable logging of every prompt, system call, and parameter payload.</div>
                </div>

                <div class=\\"p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]\\">
                  <div class=\\"flex items-center justify-between\\">
                    <span class=\\"text-sm font-semibold text-[#191923]\\">Gate 4: Private Tenant Isolation</span>
                    <span class=\\"text-xs font-mono font-bold text-[#008744] bg-[#EBFBF3] px-2 py-0.5 rounded\\">Zero Retention</span>
                  </div>
                  <div class=\\"text-xs text-[#64748B] mt-1\\">Client enterprise data is never retained or used to train public foundation models.</div>
                </div>
              </div>
            </div>

            <div class=\\"pt-5 border-t border-[#F1F5F9] mt-6 flex items-center justify-between text-xs text-[#64748B]\\">
              <span>Compliance: ISO 27001 & GDPR</span>
              <span class=\\"font-mono text-[#008744]\\">100% Policy Adherence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

// Replace the old black section with newSectionRaw
content = content.slice(0, startIdx) + newSectionRaw.trim() + content.slice(endIdx);

// Also replace the remaining black CSS mentions in styles
content = content.replace(
  '.swiper-pagination .swiper-pagination-bullet {\\n      background: black !important;\\n      opacity: .5 !important;\\n    }',
  '.swiper-pagination .swiper-pagination-bullet {\\n      background: #6161FF !important;\\n      opacity: .4 !important;\\n    }'
);

content = content.replace(
  '.swiper-pagination .swiper-pagination-bullet-active {\\n      background: black !important;\\n      opacity: 1 !important;\\n    }',
  '.swiper-pagination .swiper-pagination-bullet-active {\\n      background: #FF00B7 !important;\\n      opacity: 1 !important;\\n    }'
);

content = content.replace(
  'background-color: #000;\\nborder: none;\\n}\\n.splide__arrow.custom-arrow-agents',
  'background-color: #6161FF;\\nborder: none;\\n}\\n.splide__arrow.custom-arrow-agents'
);

// Add the click handler for percipere-cap-tab
const tabHandlerHook = `
    // 6. Interactive Tab Switching for Percipere Core Capabilities
    const handleCapTabClick = (e: MouseEvent) => {
      const tabBtn = (e.target as HTMLElement).closest(".percipere-cap-tab") as HTMLButtonElement | null;
      if (!tabBtn) return;

      e.preventDefault();
      const tabId = tabBtn.getAttribute("data-tab-id");
      if (!tabId) return;

      const colorMap: Record<string, { border: string; indicator: string }> = {
        knowledge: { border: "#FF00B7", indicator: "#FF00B7" },
        actions: { border: "#00C875", indicator: "#00C875" },
        integrations: { border: "#0086C0", indicator: "#0086C0" },
        autonomy: { border: "#F59E0B", indicator: "#F59E0B" },
        guardrails: { border: "#8B5CF6", indicator: "#8B5CF6" },
      };

      const allTabs = container.querySelectorAll(".percipere-cap-tab");
      allTabs.forEach((tab) => {
        tab.classList.remove("active");
        (tab as HTMLElement).style.borderColor = "#E2E8F0";
        const desc = tab.querySelector(".cap-description") as HTMLElement | null;
        if (desc) desc.classList.add("hidden");
        const ind = tab.querySelector(".cap-indicator") as HTMLElement | null;
        if (ind) ind.style.backgroundColor = "transparent";
      });

      tabBtn.classList.add("active");
      const activeColor = colorMap[tabId] || { border: "#6161FF", indicator: "#6161FF" };
      tabBtn.style.borderColor = activeColor.border;
      const activeDesc = tabBtn.querySelector(".cap-description") as HTMLElement | null;
      if (activeDesc) activeDesc.classList.remove("hidden");
      const activeInd = tabBtn.querySelector(".cap-indicator") as HTMLElement | null;
      if (activeInd) activeInd.style.backgroundColor = activeColor.indicator;

      // Update right-hand panels
      const allPanels = container.querySelectorAll(".percipere-cap-panel");
      allPanels.forEach((panel) => {
        if (panel.getAttribute("data-panel-id") === tabId) {
          panel.classList.remove("hidden");
          panel.classList.add("flex");
        } else {
          panel.classList.add("hidden");
          panel.classList.remove("flex");
        }
      });
    };

    container.addEventListener("click", handleCapTabClick);
`;

// Insert the tab handler right before cleanup return statement
const cleanupMarker = 'return () => {\\n      container.removeEventListener("click", handleTabClick);';
if (content.includes(cleanupMarker)) {
  content = content.replace(
    cleanupMarker,
    tabHandlerHook + '\\n    return () => {\\n      container.removeEventListener("click", handleCapTabClick);\\n      container.removeEventListener("click", handleTabClick);'
  );
} else {
  // Try alternative whitespace
  const cleanupAlt = 'return () => {';
  const lastReturn = content.lastIndexOf(cleanupAlt);
  content = content.slice(0, lastReturn) + tabHandlerHook + '\n    ' + content.slice(lastReturn);
  // Also add removeEventListener
  content = content.replace(
    'container.removeEventListener("click", handleTabClick);',
    'container.removeEventListener("click", handleCapTabClick);\n      container.removeEventListener("click", handleTabClick);'
  );
}

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully replaced black Core capabilities section with interactive Percipere Clean Core section.');
