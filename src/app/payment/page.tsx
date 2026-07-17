"use client";

import { useState } from "react";

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState<"id" | "qr" | "nfc" | "nearby" | null>(null);

  const paymentMethods = [
    {
      id: "id" as const,
      title: "شناسه واریز",
      description: "شناسه پرداخت رو وارد کنید",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      color: "var(--primary)",
      bg: "var(--primary-subtle)",
    },
    {
      id: "qr" as const,
      title: "اسکن QR",
      description: "دوربین رو باز کنید",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
      color: "var(--success)",
      bg: "var(--success-subtle)",
    },
    {
      id: "nfc" as const,
      title: "پرداخت NFC",
      description: "گوشی رو نزدیک کنید",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
        </svg>
      ),
      color: "var(--warning)",
      bg: "var(--warning-subtle)",
    },
    {
      id: "nearby" as const,
      title: "پرداخت نزدیک",
      description: "فروشگاه‌های اطراف",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "var(--info)",
      bg: "var(--info-subtle)",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="p-4 flex items-center gap-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <button 
          className="p-2 rounded-lg"
          style={{ background: "var(--background-secondary)" }}
          onClick={() => selectedMethod ? setSelectedMethod(null) : window.history.back()}
        >
          <svg className="w-6 h-6" fill="none" stroke="var(--text-primary)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
          {selectedMethod === "id" ? "شناسه واریز" :
           selectedMethod === "qr" ? "اسکن QR" :
           selectedMethod === "nfc" ? "پرداخت NFC" :
           selectedMethod === "nearby" ? "پرداخت نزدیک" :
           "پرداخت"}
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto pb-24">
        {!selectedMethod ? (
          /* Payment Methods Grid */
          <div className="grid grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                className="card flex flex-col items-center justify-center py-8 hover:scale-105 transition-transform"
                onClick={() => setSelectedMethod(method.id)}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: method.bg, color: method.color }}
                >
                  {method.icon}
                </div>
                <span className="font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                  {method.title}
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {method.description}
                </span>
              </button>
            ))}
          </div>
        ) : selectedMethod === "id" ? (
          /* Payment ID */
          <div className="animate-slideUp">
            <div className="card mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                شناسه واریز
              </label>
              <input
                type="text"
                className="input font-mono"
                placeholder="HST-XXXXXX"
                dir="ltr"
                style={{ textAlign: "left" }}
              />
            </div>

            <button className="btn-primary w-full">
              جستجو
            </button>
          </div>
        ) : selectedMethod === "qr" ? (
          /* QR Scanner */
          <div className="animate-slideUp text-center">
            <div className="card mb-4">
              <div className="w-full h-64 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  <p>دوربین در حال بارگذاری...</p>
                </div>
              </div>
            </div>

            <button className="btn-secondary w-full mb-4">
              انتخاب از گالری
            </button>
          </div>
        ) : selectedMethod === "nfc" ? (
          /* NFC Payment */
          <div className="animate-slideUp text-center">
            <div className="card mb-4">
              <div className="w-full h-48 flex items-center justify-center mb-4">
                <div className="animate-pulse">
                  <svg className="w-24 h-24" fill="none" stroke="var(--primary)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
                  </svg>
                </div>
              </div>
              <p className="text-lg font-medium mb-2" style={{ color: "var(--text-primary)" }}>
                گوشی رو به دستگاه POS نزدیک کنید
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                در انتظار اتصال NFC...
              </p>
            </div>
          </div>
        ) : (
          /* Nearby Shops */
          <div className="animate-slideUp">
            <div className="card mb-4">
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                فروشگاه‌های نزدیک شما
              </p>
              
              <div className="space-y-3">
                {[
                  { name: "کافه رستوران نوبت", distance: "۲۵ متر", address: "خیابان ولیعصر" },
                  { name: "فروشگاه لباس راما", distance: "۴۰ متر", address: "خیابان میرزای شیرازی" },
                  { name: "سوپرمارکت هستی", distance: "۴۵ متر", address: "خیابان انقلاب" },
                ].map((shop, index) => (
                  <button
                    key={index}
                    className="card w-full flex items-center justify-between hover:scale-[1.02] transition-transform"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--info-subtle)" }}>
                        <svg className="w-5 h-5" fill="none" stroke="var(--info)" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="text-right">
                        <div className="font-medium" style={{ color: "var(--text-primary)" }}>{shop.name}</div>
                        <div className="text-xs" style={{ color: "var(--text-muted)" }}>{shop.address}</div>
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="badge badge-info">{shop.distance}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
