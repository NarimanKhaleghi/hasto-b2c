"use client";

import { useState } from "react";

type ContractStatus = "active" | "expired" | "pending";

interface Contract {
  id: string;
  name: string;
  provider: string;
  amount: string;
  period: string;
  status: ContractStatus;
  expiryDate: string;
}

export default function ContractsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | ContractStatus>("all");

  const contracts: Contract[] = [
    { id: "1", name: "برداشت خودکار از حساب", provider: "بلو بانک", amount: "سقف ۱۰۰م", period: "هر زمان", status: "active", expiryDate: "۱۴۰۶/۰۱/۰۱" },
    { id: "2", name: "برداشت خودکار از حساب", provider: "تجارت", amount: "سقف ۴۰م", period: "هر زمان", status: "active", expiryDate: "۱۴۰۶/۰۱/۱۵" },
    { id: "3", name: "اقساط اسنپ‌پی", provider: "اسنپ‌پی", amount: "۴۰۰,۰۰۰", period: "ماهانه", status: "active", expiryDate: "۱۴۰۵/۱۲/۰۱" },
    { id: "4", name: "اقساط دیجی‌پی", provider: "دیجی‌پی", amount: "۵۰۰,۰۰۰", period: "ماهانه", status: "active", expiryDate: "۱۴۰۵/۱۱/۰۱" },
    { id: "5", name: "اقساط تارا", provider: "تارا", amount: "۳۰۰,۰۰۰", period: "ماهانه", status: "expired", expiryDate: "۱۴۰۵/۰۳/۰۱" },
    { id: "6", name: "اشتراک اسنپ‌پرو", provider: "اسنپ‌پرو", amount: "۲۹۹,۰۰۰", period: "ماهانه", status: "active", expiryDate: "۱۴۰۶/۰۱/۰۱" },
    { id: "7", name: "اشتراک ChatGPT", provider: "OpenAI", amount: "۵۰۰,۰۰۰", period: "ماهانه", status: "active", expiryDate: "۱۴۰۶/۰۲/۱۵" },
    { id: "8", name: "اشتراک فیلیمو", provider: "فیلیمو", amount: "۲۴۹,۰۰۰", period: "ماهانه", status: "expired", expiryDate: "۱۴۰۵/۰۶/۰۱" },
    { id: "9", name: "پرداخت خودکار قبض موبایل", provider: "همراه اول", amount: "متغیر", period: "ماهانه", status: "active", expiryDate: "۱۴۰۶/۰۱/۰۱" },
    { id: "10", name: "واریزی هفتگی به حساب فرزند", provider: "فرزند", amount: "۱,۰۰۰,۰۰۰", period: "هفتگی", status: "active", expiryDate: "۱۴۰۵/۱۰/۰۱" },
    { id: "11", name: "واریزی ماهانه به حساب همسر", provider: "همسر", amount: "۱۰,۰۰۰,۰۰۰", period: "ماهانه", status: "active", expiryDate: "۱۴۰۶/۰۱/۰۱" },
  ];

  const filteredContracts = contracts.filter(contract => 
    activeFilter === "all" || contract.status === activeFilter
  );

  const getStatusColor = (status: ContractStatus) => {
    switch (status) {
      case "active": return { bg: "var(--success-subtle)", text: "var(--success)", label: "فعال" };
      case "expired": return { bg: "var(--error-subtle)", text: "var(--error)", label: "منقضی" };
      case "pending": return { bg: "var(--warning-subtle)", text: "var(--warning)", label: "در انتظار" };
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="p-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>قراردادهای من</h1>
          <button className="btn-primary text-sm py-2 px-4">
            + قرارداد جدید
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {[
            { value: "all" as const, label: "همه" },
            { value: "active" as const, label: "فعال" },
            { value: "expired" as const, label: "منقضی" },
            { value: "pending" as const, label: "در انتظار" },
          ].map((filter) => (
            <button
              key={filter.value}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: activeFilter === filter.value ? "var(--primary)" : "transparent",
                color: activeFilter === filter.value ? "white" : "var(--text-muted)",
                border: `1px solid ${activeFilter === filter.value ? "var(--primary)" : "var(--border)"}`,
              }}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </header>

      {/* Contracts List */}
      <main className="flex-1 p-4 overflow-auto pb-24">
        <div className="space-y-3">
          {filteredContracts.map((contract) => {
            const statusStyle = getStatusColor(contract.status);
            return (
              <div key={contract.id} className="card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium" style={{ color: "var(--text-primary)" }}>{contract.name}</h3>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{contract.provider}</p>
                  </div>
                  <span 
                    className="badge"
                    style={{ background: statusStyle.bg, color: statusStyle.text }}
                  >
                    {statusStyle.label}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span style={{ color: "var(--text-muted)" }}>مبلغ: </span>
                    <span className="font-medium" style={{ color: "var(--text-primary)" }}>{contract.amount}</span>
                    <span style={{ color: "var(--text-muted)" }}> / {contract.period}</span>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)" }}>انقضا: </span>
                    <span style={{ color: "var(--text-primary)" }}>{contract.expiryDate}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredContracts.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p style={{ color: "var(--text-muted)" }}>قراردادی یافت نشد</p>
          </div>
        )}
      </main>
    </div>
  );
}
