"use client";

import { useState } from "react";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [otpStatus, setOtpStatus] = useState<"idle" | "success" | "error">("idle");

  const handlePhoneSubmit = () => {
    if (phoneNumber.length === 9) {
      setStep("otp");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }

    // Check if OTP is complete
    if (newOtp.every(digit => digit !== "")) {
      // Mock validation - any 6 digit code works
      setOtpStatus("success");
      setTimeout(() => {
        // Navigate to dashboard
        window.location.href = "/dashboard";
      }, 1000);
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ background: "var(--background)" }}>
      {/* Logo */}
      <div className="mb-8 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: "var(--primary)" }}>
          <span className="text-3xl font-bold text-white">ه</span>
        </div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>هستو</h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>هسته پرداخت ایران</p>
      </div>

      {step === "phone" ? (
        /* Phone Number Step */
        <div className="w-full max-w-sm">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              شماره موبایل خود را وارد کنید
            </h2>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center px-3 py-3 rounded-lg" style={{ background: "var(--background-secondary)", border: "1px solid var(--border)" }}>
                <span className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>09</span>
              </div>
              <input
                type="tel"
                className="input flex-1"
                placeholder="123456789"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 9))}
                maxLength={9}
                dir="ltr"
                style={{ textAlign: "left" }}
              />
            </div>

            <button
              className="btn-primary w-full"
              onClick={handlePhoneSubmit}
              disabled={phoneNumber.length !== 9}
              style={{ opacity: phoneNumber.length !== 9 ? 0.5 : 1 }}
            >
              ارسال کد تایید
            </button>
          </div>

          <p className="text-xs text-center mt-4" style={{ color: "var(--text-muted)" }}>
            با ورود، شرایط استفاده را می‌پذیرید
          </p>
        </div>
      ) : (
        /* OTP Step */
        <div className="w-full max-w-sm">
          <div className="card">
            <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              کد تایید را وارد کنید
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              کد ۶ رقمی به شماره ۰۹{phoneNumber} ارسال شد
            </p>

            <div className="flex gap-2 justify-center mb-6" dir="ltr">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="tel"
                  maxLength={1}
                  className="w-12 h-14 text-center text-xl font-bold rounded-lg border-2 transition-all"
                  style={{
                    background: "var(--surface)",
                    borderColor: otpStatus === "success" ? "var(--success)" : 
                                 otpStatus === "error" ? "var(--error)" : "var(--border)",
                    color: "var(--text-primary)",
                  }}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ""))}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  autoFocus={index === 0}
                />
              ))}
            </div>

            {otpStatus === "success" && (
              <div className="flex items-center justify-center gap-2 mb-4 animate-fadeIn">
                <svg className="w-5 h-5" fill="var(--success)" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span style={{ color: "var(--success)" }}>ورود موفق</span>
              </div>
            )}

            {otpStatus === "error" && (
              <div className="flex items-center justify-center gap-2 mb-4 animate-fadeIn">
                <svg className="w-5 h-5" fill="var(--error)" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span style={{ color: "var(--error)" }}>کد تایید نادرست است</span>
              </div>
            )}

            <button
              className="btn-secondary w-full"
              onClick={() => {
                setOtp(["", "", "", "", "", ""]);
                setOtpStatus("idle");
              }}
            >
              ارسال مجدد کد
            </button>
          </div>

          <button
            className="w-full mt-4 py-2 text-sm"
            style={{ color: "var(--text-muted)" }}
            onClick={() => {
              setStep("phone");
              setOtp(["", "", "", "", "", ""]);
              setOtpStatus("idle");
            }}
          >
            تغییر شماره موبایل
          </button>
        </div>
      )}
    </div>
  );
}
