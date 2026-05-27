"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, ArrowRight, MessageSquare, ShieldCheck, Zap, Trophy, Award, 
  User, Brain, Compass, Code2, Workflow, GitMerge, X, Check, Bot, 
  TrendingUp, MessageCircle, Cpu, GitBranch, BarChart3, Headphones, 
  Target, Cog, LayoutDashboard, ClipboardList, Gauge, BarChart4 
} from "lucide-react";

export default function AIPage() {
  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="blob w-[500px] h-[400px] top-0 left-0" style={{ background: "rgba(249,115,22,0.06)" }}></div>
        <div className="blob w-[500px] h-[400px] top-0 right-0" style={{ background: "rgba(139,92,246,0.06)" }}></div>
        <div className="ai-container relative pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-500 shadow-sm">
              <Sparkles className="w-3 h-3 text-orange-400" /> AI Transformation for Businesses
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-slate-900">
              Is Your Company<br /><span className="text-gradient-brand">AI-Ready?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-500">
              We don't just talk AI — we build, deploy, and scale real AI systems that solve business problems.
              <span className="font-semibold text-slate-800"> Human + AI = Powerful.</span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="mailto:hello@macappstudio.com" className="inline-flex items-center gap-2 h-12 rounded-full bg-gradient-primary px-7 text-base font-semibold text-white shadow-glow hover:opacity-90 transition-opacity">
                Get Proposal in 48 Hrs <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:hello@macappstudio.com" className="inline-flex items-center gap-2 h-12 rounded-full border-2 border-slate-200 bg-white px-7 text-base font-semibold text-slate-700 hover:border-slate-400 transition-colors">
                <MessageSquare className="w-4 h-4" /> Talk to AI Team
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Engineering-first</span>
              <span className="inline-flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-500" /> 48-hour proposal</span>
              <span className="inline-flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-violet-500" /> Built since 2011</span>
            </div>
          </div>
          
          {/* We do not have hero-team-DocmObeG.jpg, using placeholder styled box */}
          <div className="relative mx-auto mt-12 max-w-6xl animate-scale-in">
            <div className="absolute -inset-6 rounded-[2rem] opacity-10 blur-3xl bg-gradient-primary"></div>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-premium ring-1 ring-slate-200 aspect-[21/9] flex items-end">
              <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-6 md:p-10 z-10">
                <div className="grid grid-cols-3 gap-6 text-white text-center sm:text-left">
                  <div><p className="text-3xl sm:text-4xl font-bold">13+</p><p className="text-sm opacity-80 mt-1">Years building</p></div>
                  <div><p className="text-3xl sm:text-4xl font-bold">200+</p><p className="text-sm opacity-80 mt-1">AI systems deployed</p></div>
                  <div><p className="text-3xl sm:text-4xl font-bold">48hr</p><p className="text-sm opacity-80 mt-1">Proposal delivery</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="section">
        <div className="ai-container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-600 bg-[#fef3c7]">
                <Sparkles className="w-3 h-3" /> Since 2011
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Our Journey</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
                From writing our first lines of code in 2011 to building intelligent systems today — <span className="font-semibold text-slate-800">great engineering execution builds great companies.</span>
              </p>
            </div>
            <div className="relative mt-12">
              <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent md:block"></div>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="relative text-center"><div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-white shadow-glow">1</div><p className="mt-3 text-2xl font-bold text-slate-900">2011</p><p className="mt-1 text-sm text-slate-500">First lines of code</p></div>
                <div className="relative text-center"><div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-white shadow-glow">2</div><p className="mt-3 text-2xl font-bold text-slate-900">2015</p><p className="mt-1 text-sm text-slate-500">Intel recognition</p></div>
                <div className="relative text-center"><div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-white shadow-glow">3</div><p className="mt-3 text-2xl font-bold text-slate-900">2019</p><p className="mt-1 text-sm text-slate-500">Enterprise scale</p></div>
                <div className="relative text-center"><div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-white shadow-glow">4</div><p className="mt-3 text-2xl font-bold text-slate-900">2024</p><p className="mt-1 text-sm text-slate-500">AI-first systems</p></div>
              </div>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm card-hover">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-amber-500 bg-[#fef3c7]"><Trophy className="w-5 h-5" /></div>
                <div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Intel (USA)</p><p className="mt-0.5 text-sm font-semibold text-slate-800">World's Most Valuable Developers</p></div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm card-hover">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-violet-500 bg-[#f3effe]"><Award className="w-5 h-5" /></div>
                <div><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Intel</p><p className="mt-0.5 text-sm font-semibold text-slate-800">Black Belt Program</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="section section-muted">
        <div className="ai-container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex items-center justify-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100"><User className="w-6 h-6 text-slate-600" /></div>
              <div className="h-px w-8 bg-gradient-primary"></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow"><Brain className="w-6 h-6 text-white" /></div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Our Vision</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              "AI doesn't replace humans.<br />It <span className="text-gradient-primary">amplifies</span> them."
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-500">The real power lies in Human + AI collaboration — where intelligence meets experience and automation meets decision-making.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="ai-container">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 mb-3">What we deliver</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">AI Transformation Services</h2>
            <p className="mt-4 text-slate-500">We help companies move from manual → automated → intelligent</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm card-hover">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-orange-500 bg-[#fff2e8]"><Compass className="w-6 h-6" /></div>
                <div><h3 className="text-xl font-semibold text-slate-900">AI Strategy &amp; Readiness</h3><ul className="mt-3 space-y-2"><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>AI maturity audit</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>Use case discovery</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>Roadmap &amp; ROI modeling</li></ul></div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm card-hover">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-violet-500 bg-[#f3effe]"><Code2 className="w-6 h-6" /></div>
                <div><h3 className="text-xl font-semibold text-slate-900">AI Development</h3><ul className="mt-3 space-y-2"><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>Custom LLM applications</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>Vision &amp; NLP systems</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>Production-grade ML models</li></ul></div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm card-hover">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-teal-600 bg-[#e6f7f5]"><Workflow className="w-6 h-6" /></div>
                <div><h3 className="text-xl font-semibold text-slate-900">Automation Systems</h3><ul className="mt-3 space-y-2"><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>End-to-end workflow automation</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>Document &amp; email automation</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>RPA + AI hybrids</li></ul></div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm card-hover">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-rose-500 bg-[#ffeef2]"><GitMerge className="w-6 h-6" /></div>
                <div><h3 className="text-xl font-semibold text-slate-900">AI Integration</h3><ul className="mt-3 space-y-2"><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>CRM, ERP, WhatsApp &amp; APIs</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>Existing stack augmentation</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>Secure data pipelines</li></ul></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIZZA */}
      <section id="pizza" className="section section-muted">
        <div className="ai-container">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-200 mb-3">The MacAppStudio Way</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Build AI Like Ordering a Pizza</h2>
            <p className="mt-4 text-slate-500">Simple. Fast. Customizable.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm card-hover">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#ffeef2] flex items-center justify-center text-rose-300">
                <Workflow className="w-20 h-20 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-rose-500">01</span>
              </div>
              <div className="p-6"><h3 className="text-lg font-semibold text-slate-900">Choose Your Base</h3><ul className="mt-4 space-y-2"><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>AI Chatbot</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>Automation System</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0"></span>Internal AI Tool</li></ul></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm card-hover">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#fff2e8] flex items-center justify-center text-orange-300">
                <GitMerge className="w-20 h-20 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-orange-500">02</span>
              </div>
              <div className="p-6"><h3 className="text-lg font-semibold text-slate-900">Add Toppings</h3><ul className="mt-4 space-y-2"><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>WhatsApp Integration</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>CRM Sync</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>AI Agents</li></ul></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm card-hover">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e6f7f5] flex items-center justify-center text-teal-300">
                <Cog className="w-20 h-20 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-teal-600">03</span>
              </div>
              <div className="p-6"><h3 className="text-lg font-semibold text-slate-900">Customize</h3><ul className="mt-4 space-y-2"><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>Your workflows</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>Your data</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>Industry-specific logic</li></ul></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm card-hover">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f3effe] flex items-center justify-center text-violet-300">
                <Zap className="w-20 h-20 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-violet-500">04</span>
              </div>
              <div className="p-6"><h3 className="text-lg font-semibold text-slate-900">Launch</h3><ul className="mt-4 space-y-2"><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>Build</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>Test &amp; Deploy</li><li className="flex items-start gap-2 text-sm text-slate-500"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>Ready for real users</li></ul></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="section">
        <div className="ai-container">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 mb-3">Why MacAppStudio</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Built different. By engineers.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500"><X className="w-5 h-5" /></div><h3 className="text-xl font-semibold text-slate-900">What Failed Elsewhere</h3></div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm"><X className="w-4 h-4 flex-shrink-0 text-red-400" /><span className="text-slate-600">Over-promised automation</span></li>
                <li className="flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm"><X className="w-4 h-4 flex-shrink-0 text-red-400" /><span className="text-slate-600">Lack of deep engineering</span></li>
                <li className="flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm"><X className="w-4 h-4 flex-shrink-0 text-red-400" /><span className="text-slate-600">Black-box delivery</span></li>
                <li className="flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm"><X className="w-4 h-4 flex-shrink-0 text-red-400" /><span className="text-slate-600">Limited customization</span></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white"><Check className="w-5 h-5" /></div><h3 className="text-xl font-semibold text-slate-900">MacAppStudio Approach</h3></div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm bg-[#f0fdf4]"><Check className="w-4 h-4 flex-shrink-0 text-emerald-500" /><span className="font-medium text-slate-700">Engineering-first mindset</span></li>
                <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm bg-[#f0fdf4]"><Check className="w-4 h-4 flex-shrink-0 text-emerald-500" /><span className="font-medium text-slate-700">Transparent development</span></li>
                <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm bg-[#f0fdf4]"><Check className="w-4 h-4 flex-shrink-0 text-emerald-500" /><span className="font-medium text-slate-700">Custom-built solutions</span></li>
                <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm bg-[#f0fdf4]"><Check className="w-4 h-4 flex-shrink-0 text-emerald-500" /><span className="font-medium text-slate-700">Scalable architecture</span></li>
                <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm bg-[#f0fdf4]"><Check className="w-4 h-4 flex-shrink-0 text-emerald-500" /><span className="font-medium text-slate-700">Real AI, not just wrappers</span></li>
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-semibold leading-relaxed text-slate-800">
            We don't sell AI as a shortcut.<br /><span className="text-gradient-brand">We build AI as a business advantage.</span>
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="section">
        <div className="ai-container">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 mb-3">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">What We Do</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm card-hover"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-violet-500 bg-[#f3effe]"><Bot className="w-5 h-5" /></div><h3 className="text-base font-semibold text-slate-900">AI Agents &amp; Automation</h3></div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm card-hover"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-orange-500 bg-[#fff2e8]"><TrendingUp className="w-5 h-5" /></div><h3 className="text-base font-semibold text-slate-900">Predictive Analytics</h3></div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm card-hover"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-teal-600 bg-[#e6f7f5]"><MessageCircle className="w-5 h-5" /></div><h3 className="text-base font-semibold text-slate-900">Chatbots &amp; Assistants</h3></div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm card-hover"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-rose-500 bg-[#ffeef2]"><Cpu className="w-5 h-5" /></div><h3 className="text-base font-semibold text-slate-900">Machine Learning Models</h3></div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm card-hover"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-amber-500 bg-[#fef3c7]"><GitBranch className="w-5 h-5" /></div><h3 className="text-base font-semibold text-slate-900">Workflow Automation</h3></div>
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm card-hover"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-blue-500 bg-[#eff6ff]"><BarChart3 className="w-5 h-5" /></div><h3 className="text-base font-semibold text-slate-900">BI Dashboards</h3></div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="section section-muted">
        <div className="ai-container">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-200 mb-3">In production</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Real Business Use Cases</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm card-hover"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-orange-500 bg-[#fff2e8]"><Headphones className="w-5 h-5" /></div><h3 className="text-lg font-semibold text-slate-900">AI Customer Support</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">24/7 WhatsApp bots that resolve 80% of queries</p></div>
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm card-hover"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-rose-500 bg-[#ffeef2]"><Target className="w-5 h-5" /></div><h3 className="text-lg font-semibold text-slate-900">Sales Intelligence</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">Smart lead scoring &amp; pipeline insights</p></div>
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm card-hover"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-teal-600 bg-[#e6f7f5]"><Cog className="w-5 h-5" /></div><h3 className="text-lg font-semibold text-slate-900">Internal Task Automation</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">Reclaim hours of repetitive ops every day</p></div>
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm card-hover"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-violet-500 bg-[#f3effe]"><LayoutDashboard className="w-5 h-5" /></div><h3 className="text-lg font-semibold text-slate-900">CXO Dashboards</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">Real-time KPIs from every system in one view</p></div>
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm card-hover"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-amber-500 bg-[#fef3c7]"><ClipboardList className="w-5 h-5" /></div><h3 className="text-lg font-semibold text-slate-900">Operations Management</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">End-to-end workflow visibility &amp; control</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section">
        <div className="ai-container">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-10 text-center shadow-premium md:p-16">
            <div className="absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-3xl bg-gradient-primary"></div>
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Let's talk</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">Let's Make Your Business <span className="text-gradient-primary">AI-Ready</span></h2>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="mailto:hello@macappstudio.com" className="inline-flex items-center gap-2 h-12 rounded-full bg-gradient-primary px-7 text-base font-semibold text-white shadow-glow hover:opacity-90 transition-opacity">Get Proposal in 48 Hrs <ArrowRight className="w-4 h-4" /></a>
                <a href="mailto:hello@macappstudio.com" className="inline-flex items-center gap-2 h-12 rounded-full border-2 border-slate-200 bg-white px-7 text-base font-semibold text-slate-700 hover:border-slate-400 transition-colors"><MessageSquare className="w-4 h-4" />Talk to AI Team</a>
              </div>
              <p className="mt-6 text-xs text-slate-400">No commitment • Built by real engineers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
