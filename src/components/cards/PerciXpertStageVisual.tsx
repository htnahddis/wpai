"use client";

import React from "react";
import {
  Sparkles,
  ArrowRight,
  Database,
  Cpu,
  Server,
  Layers,
  FileCode,
  Share2,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertTriangle,
  FolderTree,
  ChevronRight,
  Clock,
  Radio,
  Workflow,
  Search,
} from "lucide-react";
import { PerciXpertStage } from "@/data/percixpert.data";

interface PerciXpertStageVisualProps {
  visualType: PerciXpertStage["visualType"];
  stageNum: string;
}

export default function PerciXpertStageVisual({
  visualType,
}: PerciXpertStageVisualProps) {
  switch (visualType) {
    /* -----------------------------------------------------------------------
       STAGE 01: REQUIREMENTS CAPTURE
       Diagram: Unstructured Audio/Transcript -> Parsing Engine -> Verified Scope Nodes
    ----------------------------------------------------------------------- */
    case "requirements":
      return (
        <div className="bg-white rounded-2xl border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAEBED]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1B1466]" />
              <span className="font-semibold text-xs tracking-tight text-[#181B34]">
                Automated Ingestion Pipeline
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#676879]">Stream: Raw to Scope</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Input Sources */}
            <div className="md:col-span-4 space-y-2.5">
              <div className="p-3 rounded-xl bg-[#F8F8FA] border border-[#EAEBED]">
                <div className="flex items-center gap-2 mb-1.5 text-[#181B34] font-medium text-xs">
                  <Radio className="w-3.5 h-3.5 text-[#FF00B7]" />
                  <span>Workshop_Audio.wav</span>
                </div>
                {/* Waveform graphic */}
                <div className="flex items-end gap-1 h-5 my-1">
                  {[4, 12, 18, 8, 16, 20, 10, 14, 6, 18, 12, 16, 8, 14, 10, 18, 6, 12].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}px` }}
                      className="w-1 bg-[#1B1466]/40 rounded-full"
                    />
                  ))}
                </div>
                <span className="text-[10px] text-[#676879]">54 mins &bull; 14 speakers</span>
              </div>

              <div className="p-3 rounded-xl bg-[#F8F8FA] border border-[#EAEBED] text-xs">
                <div className="flex items-center gap-2 mb-1 text-[#181B34] font-medium">
                  <FileText className="w-3.5 h-3.5 text-[#0073EA]" />
                  <span>Functional_Notes.md</span>
                </div>
                <p className="text-[11px] text-[#676879] truncate">
                  &ldquo;Automate intercompany tax &amp; goods receipt...&rdquo;
                </p>
              </div>
            </div>

            {/* Transform Center Connector */}
            <div className="hidden md:flex md:col-span-2 flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#1B1466] text-white flex items-center justify-center shadow-sm">
                <Workflow className="w-5 h-5 text-[#00B7FF]" />
              </div>
              <span className="text-[10px] font-medium text-[#676879] mt-1.5">Parsing</span>
            </div>

            {/* Structured Scope Nodes Output */}
            <div className="md:col-span-6 space-y-2">
              <div className="p-2.5 rounded-lg border border-[#00CA72]/40 bg-[#F4FCF7] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#181B34] block">
                    FICO-204 &bull; Intercompany Tax Rule
                  </span>
                  <span className="text-[10px] text-[#676879]">Mapped to Best Practice 1P9</span>
                </div>
                <span className="text-[10px] font-semibold text-[#00CA72] bg-white px-2 py-0.5 rounded border border-[#00CA72]/30">
                  Verified
                </span>
              </div>

              <div className="p-2.5 rounded-lg border border-[#0073EA]/40 bg-[#EFF5FD] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#181B34] block">
                    MM-081 &bull; Consignment Goods Receipt
                  </span>
                  <span className="text-[10px] text-[#676879]">Pre-linked to WMS connector</span>
                </div>
                <span className="text-[10px] font-semibold text-[#0073EA] bg-white px-2 py-0.5 rounded border border-[#0073EA]/30">
                  Standard
                </span>
              </div>

              <div className="p-2.5 rounded-lg border border-purple-200 bg-[#F9F6FE] flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#181B34] block">
                    SD-014 &bull; Tiered Discount Matrix
                  </span>
                  <span className="text-[10px] text-[#676879]">Clean Core Extension</span>
                </div>
                <span className="text-[10px] font-semibold text-purple-700 bg-white px-2 py-0.5 rounded border border-purple-200">
                  Approved
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    /* -----------------------------------------------------------------------
       STAGE 02: DISCOVERY & SHADOW IT
       Diagram: System Landscape Topology & Shadow IT Node Graph
    ----------------------------------------------------------------------- */
    case "discovery":
      return (
        <div className="bg-white rounded-2xl border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAEBED]">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-[#FF00B7]" />
              <span className="font-semibold text-xs tracking-tight text-[#181B34]">
                Enterprise Landscape Topology
              </span>
            </div>
            <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              34 Shadow Spreadsheets Surfaced
            </span>
          </div>

          {/* Network Graph Schematics */}
          <div className="relative p-3 bg-[#F9FAFC] rounded-xl border border-[#EAEBED]">
            {/* Core Node */}
            <div className="max-w-[200px] mx-auto text-center p-3 rounded-xl bg-[#1B1466] text-white shadow-md mb-6">
              <span className="text-[10px] font-mono text-[#00B7FF] block">SYSTEM CORE</span>
              <span className="text-xs font-semibold block">Enterprise ERP Landscape</span>
            </div>

            {/* Radiating Topology Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Node 1: Discovered Shadow Macro */}
              <div className="p-3 rounded-lg bg-white border border-red-200 shadow-sm">
                <div className="flex items-center gap-1.5 text-red-600 font-semibold text-[11px] mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Shadow Macro</span>
                </div>
                <div className="text-xs font-medium text-[#181B34] truncate">
                  Pricing_EMEA.xlsm
                </div>
                <p className="text-[10px] text-[#676879] mt-1">
                  18 offline users &bull; Cataloged &amp; mapped
                </p>
              </div>

              {/* Node 2: Custom Z-Objects */}
              <div className="p-3 rounded-lg bg-white border border-amber-200 shadow-sm">
                <div className="flex items-center gap-1.5 text-amber-600 font-semibold text-[11px] mb-1">
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Custom Z-Tables</span>
                </div>
                <div className="text-xs font-medium text-[#181B34] truncate">
                  1,420 Legacy Code Objects
                </div>
                <p className="text-[10px] text-[#676879] mt-1">
                  82% replaced by standard features
                </p>
              </div>

              {/* Node 3: Direct DB Links */}
              <div className="p-3 rounded-lg bg-white border border-blue-200 shadow-sm">
                <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-[11px] mb-1">
                  <Server className="w-3.5 h-3.5" />
                  <span>Legacy ODBC Links</span>
                </div>
                <div className="text-xs font-medium text-[#181B34] truncate">
                  8 Direct SQL Interfaces
                </div>
                <p className="text-[10px] text-[#676879] mt-1">
                  Routed to secure OData APIs
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EAEBED] flex items-center justify-between text-[11px] text-[#676879]">
              <span>Zero hidden dependencies left unmapped</span>
              <span className="font-semibold text-[#00CA72]">&bull; 100% Landscape Coverage</span>
            </div>
          </div>
        </div>
      );

    /* -----------------------------------------------------------------------
       STAGE 03: STANDARD ERP FIT
       Diagram: 3-Tier Clean Core Extensibility Framework
    ----------------------------------------------------------------------- */
    case "standard_fit":
      return (
        <div className="bg-white rounded-2xl border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAEBED]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0073EA]" />
              <span className="font-semibold text-xs tracking-tight text-[#181B34]">
                Clean Core 3-Tier Architecture
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#00CA72] font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              86% Standard Fit
            </span>
          </div>

          {/* 3 Tier Architectural Blocks */}
          <div className="space-y-3">
            {/* Tier 1 */}
            <div className="p-3.5 rounded-xl bg-[#F4FCF7] border border-[#00CA72]/50 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00CA72]" />
                  <span className="text-xs font-semibold text-[#181B34]">
                    Tier 1 &bull; Standard Cloud Core
                  </span>
                </div>
                <p className="text-[11px] text-[#676879]">
                  Best Practice processes &bull; Automatic seamless cloud upgrades
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-[#00CA72] bg-white px-2.5 py-1 rounded-md border border-[#00CA72]/30">
                86% of Scope
              </span>
            </div>

            {/* Tier 2 */}
            <div className="p-3.5 rounded-xl bg-[#EFF5FD] border border-[#0073EA]/40 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0073EA]" />
                  <span className="text-xs font-semibold text-[#181B34]">
                    Tier 2 &bull; On-Stack Developer Extensibility
                  </span>
                </div>
                <p className="text-[11px] text-[#676879]">
                  RAP / CAP models on released standard public APIs only
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-[#0073EA] bg-white px-2.5 py-1 rounded-md border border-[#0073EA]/30">
                10% of Scope
              </span>
            </div>

            {/* Tier 3 */}
            <div className="p-3.5 rounded-xl bg-[#F9F6FE] border border-purple-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9D50DD]" />
                  <span className="text-xs font-semibold text-[#181B34]">
                    Tier 3 &bull; Side-by-Side BTP Extensions
                  </span>
                </div>
                <p className="text-[11px] text-[#676879]">
                  Decoupled microservices &bull; Zero technical debt in core
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-purple-700 bg-white px-2.5 py-1 rounded-md border border-purple-200">
                4% of Scope
              </span>
            </div>
          </div>
        </div>
      );

    /* -----------------------------------------------------------------------
       STAGE 04: AUTOMATED DATA MIGRATION
       Diagram: Field-Level ETL Transformation & Validation Pipeline
    ----------------------------------------------------------------------- */
    case "data_migration":
      return (
        <div className="bg-white rounded-2xl border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAEBED]">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#FF00B7]" />
              <span className="font-semibold text-xs tracking-tight text-[#181B34]">
                ETL Field Mapping &amp; Reconciliation Engine
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#00CA72] font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              0 Schema Errors
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center p-3 bg-[#F9FAFC] rounded-xl border border-[#EAEBED]">
            {/* Source Legacy Schema */}
            <div className="sm:col-span-5 p-3 rounded-lg bg-white border border-[#EAEBED] space-y-2">
              <span className="text-[10px] font-mono font-semibold text-[#676879] block">
                LEGACY EXTRACTS (ECC 6.0)
              </span>
              <div className="text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-[#181B34] bg-[#F8F8FA] p-1.5 rounded">
                  <span>KUNNR_01</span>
                  <span className="text-[#676879]">VARCHAR(10)</span>
                </div>
                <div className="flex justify-between text-[#181B34] bg-[#F8F8FA] p-1.5 rounded">
                  <span>MATNR_OLD</span>
                  <span className="text-[#676879]">CHAR(18)</span>
                </div>
                <div className="flex justify-between text-[#181B34] bg-[#F8F8FA] p-1.5 rounded">
                  <span>BUKRS_LEGACY</span>
                  <span className="text-[#676879]">NUMC(4)</span>
                </div>
              </div>
            </div>

            {/* Transform Arrow */}
            <div className="hidden sm:flex sm:col-span-2 flex-col items-center justify-center text-[#676879]">
              <ArrowRight className="w-5 h-5 text-[#1B1466]" />
              <span className="text-[9px] font-mono mt-1">AI Cleansing</span>
            </div>

            {/* Target Cloud ERP Schema */}
            <div className="sm:col-span-5 p-3 rounded-lg bg-white border border-[#EAEBED] space-y-2">
              <span className="text-[10px] font-mono font-semibold text-[#0073EA] block">
                TARGET CLOUD ERP OBJECTS
              </span>
              <div className="text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-[#181B34] bg-[#EFF5FD] p-1.5 rounded">
                  <span>BusinessPartner_UUID</span>
                  <span className="text-[#00CA72] font-bold">&check;</span>
                </div>
                <div className="flex justify-between text-[#181B34] bg-[#EFF5FD] p-1.5 rounded">
                  <span>ProductMaster_40</span>
                  <span className="text-[#00CA72] font-bold">&check;</span>
                </div>
                <div className="flex justify-between text-[#181B34] bg-[#EFF5FD] p-1.5 rounded">
                  <span>CompanyCode_Entity</span>
                  <span className="text-[#00CA72] font-bold">&check;</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3.5 flex items-center justify-between text-[11px] text-[#676879]">
            <span>142,000 legacy records reconciled with zero manual typing</span>
            <span className="font-semibold text-[#181B34]">Auto-reconciled &check;</span>
          </div>
        </div>
      );

    /* -----------------------------------------------------------------------
       STAGE 05: INTEGRATIONS & APIS
       Diagram: Hub-and-Spoke Enterprise Connector Mesh
    ----------------------------------------------------------------------- */
    case "integrations":
      return (
        <div className="bg-white rounded-2xl border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAEBED]">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00B7FF]" />
              <span className="font-semibold text-xs tracking-tight text-[#181B34]">
                Enterprise Integration &amp; Mock Gateway
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#00CA72] font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Contract Verified
            </span>
          </div>

          {/* Hub and Spoke Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-[#F8F8FA] border border-[#EAEBED] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#181B34]">Salesforce CRM</span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">REST 200 OK</span>
              </div>
              <p className="text-[11px] text-[#676879]">Bi-directional order-to-cash contract verified</p>
            </div>

            <div className="p-3 rounded-xl bg-[#F8F8FA] border border-[#EAEBED] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#181B34]">ServiceNow ITSM</span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">OData v4</span>
              </div>
              <p className="text-[11px] text-[#676879]">Automated incident &amp; change management hooks</p>
            </div>

            <div className="p-3 rounded-xl bg-[#F8F8FA] border border-[#EAEBED] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#181B34]">BTP Integration Suite</span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Event Mesh</span>
              </div>
              <p className="text-[11px] text-[#676879]">Sub-10ms queue processing with contract mocks</p>
            </div>

            <div className="p-3 rounded-xl bg-[#F8F8FA] border border-[#EAEBED] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#181B34]">WMS Warehouse API</span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Kafka Event</span>
              </div>
              <p className="text-[11px] text-[#676879]">Goods receipt payload pre-tested before dev</p>
            </div>
          </div>

          <div className="mt-3.5 pt-3 border-t border-[#EAEBED] flex items-center justify-between text-[11px] text-[#676879]">
            <span>200+ enterprise connectors ready for instant deployment</span>
            <span className="font-semibold text-[#0073EA]">&bull; Zero Interface Failures</span>
          </div>
        </div>
      );

    /* -----------------------------------------------------------------------
       STAGE 06: AUTO DIGITAL BLUEPRINT
       Diagram: Living Architecture Blueprint & Process Hierarchy Tree
    ----------------------------------------------------------------------- */
    case "blueprint":
      return (
        <div className="bg-white rounded-2xl border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAEBED]">
            <div className="flex items-center gap-2">
              <FolderTree className="w-4 h-4 text-[#FF00B7]" />
              <span className="font-semibold text-xs tracking-tight text-[#181B34]">
                Living Digital Architecture Twin
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#676879]">v3.2 &bull; Synced with Live Config</span>
          </div>

          {/* Process Hierarchy Tree */}
          <div className="p-3 bg-[#F9FAFC] rounded-xl border border-[#EAEBED] space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-[#EAEBED]">
              <div className="flex items-center gap-2 text-[#181B34]">
                <ChevronRight className="w-3.5 h-3.5 text-[#0073EA]" />
                <span className="font-sans font-medium">L1: Record to Report (Finance)</span>
              </div>
              <span className="text-[10px] text-[#00CA72] font-semibold">142 Processes Signed</span>
            </div>

            <div className="ml-4 flex items-center justify-between p-2 bg-white rounded-lg border border-[#EAEBED]">
              <div className="flex items-center gap-2 text-[#181B34]">
                <ChevronRight className="w-3.5 h-3.5 text-[#0073EA]" />
                <span className="font-sans font-medium">L2: Automated Intercompany Clearing</span>
              </div>
              <span className="text-[10px] text-[#00CA72] font-semibold">Clean Core &check;</span>
            </div>

            <div className="ml-8 flex items-center justify-between p-2 bg-white rounded-lg border border-purple-200 bg-purple-50/40">
              <div className="flex items-center gap-2 text-[#181B34]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF00B7]" />
                <span className="font-sans font-medium">L3: Multi-Jurisdiction Tax Engine</span>
              </div>
              <span className="text-[10px] text-purple-700 font-semibold font-mono">Audited &check;</span>
            </div>
          </div>

          <div className="mt-3.5 flex items-center justify-between text-[11px] text-[#676879]">
            <span>Replaces 400-page static Word docs with real-time digital architecture</span>
            <span className="font-semibold text-[#0073EA]">One-Click Audit Export</span>
          </div>
        </div>
      );

    /* -----------------------------------------------------------------------
       STAGE 07: ZERO-FRICTION SUPPORT HANDOVER
       Diagram: Traceability Knowledge Graph linking Intent to Support Resolution
    ----------------------------------------------------------------------- */
    case "handover":
      return (
        <div className="bg-white rounded-2xl border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAEBED]">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#1B1466]" />
              <span className="font-semibold text-xs tracking-tight text-[#181B34]">
                Full-Lifecycle Traceability Graph
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#00CA72] font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              100% Knowledge Retained
            </span>
          </div>

          {/* Trace Graph Steps */}
          <div className="relative p-3 bg-[#F9FAFC] rounded-xl border border-[#EAEBED] space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-6 h-6 rounded-full bg-[#1B1466] text-white flex items-center justify-center font-bold text-[10px]">
                01
              </span>
              <div className="flex-1 p-2 bg-white rounded border border-[#EAEBED]">
                <span className="font-semibold text-[#181B34]">Workshop Recording (Sep 14)</span>
                <span className="text-[10px] text-[#676879] block">European pricing rule decision recorded</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="w-6 h-6 rounded-full bg-[#0073EA] text-white flex items-center justify-center font-bold text-[10px]">
                02
              </span>
              <div className="flex-1 p-2 bg-white rounded border border-[#EAEBED]">
                <span className="font-semibold text-[#181B34]">Scope Item MM-081 &amp; Blueprint Twin</span>
                <span className="text-[10px] text-[#676879] block">Approved by VP Supply Chain with test evidence</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="w-6 h-6 rounded-full bg-[#00CA72] text-white flex items-center justify-center font-bold text-[10px]">
                03
              </span>
              <div className="flex-1 p-2 bg-[#F4FCF7] rounded border border-[#00CA72]/40">
                <span className="font-semibold text-[#181B34]">Instant Support Troubleshooting</span>
                <span className="text-[10px] text-[#676879] block">Any ticket traced back to original rationale in 2 seconds</span>
              </div>
            </div>
          </div>

          <div className="mt-3.5 flex items-center justify-between text-[11px] text-[#676879]">
            <span>Zero tribal knowledge lost when external implementation consultants leave</span>
            <span className="font-semibold text-[#181B34]">3-Day Handover vs 8 Weeks</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
