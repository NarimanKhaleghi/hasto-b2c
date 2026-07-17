"use client";

import { useState } from "react";

type RecipientType = "mobile" | "card" | "sheba";

interface RecentRecipient {
  id: string;
  name: string;
  number: string;
  type: RecipientType;
  bank?: string;
}

export default function TransferPage() {
  const [recipient, setRecipient] = useState("");
  const [recipientType, setRecipientType] = useState<RecipientType | null>(null);
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState<"enter" | "confirm" | "pin" | "success">("enter");

  const recentRecipients: RecentRecipient[] = [
    { id: "1", name: "رضا کریمی", number: "09123456789", type: "mobile" },
    { id: "2", name: "مریم احمدی", number: "6273-5312-3456-7890", type: "card", bank: "تجارت" },
    { id: "3", name: "حسین رضایی", number: "IR360170000000328782636009", type: "sheba" },
  ];

  const detectRecipientType = (value: string): RecipientType | null => {
    if (/^09\d{9}$/.test(value)) return "mobile";
    if (/^\d{16}$/.test(value.replace(/-/g, ""))) return "card";
    if (/^IR\d{24}$/i.test(value) || /^\d{24}$/.test(value)) return "sheba";
    return null;
  };

  const handleRecipientChange = (value: string) => {
    setRecipient(value);
    setRecipientType(detectRecipientType(value));
  };

  const getBankFromCard = (cardNumber: string): string => {
    const prefix = cardNumber.replace(/-/g, "").slice(0, 6);
    const bankPrefixes: Record<string, string> = {
      "627353": "تجارت",
      "627412": "اقتصاد نوین",
      "603799": "ملی",
      "610433": "ملت",
      "627961": "صنعت و معدن",
      "502938": "دی",
      "621986": "سامان",
      "589210": "سپه",
    };
    return bankPrefixes[prefix] || "نامشخص";
  };

  const handleSelectRecipient = (recipient: RecentRecipient) => {
    setRecipient(recipient.number);
    setRecipientType(recipient.type);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="p-4 flex items-center gap-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <button 
          className="p-2 rounded-lg"
          style={{ background: "var(--background-secondary)" }}
          onClick={() => step === "enter" ? window.history.back() : setStep(step === "success" ? "enter" : step === "pin" ? "confirm" : "enter")}
        >
          <svg className="w-6 h-6" fill="none" stroke="var(--text-primary)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>واریز</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto pb-24">
        {step === "enter" && (
          <>
            {/* Recipient Input */}
            <div className="card mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                شماره موبایل، کارت یا شبا
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="input pr-10"
                  placeholder="09123456789 یا 6273-5312-3456-7890"
                  value={recipient}
                  onChange={(e) => handleRecipientChange(e.target.value)}
                  dir="ltr"
                  style={{ textAlign: "left" }}
                />
                {recipientType && (
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <span className="badge badge-info">
                      {recipientType === "mobile" ? "موبایل" : 
                       recipientType === "card" ? getBankFromCard(recipient) : "شبا"}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Recipients */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-3" style={{ color: "var(--text-secondary)" }}>
                واریزی‌های قبلی
              </h3>
              <div className="space-y-2 max-h-64 overflow-auto">
                {recentRecipients.map((item) => (
                  <button
                    key={item.id}
                    className="card w-full flex items-center justify-between hover:scale-[1.02] transition-transform"
                    onClick={() => handleSelectRecipient(item)}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: "var(--primary-subtle)" }}
                      >
                        <span className="font-bold" style={{ color: "var(--primary)" }}>
                          {item.name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium" style={{ color: "var(--text-primary)" }}>{item.name}</div>
                        <div className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                          {item.type === "mobile" ? item.number.replace(/(\d{4})\d{3}(\d{3})/, "$1***$2") :
                           item.type === "card" ? item.number.slice(0, 8) + "****" + item.number.slice(-4) :
                           item.number.slice(0, 8) + "..." + item.number.slice(-4)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.bank && <span className="badge badge-info">{item.bank}</span>}
                      <svg className="w-5 h-5" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Input */}
            {recipient && (
              <div className="card animate-fadeIn">
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  مبلغ (ریال)
                </label>
                <input
                  type="text"
                  className="input text-2xl font-bold"
                  placeholder="۰"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
                  dir="ltr"
                  style={{ textAlign: "left" }}
                />
              </div>
            )}
          </>
        )}

        {step === "confirm" && (
          <div className="card animate-slideUp">
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              تایید پرداخت
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-muted)" }}>گیرنده</span>
                <span className="font-medium" style={{ color: "var(--text-primary)" }}>
                  {recentRecipients.find(r => r.number === recipient)?.name || "نامشخص"}
                </span>
              </div>
              
              <div className="flex justify-between py-2" style={{ borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-muted)" }}>شماره</span>
                <span className="font-mono" style={{ color: "var(--text-primary)" }}>{recipient}</span>
              </div>
              
              <div className="flex justify-between py-2">
                <span style={{ color: "var(--text-muted)" }}>مبلغ</span>
                <span className="font-bold text-xl" style={{ color: "var(--primary)" }}>
                  {parseInt(amount || "0").toLocaleString("fa-IR")} تومان
                </span>
              </div>
            </div>

            <button 
              className="btn-primary w-full mt-6"
              onClick={() => setStep("pin")}
            >
              تایید و پرداخت
            </button>
          </div>
        )}

        {step === "pin" && (
          <div className="card animate-slideUp">
            <h2 className="text-lg font-semibold mb-4 text-center" style={{ color: "var(--text-primary)" }}>
              رمز پرداخت را وارد کنید
            </h2>
            
            <div className="flex gap-2 justify-center mb-6" dir="ltr">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <input
                  key={index}
                  type="password"
                  maxLength={1}
                  className="w-12 h-14 text-center text-xl font-bold rounded-lg border-2"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              ))}
            </div>

            <button 
              className="btn-primary w-full"
              onClick={() => setStep("success")}
            >
              تایید
            </button>
          </div>
        )}

        {step === "success" && (
          <div className="card text-center animate-slideUp">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: "var(--success-subtle)" }}>
              <svg className="w-10 h-10" fill="var(--success)" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              پرداخت موفق
            </h2>
            
            <p className="mb-4" style={{ color: "var(--text-muted)" }}>
              {parseInt(amount || "0").toLocaleString("fa-IR")} تومان به حساب واریز شد
            </p>

            <div className="card mb-6" style={{ background: "var(--background-secondary)" }}>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>شماره پیگیری</div>
              <div className="font-mono text-lg" style={{ color: "var(--text-primary)" }}>123456789012</div>
            </div>

            <button 
              className="btn-primary w-full"
              onClick={() => window.location.href = "/dashboard"}
            >
              بازگشت به خانه
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
