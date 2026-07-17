"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"home" | "finance" | "pay" | "services" | "contracts">("home");
  const [showWalletDetails, setShowWalletDetails] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="p-4 flex items-center justify-between" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <button className="p-2 rounded-lg" style={{ background: "var(--background-secondary)" }}>
          <svg className="w-6 h-6" fill="none" stroke="var(--text-primary)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        
        <h1 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>هستو</h1>
        
        <button 
          className="p-2 rounded-lg"
          style={{ background: "var(--background-secondary)" }}
          onClick={() => window.location.href = "/profile"}
        >
          <svg className="w-6 h-6" fill="none" stroke="var(--text-primary)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto pb-24">
        {/* Wallet Card */}
        <div 
          className="wallet-card mb-6 cursor-pointer"
          onClick={() => setShowWalletDetails(!showWalletDetails)}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm opacity-80">کیف پول مادر</span>
            <svg className={`w-5 h-5 transition-transform ${showWalletDetails ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="text-3xl font-bold mb-2">۱۲,۴۵۰,۰۰۰ تومان</div>
          
          {showWalletDetails && (
            <div className="mt-4 pt-4 border-t border-white/20 animate-fadeIn">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="opacity-70">شماره کارت</span>
                  <div className="font-mono">6273-5312-3456-7890</div>
                </div>
                <div>
                  <span className="opacity-70">شماره شبا</span>
                  <div className="font-mono text-xs">IR360170000000328782636009</div>
                </div>
                <div>
                  <span className="opacity-70">شماره حساب</span>
                  <div className="font-mono">328782636009</div>
                </div>
                <div>
                  <span className="opacity-70">تاریخ انقضا</span>
                  <div className="font-mono">12/28</div>
                </div>
              </div>
              
              {/* QR Code Placeholder */}
              <div className="mt-4 p-4 bg-white rounded-lg text-center">
                <div className="w-32 h-32 mx-auto bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-sm">QR Code</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">برای پرداخت حضوری اسکن کنید</p>
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            className="card flex flex-col items-center justify-center py-6 hover:scale-105 transition-transform"
            onClick={() => window.location.href = "/transfer"}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "var(--primary-subtle)" }}>
              <svg className="w-6 h-6" fill="none" stroke="var(--primary)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>واریز</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>پول بفرستید</span>
          </button>
          
          <button 
            className="card flex flex-col items-center justify-center py-6 hover:scale-105 transition-transform"
            onClick={() => window.location.href = "/receive"}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: "var(--success-subtle)" }}>
              <svg className="w-6 h-6" fill="none" stroke="var(--success)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>دریافت</span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>پول بگیرید</span>
          </button>
        </div>

        {/* Recent Transactions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>آخرین تراکنش‌ها</h2>
          
          <div className="space-y-3">
            {[
              { type: "واریز", amount: "۲۵۰,۰۰۰", desc: "به رضا کریمی", date: "امروز", icon: "↗" },
              { type: "دریافت", amount: "۱,۵۰۰,۰۰۰", desc: "از مریم احمدی", date: "امروز", icon: "↙" },
              { type: "شارژ", amount: "۵,۰۰۰,۰۰۰", desc: "از بلو بانک", date: "دیروز", icon: "↗" },
              { type: "قبوض", amount: "۱۸۰,۰۰۰", desc: "قبض برق", date: "۳ روز پیش", icon: "↗" },
            ].map((tx, index) => (
              <div key={index} className="card flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ 
                      background: tx.type === "دریافت" ? "var(--success-subtle)" : "var(--primary-subtle)",
                      color: tx.type === "دریافت" ? "var(--success)" : "var(--primary)"
                    }}
                  >
                    {tx.icon}
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: "var(--text-primary)" }}>{tx.desc}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{tx.date}</div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-semibold" style={{ color: tx.type === "دریافت" ? "var(--success)" : "var(--text-primary)" }}>
                    {tx.type === "دریافت" ? "+" : "-"}{tx.amount}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{tx.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 p-2" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button 
            className="flex flex-col items-center py-2 px-4 rounded-lg transition-colors"
            style={{ color: activeTab === "home" ? "var(--primary)" : "var(--text-muted)" }}
            onClick={() => setActiveTab("home")}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1">خانه</span>
          </button>
          
          <button 
            className="flex flex-col items-center py-2 px-4 rounded-lg transition-colors"
            style={{ color: activeTab === "finance" ? "var(--primary)" : "var(--text-muted)" }}
            onClick={() => setActiveTab("finance")}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-xs mt-1">مدیریت مالی</span>
          </button>
          
          <button 
            className="flex flex-col items-center py-2 px-4 rounded-full -mt-4 transition-transform hover:scale-105"
            style={{ background: "var(--primary)", color: "white" }}
            onClick={() => window.location.href = "/payment"}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs mt-1">پرداخت</span>
          </button>
          
          <button 
            className="flex flex-col items-center py-2 px-4 rounded-lg transition-colors"
            style={{ color: activeTab === "services" ? "var(--primary)" : "var(--text-muted)" }}
            onClick={() => setActiveTab("services")}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs mt-1">خدمات</span>
          </button>
          
          <button 
            className="flex flex-col items-center py-2 px-4 rounded-lg transition-colors"
            style={{ color: activeTab === "contracts" ? "var(--primary)" : "var(--text-muted)" }}
            onClick={() => setActiveTab("contracts")}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs mt-1">قراردادها</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
