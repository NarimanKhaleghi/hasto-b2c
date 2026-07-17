"use client";

import { useState } from "react";

interface Notification {
  id: string;
  type: "payment" | "receive" | "bill" | "contract" | "debt" | "security";
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: "1", type: "payment", title: "پرداخت موفق", message: "پرداخت ۲۵۰,۰۰۰ تومان به رضا کریمی با موفقیت انجام شد", date: "امروز ۱۴:۳۰", read: false },
    { id: "2", type: "receive", title: "واریز موفق", message: "مریم احمدی ۱,۵۰۰,۰۰۰ تومان به حساب شما واریز کرد", date: "امروز ۱۲:۱۵", read: false },
    { id: "3", type: "bill", title: "یادآوری قبض", message: "قبض برق ماه بعد آماده پرداخت است - ۱۸۰,۰۰۰ تومان", date: "دیروز", read: true },
    { id: "4", type: "contract", title: "پرداخت خودکار", message: "پرداخت خودکار اشتراک فیلیمو فردا انجام میشه", date: "۳ روز پیش", read: true },
    { id: "5", type: "debt", title: "یادآوری قسط", message: "قسط اسنپ‌پی فردا سررسید میشه - ۴۰۰,۰۰۰ تومان", date: "۳ روز پیش", read: true },
    { id: "6", type: "security", title: "ورود جدید", message: "ورود جدید به حساب شما از دستگاه جدید", date: "۱ هفته پیش", read: true },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "payment": return "↗";
      case "receive": return "↙";
      case "bill": return "📋";
      case "contract": return "📝";
      case "debt": return "💰";
      case "security": return "🔒";
    }
  };

  const getColor = (type: Notification["type"]) => {
    switch (type) {
      case "payment": return "var(--primary)";
      case "receive": return "var(--success)";
      case "bill": return "var(--warning)";
      case "contract": return "var(--info)";
      case "debt": return "var(--error)";
      case "security": return "var(--text-muted)";
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="p-4 flex items-center justify-between" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center gap-4">
          <button 
            className="p-2 rounded-lg"
            style={{ background: "var(--background-secondary)" }}
            onClick={() => window.history.back()}
          >
            <svg className="w-6 h-6" fill="none" stroke="var(--text-primary)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            اعلانات
            {unreadCount > 0 && (
              <span className="mr-2 text-sm" style={{ color: "var(--text-muted)" }}>
                ({unreadCount} جدید)
              </span>
            )}
          </h1>
        </div>
        
        {unreadCount > 0 && (
          <button 
            className="text-sm"
            style={{ color: "var(--primary)" }}
            onClick={markAllAsRead}
          >
            خواندن همه
          </button>
        )}
      </header>

      {/* Notifications List */}
      <main className="flex-1 p-4 overflow-auto pb-24">
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className="card cursor-pointer hover:scale-[1.01] transition-transform"
              style={{ 
                opacity: notification.read ? 0.7 : 1,
                borderRight: `4px solid ${notification.read ? "var(--border)" : getColor(notification.type)}`,
              }}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex items-start gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{ 
                    background: `${getColor(notification.type)}20`,
                    color: getColor(notification.type),
                  }}
                >
                  {getIcon(notification.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium" style={{ color: "var(--text-primary)" }}>
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
                    )}
                  </div>
                  <p className="text-sm mb-1" style={{ color: "var(--text-secondary)" }}>
                    {notification.message}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {notification.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="var(--text-muted)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p style={{ color: "var(--text-muted)" }}>اعلانی وجود ندارد</p>
          </div>
        )}
      </main>
    </div>
  );
}
