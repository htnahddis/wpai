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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101214]/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-elevated border border-[#E8E8E8] p-7 md:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-secondary hover:text-primary rounded-lg hover:bg-surface transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-blue-50 text-percipere-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-primary font-medium mb-2">
              Consultation Requested
            </h3>
            <p className="text-sm text-secondary max-w-sm mx-auto mb-6">
              Thank you for reaching out. One of our enterprise SAP & AI directors will contact you within one business day with customized insights.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block px-2.5 py-1 text-xs font-medium text-percipere-blue bg-blue-50 rounded-full mb-2">
                Executive Advisory
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary tracking-tight">
                Book a Consultation
              </h2>
              <p className="text-sm text-secondary mt-1">
                Speak directly with an enterprise SAP architect and solution lead.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-surface border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-percipere-blue focus:bg-white transition-all text-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-surface border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-percipere-blue focus:bg-white transition-all text-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-surface border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-percipere-blue focus:bg-white transition-all text-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-surface border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-percipere-blue focus:bg-white transition-all text-primary"
                  >
                    <option value="PerciXpert SAP Delivery">PerciXpert — SAP Implementation</option>
                    <option value="PerciServe Support Suite">PerciServe — Support & AMS</option>
                    <option value="PerciHub AI Agents">PerciHub — Business AI Agents</option>
                    <option value="xP&A & EPM">xP&A & EPM Planning</option>
                    <option value="SAP Business AI & Joule">SAP Business AI & Joule</option>
                    <option value="Enterprise AI Acceleration">AI Acceleration & PerciSuite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
                  Project Notes / Context
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current SAP landscape or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-surface border border-[#E8E8E8] rounded-lg focus:outline-none focus:border-percipere-blue focus:bg-white transition-all text-primary resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0D5CE5] text-white font-medium text-sm rounded-lg hover:bg-[#0B4FBA] transition-colors shadow-subtle"
                >
                  Confirm Consultation Request
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-center text-muted mt-2.5">
                  Confidential advisory • ISO 27000:2022 security governance guaranteed.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
