"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
          <footer className="bg-white border-t border-[#EAEAEA] text-[#191923] py-16">
            <div className="max-w-[1240px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#EAEAEA]">
                {/* Brand Info */}
                <div className="md:col-span-2">
                      <Link href="/" className="inline-flex items-baseline gap-1 group">
                        <span className="font-serif text-2xl font-bold tracking-tight text-[#191923]">
                          percipere
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E85D04]"></span>
                      </Link>
                        <p className="text-xs text-[#64676D] mt-3 max-w-sm leading-relaxed">
                          AI system of action for enterprise SAP. Grounded in business process context, system data, and operational reality.
                        </p>
                          <div className="mt-4 text-[11px] font-mono text-[#8A8D93]">
                            SAP Gold Partner • ISO 27000:2022 Certified
                          </div>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#191923] mb-3">
                              Suites
                            </h5>
                              <ul className="space-y-2 text-xs">
                                <li>
                                    <Link href="/percixpert" className="text-[#64676D] hover:text-[#191923] transition-colors">
                                      PerciXpert
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/perciserve-support-suite" className="text-[#64676D] hover:text-[#191923] transition-colors">
                                      PerciServe
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/percihub-business-suite" className="text-[#64676D] hover:text-[#191923] transition-colors">
                                      PerciHub
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/what-we-do/intelligence-enterprise-offerings/xpa-epm" className="text-[#64676D] hover:text-[#191923] transition-colors">
                                      xP&A Planning
                                    </Link>
                                </li>
                              </ul>
                            </div>

                            {/* Intelligence */}
                            <div>
                                <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#191923] mb-3">
                                  Intelligence
                                </h5>
                                  <ul className="space-y-2 text-xs">
                                    <li>
                                        <Link href="/sap-business-ai" className="text-[#64676D] hover:text-[#191923] transition-colors">
                                          SAP Business AI
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-we-do/intelligence-enterprise-offerings/ai-acceleration" className="text-[#64676D] hover:text-[#191923] transition-colors">
                                          AI Acceleration
                                        </Link>
                                    </li>
                                    <li>
                                      <span className="text-[#8A8D93]">FUTUROOT Mining</span>
                                    </li>
                                    <li>
                                      <span className="text-[#8A8D93]">PerciPlan SAC</span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Hubs */}
                                <div>
                                    <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#191923] mb-3">
                                      Locations
                                    </h5>
                                    <p className="text-xs text-[#64676D] leading-relaxed">
                                      London • Mumbai<br />
                                      Singapore • Dubai
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Bar */}
                            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8D93] gap-4">
                              <p>© {new Date().getFullYear()} Percipere. All rights reserved.</p>
                              <div className="flex items-center gap-6">
                                <span>Data Sovereignty Guaranteed</span>
                                <span>Private Perimeter</span>
                              </div>
                            </div>
                        </div>
                      </footer>
                      );
}
