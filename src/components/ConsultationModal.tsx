"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultTopic = "SAP Implementation & Advisory",
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: defaultTopic,
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-preview border border-[#E9E9EF] p-7 md:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#777783] hover:text-[#191923] rounded-lg hover:bg-[#F8F8FA] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-[#E6F8FF] text-[#00B7FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-sans text-2xl text-[#191923] font-medium mb-2">
              Consultation Requested
            </h3>
            <p className="text-sm text-[#777783] max-w-sm mx-auto mb-6">
              Thank you for reaching out. One of our enterprise SAP &amp; AI directors will contact you within one business day with customized insights.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#1B1466] hover:bg-[#140F4D] text-white text-sm font-medium rounded-full transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block px-2.5 py-1 text-xs font-medium text-[#1B1466] bg-[#F0EFFF] border border-[#1B1466]/20 rounded-full mb-2">
                Executive Advisory
              </span>
              <h2 className="font-sans text-2xl md:text-3xl font-normal text-[#191923] tracking-tight">
                Book a Consultation
              </h2>
              <p className="text-sm text-[#777783] mt-1">
                Speak directly with an enterprise SAP architect and solution lead.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#191923] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8FA] border border-[#E9E9EF] rounded-xl focus:outline-none focus:border-[#00B7FF] focus:bg-white transition-all text-[#191923]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#191923] mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8FA] border border-[#E9E9EF] rounded-xl focus:outline-none focus:border-[#00B7FF] focus:bg-white transition-all text-[#191923]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#191923] mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8FA] border border-[#E9E9EF] rounded-xl focus:outline-none focus:border-[#00B7FF] focus:bg-white transition-all text-[#191923]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#191923] mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8FA] border border-[#E9E9EF] rounded-xl focus:outline-none focus:border-[#00B7FF] focus:bg-white transition-all text-[#191923]"
                  >
                    <option value="PerciXpert SAP Delivery">PerciXpert  SAP Implementation</option>
                    <option value="PerciServe Support Suite">PerciServe  Support &amp; AMS</option>
                    <option value="PerciHub AI Agents">PerciHub  Business AI Agents</option>
                    <option value="xP&amp;A &amp; EPM">xP&amp;A &amp; EPM Planning</option>
                    <option value="SAP Business AI &amp; Joule">SAP Business AI &amp; Joule</option>
                    <option value="Enterprise AI Acceleration">AI Acceleration &amp; PerciSuite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#191923] mb-1.5">
                  Project Notes / Context
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current SAP landscape or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8F8FA] border border-[#E9E9EF] rounded-xl focus:outline-none focus:border-[#00B7FF] focus:bg-white transition-all text-[#191923] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1B1466] text-white font-medium text-sm rounded-full hover:bg-[#140F4D] transition-colors shadow-subtle"
                >
                  Confirm Consultation Request
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-center text-[#777783] mt-2.5">
                  Confidential advisory • ISO 27001:2022 security governance guaranteed.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
