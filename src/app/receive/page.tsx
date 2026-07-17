"use client";

import { useState } from "react";

export default function ReceivePage() {
  const [showPaymentId, setShowPaymentId] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const walletInfo = {
    card: "6273-5312-3456-7890",
    sheba: "IR360170000000328782636009",
    mobile: "0912***1234",
  };

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
        <h1 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>دریافت</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto pb-24">
        {/* QR Code Card */}
        <div className="card text-center mb-6">
          <div className="w-48 h-48 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center border-2" style={{ borderColor: "var(--border)" }}>
            <div className="text-center">
              <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">QR Code</span>
              </div>
            </div>
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            برای دریافت پول اسکن کنید
          </p>
        </div>

        {/* Info Cards */}
        <div className="space-y-3 mb-6">
          <div className="card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--primary-subtle)" }}>
                <svg className="w-5 h-5" fill="none" stroke="var(--primary)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <div className="font-medium" style={{ color: "var(--text-primary)" }}>شماره کارت</div>
                <div className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>{walletInfo.card}</div>
              </div>
            </div>
            <button className="p-2 rounded-lg" style={{ background: "var(--background-secondary)" }}>
              <svg className="w-5 h-5" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          <div className="card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--success-subtle)" }}>
                <svg className="w-5 h-5" fill="none" stroke="var(--success)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="font-medium" style={{ color: "var(--text-primary)" }}>شماره شبا</div>
                <div className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>{walletInfo.sheba}</div>
              </div>
            </div>
            <button className="p-2 rounded-lg" style={{ background: "var(--background-secondary)" }}>
              <svg className="w-5 h-5" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Payment ID Button */}
        <button 
          className="card w-full flex items-center justify-center gap-3 py-4 mb-4 hover:scale-[1.02] transition-transform"
          onClick={() => setShowPaymentId(true)}
          style={{ border: "2px dashed var(--primary)" }}
        >
          <svg className="w-6 h-6" fill="none" stroke="var(--primary)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          <span className="font-medium" style={{ color: "var(--primary)" }}>دریافت با شناسه</span>
        </button>

        {/* Share Button */}
        <button 
          className="btn-primary w-full"
          onClick={() => setShowShare(true)}
        >
          اشتراک‌گذاری اطلاعات
        </button>
      </main>

      {/* Payment ID Modal */}
      {showPaymentId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="card w-full max-w-sm animate-slideUp">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>دریافت با شناسه</h2>
              <button onClick={() => setShowPaymentId(false)}>
                <svg className="w-6 h-6" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {!showQR ? (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                    مبلغ (ریال)
                  </label>
                  <input
                    type="text"
                    className="input text-xl font-bold"
                    placeholder="۰"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value.replace(/\D/g, ""))}
                    dir="ltr"
                    style={{ textAlign: "left" }}
                  />
                </div>

                <button 
                  className="btn-primary w-full"
                  onClick={() => setShowQR(true)}
                  disabled={!paymentAmount}
                  style={{ opacity: !paymentAmount ? 0.5 : 1 }}
                >
                  ساخت شناسه پرداخت
                </button>
              </>
            ) : (
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center border-2" style={{ borderColor: "var(--primary)" }}>
                  <div className="text-center">
                    <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">QR Code</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>مبلغ</div>
                  <div className="text-xl font-bold" style={{ color: "var(--primary)" }}>
                    {parseInt(paymentAmount || "0").toLocaleString("fa-IR")} تومان
                  </div>
                </div>

                <button 
                  className="btn-primary w-full"
                  onClick={() => {
                    setShowPaymentId(false);
                    setShowQR(false);
                    setPaymentAmount("");
                  }}
                >
                  بستن
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShare && (
        <div className="fixed inset-0 bg-black/50 flex items-end p-4 z-50">
          <div className="card w-full animate-slideUp">
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              اشتراک‌گذاری
            </h2>
            
            <div className="space-y-3">
              <button className="card w-full flex items-center gap-3 py-3 hover:bg-opacity-50">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--primary-subtle)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="var(--primary)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <span style={{ color: "var(--text-primary)" }}>QR Code</span>
              </button>

              <button className="card w-full flex items-center gap-3 py-3 hover:bg-opacity-50">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--success-subtle)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="var(--success)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span style={{ color: "var(--text-primary)" }}>شماره شبا</span>
              </button>

              <button className="card w-full flex items-center gap-3 py-3 hover:bg-opacity-50">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--warning-subtle)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="var(--warning)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span style={{ color: "var(--text-primary)" }}>شماره کارت</span>
              </button>

              <button className="card w-full flex items-center gap-3 py-3 hover:bg-opacity-50">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--info-subtle)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="var(--info)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span style={{ color: "var(--text-primary)" }}>شماره موبایل</span>
              </button>
            </div>

            <button 
              className="btn-secondary w-full mt-4"
              onClick={() => setShowShare(false)}
            >
              انصراف
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
