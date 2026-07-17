"use client";

import { useState } from "react";

interface Service {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "همه", "خدمات جدید", "بورس و سرمایه‌گذاری", "گردشگری", 
    "موبایل، شارژ و اینترنت", "کیف، کارت و انتقال پول", 
    "روش‌های پرداخت", "قبوض خدمات عمومی", "اسناد دیجیتال",
    "وام، قسط و اعتبار", "نیکوکاری", "خدمات خودرو",
    "سوپرمارکت و غذا", "حمل‌ونقل عمومی", "بیمه",
    "سلامت و پزشکی", "خدمات قوه قضائیه", "خدمات پذیرندگی", "هستو من"
  ];

  const services: Service[] = [
    // خدمات جدید
    { id: "1", name: "باشگاه مشتریان", icon: "🎁", category: "خدمات جدید" },
    { id: "2", name: "کوله بار اربعین", icon: "🎒", category: "خدمات جدید" },
    { id: "3", name: "پرداخت با NFC", icon: "📱", category: "خدمات جدید" },
    { id: "4", name: "ارز اربعین", icon: "💱", category: "خدمات جدید" },
    { id: "5", name: "فروشگاه", icon: "🛒", category: "خدمات جدید" },
    { id: "6", name: "کارت هدیه بانکی", icon: "🎁", category: "خدمات جدید" },
    { id: "7", name: "کیف پول ایران", icon: "👛", category: "خدمات جدید" },
    
    // بورس و سرمایه‌گذاری
    { id: "8", name: "خرید و فروش طلا", icon: "🪙", category: "بورس و سرمایه‌گذاری" },
    { id: "9", name: "صندوق‌های سرمایه‌گذاری", icon: "💰", category: "بورس و سرمایه‌گذاری" },
    { id: "10", name: "سرمایه گذاری", icon: "📈", category: "بورس و سرمایه‌گذاری" },
    
    // گردشگری
    { id: "11", name: "بلیت اتوبوس", icon: "🚌", category: "گردشگری" },
    { id: "12", name: "بلیت قطار", icon: "🚆", category: "گردشگری" },
    { id: "13", name: "پرواز داخلی", icon: "✈️", category: "گردشگری" },
    { id: "14", name: "رزرو هتل", icon: "🏨", category: "گردشگری" },
    
    // موبایل، شارژ و اینترنت
    { id: "15", name: "بسته اینترنت", icon: "📶", category: "موبایل، شارژ و اینترنت" },
    { id: "16", name: "خرید شارژ", icon: "🔋", category: "موبایل، شارژ و اینترنت" },
    { id: "17", name: "شارژ خودکار سیم‌کارت", icon: "🔄", category: "موبایل، شارژ و اینترنت" },
    
    // کیف، کارت و انتقال پول
    { id: "18", name: "چک صیادی", icon: "📝", category: "کیف، کارت و انتقال پول" },
    { id: "19", name: "کیف به کیف", icon: "👛", category: "کیف، کارت و انتقال پول" },
    { id: "20", name: "کارت به کارت", icon: "💳", category: "کیف، کارت و انتقال پول" },
    { id: "21", name: "موجودی کارت", icon: "💰", category: "کیف، کارت و انتقال پول" },
    
    // روش‌های پرداخت
    { id: "22", name: "پرداخت مستقیم", icon: "💳", category: "روش‌های پرداخت" },
    { id: "23", name: "پیگیری انتقال پول", icon: "🔍", category: "روش‌های پرداخت" },
    { id: "24", name: "پرداخت با NFC", icon: "📱", category: "روش‌های پرداخت" },
    
    // قبوض خدمات عمومی
    { id: "25", name: "قبض مخابرات", icon: "📞", category: "قبوض خدمات عمومی" },
    { id: "26", name: "قبض همراه اول", icon: "📱", category: "قبوض خدمات عمومی" },
    { id: "27", name: "قبض آب", icon: "💧", category: "قبوض خدمات عمومی" },
    { id: "28", name: "قبض گاز", icon: "🔥", category: "قبوض خدمات عمومی" },
    { id: "29", name: "قبض برق", icon: "⚡", category: "قبوض خدمات عمومی" },
    
    // نیکوکاری
    { id: "30", name: "فطریه", icon: "🤲", category: "نیکوکاری" },
    { id: "31", name: "نیکوکاری", icon: "❤️", category: "نیکوکاری" },
    
    // خدمات خودرو
    { id: "32", name: "طرح ترافیک تهران", icon: "🚗", category: "خدمات خودرو" },
    { id: "33", name: "خلافی خودرو", icon: "🚗", category: "خدمات خودرو" },
    { id: "34", name: "استعلام پلاک", icon: "🚗", category: "خدمات خودرو" },
    
    // بیمه
    { id: "35", name: "بیمه شخص ثالث", icon: "🚗", category: "بیمه" },
    { id: "36", name: "بیمه بدنه", icon: "🚗", category: "بیمه" },
    { id: "37", name: "بیمه موبایل", icon: "📱", category: "بیمه" },
    
    // سلامت و پزشکی
    { id: "38", name: "نوبت‌دهی پزشک", icon: "🏥", category: "سلامت و پزشکی" },
    { id: "39", name: "آزمایش در منزل", icon: "🧪", category: "سلامت و پزشکی" },
    
    // خدمات قوه قضائیه
    { id: "40", name: "ثبت‌نام ثنا", icon: "📝", category: "خدمات قوه قضائیه" },
    
    // هستو من
    { id: "41", name: "بیمه من", icon: "🛡️", category: "هستو من" },
    { id: "42", name: "کیف پول", icon: "👛", category: "هستو من" },
    { id: "43", name: "باشگاه مشتریان", icon: "🎁", category: "هستو من" },
    { id: "44", name: "هستو پلاس", icon: "⭐", category: "هستو من" },
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === "همه" || service.category === activeCategory;
    const matchesSearch = service.name.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="p-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <h1 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>خدمات</h1>
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            className="input pr-10"
            placeholder="جستجوی خدمت..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </header>

      {/* Categories */}
      <div className="p-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap"
              style={{
                background: activeCategory === category ? "var(--primary)" : "var(--surface)",
                color: activeCategory === category ? "white" : "var(--text-primary)",
                border: `1px solid ${activeCategory === category ? "var(--primary)" : "var(--border)"}`,
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <main className="flex-1 p-4 overflow-auto pb-24">
        <div className="grid grid-cols-4 gap-3">
          {filteredServices.map((service) => (
            <button
              key={service.id}
              className="card flex flex-col items-center justify-center py-4 hover:scale-105 transition-transform"
            >
              <span className="text-2xl mb-2">{service.icon}</span>
              <span className="text-xs text-center leading-tight" style={{ color: "var(--text-primary)" }}>
                {service.name}
              </span>
            </button>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p style={{ color: "var(--text-muted)" }}>خدمتی یافت نشد</p>
          </div>
        )}
      </main>
    </div>
  );
}
