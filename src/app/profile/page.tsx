"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="p-4 flex items-center gap-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <button 
          className="p-2 rounded-lg"
          style={{ background: "var(--background-secondary)" }}
          onClick={() => window.history.back()}
        >
          <svg className="w-6 h-6" fill="none" stroke="var(--text-primary)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>پروفایل</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto pb-24">
        {/* Profile Info */}
        <div className="card text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: "var(--primary-subtle)" }}>
            <span className="text-2xl font-bold" style={{ color: "var(--primary)" }}>ع</span>
          </div>
          <h2 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>علی محمدی</h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>۰۹۱۲***۱۲۳۴</p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>عضویت: ۱۴۰۵/۰۱/۰۱</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-4">
          {/* General Settings */}
          <div className="card">
            <h3 className="font-medium mb-3" style={{ color: "var(--text-primary)" }}>تنظیمات عمومی</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>زبان</span>
                <span style={{ color: "var(--text-primary)" }}>فارسی</span>
              </div>
              
              <div className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>تم</span>
                <button 
                  className="relative w-12 h-6 rounded-full transition-colors"
                  style={{ background: darkMode ? "var(--primary)" : "var(--border)" }}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <div 
                    className="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform"
                    style={{ left: darkMode ? "24px" : "4px" }}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>فرمت عدد</span>
                <span style={{ color: "var(--text-primary)" }}>فارسی</span>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <span style={{ color: "var(--text-secondary)" }}>فرمت تاریخ</span>
                <span style={{ color: "var(--text-primary)" }}>شمسی</span>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="card">
            <h3 className="font-medium mb-3" style={{ color: "var(--text-primary)" }}>امنیت</h3>
            
            <div className="space-y-3">
              <button className="flex items-center justify-between w-full py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>تغییر رمز عبور</span>
                <svg className="w-5 h-5" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="flex items-center justify-between w-full py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>احراز هویت دو مرحله‌ای</span>
                <svg className="w-5 h-5" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="flex items-center justify-between w-full py-2">
                <span style={{ color: "var(--text-secondary)" }}>دستگاه‌های فعال</span>
                <svg className="w-5 h-5" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="card">
            <h3 className="font-medium mb-3" style={{ color: "var(--text-primary)" }}>اعلان‌ها</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>اعلان پرداخت</span>
                <button className="relative w-12 h-6 rounded-full" style={{ background: "var(--primary)" }}>
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white" />
                </button>
              </div>
              
              <div className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>یادآوری قبض</span>
                <button className="relative w-12 h-6 rounded-full" style={{ background: "var(--primary)" }}>
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white" />
                </button>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <span style={{ color: "var(--text-secondary)" }}>اعلان قرارداد</span>
                <button className="relative w-12 h-6 rounded-full" style={{ background: "var(--primary)" }}>
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white" />
                </button>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="card">
            <h3 className="font-medium mb-3" style={{ color: "var(--text-primary)" }}>درباره</h3>
            
            <div className="space-y-3">
              <button className="flex items-center justify-between w-full py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>درباره هستو</span>
                <svg className="w-5 h-5" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="flex items-center justify-between w-full py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>شرایط استفاده</span>
                <svg className="w-5 h-5" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="flex items-center justify-between w-full py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>پشتیبانی</span>
                <svg className="w-5 h-5" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button className="flex items-center justify-between w-full py-2">
                <span style={{ color: "var(--text-secondary)" }}>نسخه برنامه</span>
                <span style={{ color: "var(--text-muted)" }}>۱.۰.۰</span>
              </button>
            </div>
          </div>

          {/* Logout */}
          <button className="btn-destructive w-full">
            خروج از حساب
          </button>
        </div>
      </main>
    </div>
  );
}
